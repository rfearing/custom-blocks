/**
 * BLOCK: Slide - Carousel Child Block
 */

import classNames from 'classnames';
import './style.scss';

// Options and Attributes
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

const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.editor;
const { __ } = wp.i18n;

registerBlockType('laboratory-blocks/slide', {
  title: __('LB Slide'),
  icon: 'slides',
  parent: ['laboratory-blocks/carousel'],
  category: 'laboratory-blocks',
  description: __('A Slide for LB Carousel'),
  keywords: [
    __('Carousel'),
    __('Slide'),
    __('Slider'),
  ],
  attributes: {
    ...BackgroundOptionsAttributes,
    ...TextOptionsAttributes,
  },

  edit(props) {
    const {
      className,
      isSelected,
      attributes,
    } = props;
    const backgroundStyles = BackgroundOptionsInlineStyles(attributes);
    const cssClasses = classNames(className, 'carousel-item');
    return [
      !!isSelected && (
        <InspectorControls key="inspector">
          <BackgroundOptions {...props} />
          <TextOptions {...props} />
        </InspectorControls>
      ),
      <div className={cssClasses} style={backgroundStyles}>
        <p><b>{__('Slide')}:</b></p>
        <InnerBlocks />
      </div>,
    ];
  },

  save({ className, attributes }) {
    const {
      backgroundImage,
    } = attributes;
    // background-image is lazyloaded
    const fullBackgroundImage = backgroundImage && backgroundImage.url ? backgroundImage.url : '';
    const backgroundStyles = BackgroundOptionsInlineStyles(attributes);
    const textStyles = TextOptionsInlineStyles(attributes);
    let backgroundClasses = BackgroundOptionsClasses(attributes);
    backgroundClasses = classNames(
      className,
      backgroundClasses,
      'lab-background-container',
      'carousel-item',
      'lazyload',
    );

    return (
      <div
        style={{ ...backgroundStyles, ...textStyles }}
        className={backgroundClasses}
        data-bg={fullBackgroundImage}
      >
        <InnerBlocks.Content />
      </div>
    );
  },
});
