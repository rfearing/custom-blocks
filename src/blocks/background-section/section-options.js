/**
 * Internal dependencies
 */

const { __ } = wp.i18n;
const {
  PanelBody,
  PanelRow,
  CheckboxControl,
} = wp.components;

const smallFont = { className: 'has-small-font-size' };
const fullHeightLabel = (
  <span>
    Should the section take up the entire screen?<br />
    <small>If selected the container&#39;s height will span the window</small>
  </span>
);
const maxWidthLabel = (
  <span>
    Should the contents have a max width?<br />
    <small>If de-selected the inner content will span 100%</small>
  </span>
);

export const ContainerOptionAttributes = {
  fullHeight: {
    type: 'bool',
  },
  includeContainer: {
    type: 'bool',
  },
};

function ContainerSectionOptions(props) {
  const {
    attributes,
    setAttributes,
  } = props;

  return (
    <PanelBody
      {...smallFont}
      title={__('Container Options')}
      initialOpen={false}
    >
      <PanelRow>
        <CheckboxControl
          {...smallFont}
          key="full-height"
          className="mb-0"
          label={fullHeightLabel}
          checked={attributes.fullHeight}
          onChange={bool => setAttributes({ fullHeight: bool })}
        />
      </PanelRow>

      <hr />

      <PanelRow>
        <CheckboxControl
          {...smallFont}
          key="full-width"
          className="mb-0"
          label={maxWidthLabel}
          checked={attributes.includeContainer}
          onChange={bool => setAttributes({ includeContainer: bool })}
        />
      </PanelRow>
    </PanelBody>
  );
}

export default ContainerSectionOptions;
