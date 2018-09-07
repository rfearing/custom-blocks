/**
 * Internal dependencies
 */

const {
  PanelBody,
  PanelRow,
  CheckboxControl,
  SelectControl,
} = wp.components;
const { PlainText } = wp.editor;
const smallFont = { className: 'has-small-font-size' };

export const ContainerOptionAttributes = {
  anchorDown: {
    type: 'string',
  },
  fullHeight: {
    type: 'bool',
  },
  includeContainer: {
    type: 'bool',
  },
  alignContent: {
    type: 'string',
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
      title="Container Options"
      initialOpen={false}
    >

      <PanelRow>
        <SelectControl
          key="align-content"
          label="How should content be spaced vertically?"
          value={attributes.alignContent ? attributes.alignContent : 'default'}
          options={[
            { label: 'Default - Top', value: 'default' },
            { label: 'Vertically Centered', value: 'centered' },
            { label: 'Spaced Evenly', value: 'evenly' },
          ]}
          onChange={x => setAttributes({ alignContent: x })}
        />
      </PanelRow>

      <hr />

      <PanelRow>
        <CheckboxControl
          {...smallFont}
          key="full-height"
          className="mb-0"
          label="Should the section take up the entire screen?"
          checked={attributes.fullHeight}
          onChange={bool => setAttributes({ fullHeight: bool })}
        />
        <small>If selected the container&#39;s height will span the window</small>
      </PanelRow>

      <hr />

      <PanelRow>
        <CheckboxControl
          {...smallFont}
          key="full-width"
          className="mb-0"
          label="Should the contents have a max width?"
          checked={attributes.includeContainer}
          onChange={bool => setAttributes({ includeContainer: bool })}
        />
        <small>If de-selected the inner content will span 100%</small>
      </PanelRow>

      <hr />

      <PanelRow>
        <small>
          To include a <i>Move Down</i> link, add a unique title (no spaces) below.
        </small>
        <PlainText
          {...smallFont}
          key="section-anchor"
          placeholder="E.G. example-section"
          value={attributes.anchorDown}
          onChange={x => setAttributes({ anchorDown: x })}
          style={{ border: '1px solid #DDD' }}
        />
      </PanelRow>

    </PanelBody>
  );
}

export default ContainerSectionOptions;
