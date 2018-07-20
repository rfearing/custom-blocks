/**
 * Internal dependencies
 */

const {
  PanelBody,
  PanelRow,
  CheckboxControl,
} = wp.components;

export const HeroOptionsAttributes = {
  includeArrow: {
    type: 'bool',
  },
  fullHeight: {
    type: 'bool',
  },
};

function HeroOptions(props) {
  const {
    attributes,
    setAttributes,
  } = props;

  return (
    <PanelBody
      title="Hero Section Options"
      className="labs-background-options"
      initialOpen={false}
    >
      <PanelRow>
        <CheckboxControl
          key="arrow-down"
          label="Include Arrow Down?"
          checked={attributes.includeArrow}
          onChange={bool => setAttributes({ includeArrow: bool })}
        />
      </PanelRow>

      <PanelRow>
        <CheckboxControl
          key="full-height"
          label="Make 100% height?"
          checked={attributes.fullHeight}
          onChange={bool => setAttributes({ fullHeight: bool })}
        />
      </PanelRow>
    </PanelBody>
  );
}

export default HeroOptions;
