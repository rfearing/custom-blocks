/**
 * DEPRECATED BLOCK: Laboratory Blocks Call To Action
 * REASON FOR DEPRECATION: Having a hero section seems unneeded,
 * especially as we've created a Background Section with Child Blocks.
 */

import classNames from 'classnames';
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

// Guttenberg Imports.
const { PlainText, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;

/**
 * Register Full Screen Gutenberg Block.
 */
registerBlockType('laboratory-blocks/hero-section', {
  title: 'LB Call To Action Section',
  icon: 'editor-expand',
  category: 'laboratory-blocks',
  description: 'A hero section with options for a colored or image background.',
  keywords: [
    'Hero',
    'Call To Action',
  ],
  attributes: {
    title: { type: 'string' },
    logoImage: { type: 'object' },
    ...HeroOptionsAttributes,
    ...BackgroundOptionsAttributes,
    ...TextOptionsAttributes,
  },

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
        <small>Call To Action Section</small>
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

  save({ className, attributes }) {
    const {
      logoImage,
      title,
      anchorDown,
      logoBeforeHeading,
      headingButtonLink,
      backgroundImage,
      fullHeight,
    } = attributes;

    // eslint-disable-next-line
    const arrow = (anchorDown) ? <a className="lab-arrow-down" href={`#${anchorDown}`} /> : <span />; // anchor should be styled in theme.
    const fullBackgroundImage = backgroundImage && backgroundImage.url ? backgroundImage.url : ''; // background-image is lazyloaded
    let backgroundClasses = BackgroundOptionsClasses(attributes);
    backgroundClasses = classNames(backgroundClasses, {
      'full-height-section': fullHeight,
    });

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

    return (
      <div className={className}>
        <div
          style={BackgroundOptionsInlineStyles(attributes)}
          className={backgroundClasses}
          data-bg={fullBackgroundImage}
        >
          {logoBeforeHeading && heroTitle()} {/* reverse order */}
          {logoImage && <img src={logoImage.url} alt={logoImage.alt} className="hero-section-logo" />}
          {!logoBeforeHeading && heroTitle()} {/* default order */}
          {arrow}
        </div>
        {anchorDown && <span id={anchorDown} />}
      </div>
    );
  },
});
