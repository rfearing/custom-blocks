/**
 * BLOCK: laboratory-blocks
 *
 * Registering a "Hero" section in Gutenberg.
 * Primary style in ./style.scss | Specific styles through child or custom WP theme.
 */

// Bootstrap components
import { Button } from 'reactstrap';

// CSS.
import './style.scss';
import './editor.scss';

// background helpers
import BackgroundOptions, {
  BackgroundOptionsAttributes,
  BackgroundOptionsClasses,
  BackgroundOptionsInlineStyles,
} from '../../components/options/background';
// text helpers
import TextOptions, {
  TextOptionsAttributes,
  TextOptionsInlineStyles,
} from '../../components/options/text';
// hero specific helpers
import HeroOptions, { HeroOptionsAttributes } from './hero-options';
import ImageSelector from '../../components/options/image';

// Selectors. In CSS target inside .wp-block-<your-registered-blocktype>
// By including CSS classes as variables we reduce the chance of misspelling later.
const ARROW = 'arrow';

// Guttenberg Imports.
const { PlainText, InspectorControls } = wp.editor;
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
    ...TextOptionsAttributes,
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
          <TextOptions {...props} />
        </InspectorControls>
      ),
      <div className={`${className}`}>
        <p>Hero Section</p>
        <hr />
        {/* Logo */}
        <div className="py-3">
          <p>Logo: </p>
          <ImageSelector {...props} imageName="logoImage" />
        </div>

        {/* Hero Text */}
        <div className="py-3">
          <p>Heading Text: </p>
          <PlainText
            onChange={content => setAttributes({ title: content })}
            value={attributes.title}
            placeholder="Anchor Text"
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
      anchorDown,
      logoBeforeHeading,
      headingButtonLink,
    } = attributes;

    // eslint-disable-next-line
    const arrow = (anchorDown) ? <a className={ARROW} href={anchorDown} /> : <span />; // anchor should be styled in theme.
    let backgroundClasses = BackgroundOptionsClasses(attributes);
    const heroTitle = () => {
      let heading;

      if (!title) {
        heading = '';
      }

      if (headingButtonLink) {
        heading = (
          <Button style={{ backgroundColor: attributes.buttonColor || '#FFF' }}>
            <h3 className="labs-hero-title" style={TextOptionsInlineStyles(attributes)}>
              <a href={headingButtonLink}>
                {title}
              </a>
            </h3>
          </Button>
        );
      } else {
        heading = (
          <h3 className="labs-hero-title" style={TextOptionsInlineStyles(attributes)}>
            {title}
          </h3>
        );
      }

      return heading;
    };

    // to make full-height is to just add a css class.
    if (attributes.fullHeight) {
      backgroundClasses += ' full-height-section ';
    }

    return (
      <div className={className}>
        <div
          style={BackgroundOptionsInlineStyles(attributes)}
          className={backgroundClasses}
        >
          {logoBeforeHeading && heroTitle()} {/* reverse order */}
          {logoImage && <img src={logoImage.url} alt={logoImage.alt} />}
          {!logoBeforeHeading && heroTitle()} {/* default order */}
          {arrow}
        </div>
        {anchorDown && <span id={`#${anchorDown}`} />}
      </div>
    );
  },
});
