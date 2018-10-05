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

// import ContainerSectionOptions, {
//   ContainerOptionAttributes,
// } from './section-options';

// import Container from '../../components/container';

// Guttenberg Imports.
const { InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { ServerSideRender } = wp.components;

/**
 * Register Block.
 */
registerBlockType('laboratory-blocks/services-section', {
  title: 'Services',
  icon: 'info',
  category: 'laboratory-blocks',
  description: 'A wrapper container with background options.',
  keywords: [
    'Services',
  ],
  attributes: {
    // ...ContainerOptionAttributes,
    // ...BackgroundOptionsAttributes,
  },

  edit(props) {
    const {
      className,
      isSelected,
      attributes,
    } = props;
    // const backgroundStyles = BackgroundOptionsInlineStyles(attributes);
    return [
      !!isSelected && (
        <InspectorControls key="inspector">
          {/* <BackgroundOptions {...props} /> */}
        </InspectorControls>
      ),
      <ServerSideRender
        block="laboratory-blocks/services-section"
        attributes={props.attributes}
      />
    ];
  },

  // save({ className, attributes }) {
  //   const {
  //     backgroundImage,
  //     // includeContainer,
  //     anchorDown,
  //     fullHeight,
  //   } = attributes;

  //   /* eslint-disable */ // Disabled because we want to allow a-tag w/o content.
  //   const arrow = (anchorDown) ? <a className="lab-arrow-down" href={`#${anchorDown}`} /> : <span />; // anchor should be styled in theme.
  //   const anchor = (anchorDown) ? <a name={anchorDown} /> : <span />;
  //   /* eslint-enable */
  //   const fullBackgroundImage = backgroundImage && backgroundImage.url ? backgroundImage.url : ''; // background-image is lazyloaded
  //   const backgroundStyles = BackgroundOptionsInlineStyles(attributes);
  //   let backgroundClasses = BackgroundOptionsClasses(attributes);
  //   backgroundClasses = classNames(
  //     backgroundClasses,
  //     {
  //       'full-height-section': fullHeight,
  //       'lab-background-container': true,
  //       'section-has-arrow': anchorDown,
  //     }
  //   );

  //   // Wrap the content in the container class if the option is selected.
  //   // const content = includeContainer
  //   //   ? <Container><InnerBlocks.Content /></Container>
  //   //   : <InnerBlocks.Content />;

  //   return (
  //     <div className={className}>
  //       <div
  //         style={{ ...backgroundStyles }}
  //         className={backgroundClasses}
  //         data-bg={fullBackgroundImage}
  //       >
  //         ¯\_(ツ)_/¯
  //         {arrow}
  //       </div> {/* background container */}
  //       {anchor}
  //     </div>
  //   );
  // },
  // Render via PHP
  save() {
    return null;
  },
});
