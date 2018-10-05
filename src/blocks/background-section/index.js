/**
 * BLOCK: Laboratory Blocks Container
 */

import classNames from 'classnames';
import './style.scss';
import './editor.scss';

// Options and Attributes
import BackgroundOptions, {
  BackgroundOptionsAttributes,
  BackgroundOptionsClasses,
  BackgroundOptionsInlineStyles,
} from '../../components/options/background';
// css classes
import AlignmentClasses from './classes';
// text helpers
import TextOptions, {
  TextOptionsAttributes,
  TextOptionsInlineStyles,
} from '../../components/options/text';
import ContainerSectionOptions, {
  ContainerOptionAttributes,
} from './section-options';

import Container from '../../components/container';

// Guttenberg Imports.
const { InspectorControls, InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;

/**
 * Register Editor with Color or Image Background Block.
 */
registerBlockType('laboratory-blocks/background-section', {
  title: 'LB Container',
  icon: 'editor-table',
  category: 'laboratory-blocks',
  description: 'A wrapper container with background options.',
  keywords: [
    'Container',
    'Background',
    'Full Height',
  ],
  attributes: {
    ...ContainerOptionAttributes,
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
    return [
      !!isSelected && (
        <InspectorControls key="inspector">
          <ContainerSectionOptions {...props} />
          <BackgroundOptions {...props} />
          <TextOptions {...props} />
        </InspectorControls>
      ),
      <div className={`${className}`} style={backgroundStyles}>
        <small>Laboratory Blocks Container</small>
        <hr />
        <InnerBlocks />
      </div>,
    ];
  },

  save({ className, attributes }) {
    const {
      backgroundImage,
      includeContainer,
      anchorDown,
      fullHeight,
    } = attributes;

    // eslint-disable-next-line
    const arrow = (anchorDown) ? <a className="lab-arrow-down" href={`#${anchorDown}`} /> : <span />; // anchor should be styled in theme.
    const anchor = (anchorDown) ? <a name={anchorDown} /> : <span />;
    const fullBackgroundImage = backgroundImage && backgroundImage.url ? backgroundImage.url : ''; // background-image is lazyloaded
    const backgroundStyles = BackgroundOptionsInlineStyles(attributes);
    const textStyles = TextOptionsInlineStyles(attributes);
    let backgroundClasses = BackgroundOptionsClasses(attributes);
    const alignmentClasses = AlignmentClasses(attributes);
    backgroundClasses = classNames(
      backgroundClasses,
      alignmentClasses,
      {
        'full-height-section': fullHeight,
        'lab-background-container': true,
        'section-has-arrow': anchorDown,
      }
    );

    // Wrap the content in the container class if the option is selected.
    const content = includeContainer
      ? <Container><InnerBlocks.Content /></Container>
      : <InnerBlocks.Content />;

    return (
      <div className={className}>
        <div
          style={{ ...backgroundStyles, ...textStyles }}
          className={backgroundClasses}
          data-bg={fullBackgroundImage}
        >
          {content}
          {arrow}
        </div> {/* background container */}
        {anchor}
      </div>
    );
  },
});
