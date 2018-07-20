/**
 * BLOCK: laboratory-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

// CSS.
import './style.scss';
import './editor.scss';

// Helpers
import { getImageButton, conditionallyReturnImage } from '../../helpers/admin-helpers';
import BackgroundOptions, {
  BackgroundOptionsAttributes,
  BackgroundOptionsClasses,
  BackgroundOptionsInlineStyles,
} from '../../components/options/background';
import HeroOptions, { HeroOptionsAttributes } from './hero-options';

// Selectors. In CSS target inside .wp-block-<your-registered-blocktype>
// By including CSS classes as variables we reduce the chance of misspelling later.
const ARROW = 'arrow';

// Guttenberg Imports.
const { PlainText, MediaUpload, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;

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
registerBlockType('laboratory-blocks/hero-section', {
  title: 'Hero Section',
  icon: 'editor-expand',
  category: 'common',
  anchor: true,
  description: 'A hero section with options for a colored or image background.',
  keywords: [
    'Hero',
    'Background',
    'Full Height',
  ],
  attributes: {
    title: { type: 'string' },
    logoImage: { type: 'object' },
    ...HeroOptionsAttributes,
    ...BackgroundOptionsAttributes,
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   */
  edit(props) {
    const {
      attributes,
      className,
      setAttributes,
      isSelected,
    } = props;
    return [
      !!isSelected && (
        <InspectorControls key="inspector">
          <HeroOptions {...props} />
          <BackgroundOptions {...props} />
        </InspectorControls>
      ),
      <div className={`${className}`}>
        <p>Hero Section</p>
        <hr />
        {/* Logo */}
        <div className="py-3">
          <p>Logo: </p>
          <MediaUpload
            onSelect={media => setAttributes({ logoImage: media.url })}
            type="image"
            value={attributes.logoImage}
            render={({ open }) => getImageButton(open, {
              ...attributes,
              description: 'Logo',
              src: attributes.logoImage,
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

      </div>,
    ];
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   */
  save({ className, attributes }) {
    const {
      logoImage,
      title,
      includeArrow,
    } = attributes;

    const bottomRef = '...';
    // eslint-disable-next-line
    const arrow = (includeArrow) ? <a className={ARROW} href={bottomRef} /> : <span />;
    const logo = conditionallyReturnImage({ src: logoImage });
    const heightClass = (attributes.fullHeight) ? 'full-height-section' : '';

    return (
      <div
        className={`${className} ${heightClass}`}
        style={BackgroundOptionsInlineStyles(attributes)}
      >
        <div className={BackgroundOptionsClasses(attributes)}>
          {logo}
          {title && <h3 className="labs-hero-title">{title}</h3>}
          {/* eslint-disable-next-line */}
          {includeArrow && <a className={ARROW} href={bottomRef} />}
        </div>
        <span id={`#${bottomRef}`} />
      </div>
    );
  },
});
