/**
 * BLOCK: laboratory-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

// Components.
import { PhotoshopPicker } from 'react-color';

// CSS.
import '../editor.scss';
import './style.scss';
import './editor.scss';

// Helpers
import { getImageButton, conditionallyReturnImage } from '../../helpers/admin-helpers';

// Selectors. In CSS target inside .wp-block-<your-registered-blocktype>
// By including CSS classes as variables we reduce the chance of misspelling later.
const TITLE = 'title';
const LOGO = 'logo';
const ARROW = 'arrow';
const BG = 'background';
const BG_COLOR = 'background-color';

// Guttenberg Imports.
const { PlainText, MediaUpload } = wp.editor;
const { registerBlockType } = wp.blocks;
const { CheckboxControl } = wp.components;

/**
 * Register Full Screen Gutenberg Block.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 *
 * Note the dots for the CSS selectors are added here.
 */
registerBlockType('laboratory-blocks/full-screen-section', {
  title: 'Full Screen Section',
  icon: 'editor-expand',
  category: 'common',

  attributes: {
    title: {
      source: 'text',
      selector: `.${TITLE}`,
    },
    includeArrow: {
      selector: `.${ARROW}`,
    },
    logoUrl: {
      attribute: 'src',
      selector: `.${LOGO}`,
    },
    bgImageUrl: {
      attribute: 'src',
      selector: `.${BG}`,
    },
    bgColor: {
      selector: `.${BG_COLOR}`,
    },
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   */
  edit({ attributes, className, setAttributes }) {
    return (
      <div className={`${className}`}>
        <p>Full Page Section</p>
        <hr />
        <div className="">
          <p>Background Color:</p>
          <PhotoshopPicker
            onChangeComplete={color => setAttributes({ bgColor: color.hex })}
            color={attributes.bgColor || '#FFFFFF'}
          />
        </div>

        {/* Background Image */}
        <div className="py-3">
          <p>Background Image: </p>
          <MediaUpload
            onSelect={media => setAttributes({ bgImageUrl: media.url })}
            type="image"
            value={attributes.bgImageUrl}
            render={({ open }) => getImageButton(open, {
              ...attributes,
              src: attributes.bgImageUrl,
            })}
          />
        </div>

        {/* Logo */}
        <div className="py-3">
          <p>Logo: </p>
          <MediaUpload
            onSelect={media => setAttributes({ logoUrl: media.url })}
            type="image"
            value={attributes.logoUrl}
            render={({ open }) => getImageButton(open, {
              ...attributes,
              description: 'Logo',
              src: attributes.logoUrl,
            })}
          />
        </div>

        {/* Hero Text */}
        <div className="py-3">
          <p>Heading Text: </p>
          <PlainText
            onChange={content => setAttributes({ title: content })}
            value={attributes.title}
            placeholder="Hero Text"
            className="heading"
          />
        </div>

        {/* Downward Link */}
        <div className="py-3">
          <CheckboxControl
            label="Include Arrow Down?"
            checked={attributes.includeArrow}
            onChange={bool => setAttributes({ includeArrow: bool })}
          />
        </div>
      </div>
    );
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   */
  save({ attributes }) {
    const {
      bgImageUrl,
      logoUrl,
      title,
      includeArrow,
      bgColor,
    } = attributes;

    const bottomRef = `below-labs-full-screen-section-${Math.random(99)}`;
    const arrow = (includeArrow) ? <a className={ARROW} href={bottomRef} /> : <span />;
    const logo = conditionallyReturnImage({ src: logoUrl });
    let bgStyle = { backgroundColor: bgColor };
    if (bgImageUrl) {
      bgStyle = { ...bgStyle, backgroundImage: `url(${bgImageUrl})` };
    }

    return (
      <div
        className={BG}
        style={bgStyle}
      >
        <div className="container">
          {logo}
          <h3 className={TITLE}>
            {title}
          </h3>
          {arrow}
          <span className={BG_COLOR}>{bgColor}</span>
        </div>
        <span id={`#${bottomRef}`} />
      </div>
    );
  },
});
