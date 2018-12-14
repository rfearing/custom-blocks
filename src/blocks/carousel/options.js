/*
 * Options for the Carousel Container
 */

const { __ } = wp.i18n;
const {
  PanelBody,
  PanelRow,
  CheckboxControl,
} = wp.components;
const { PlainText } = wp.editor;

const smallFont = { className: 'has-small-font-size' };
const inputStyle = {
  border: '1px solid #DDD',
  padding: '3px',
  marginTop: '3px',
};
const heightLabel = (
  <span>
    <b>Height of the Carousel:</b><br />
    Value format: <code>{'<value><unit>'}</code><br />
    e.g. <code>500px</code> or <code>33vw</code><br />
    <small>If left empty the carousel height will span the window (i.e. full height)</small>
  </span>
);
const controlLabel = (
  <span>
    Include Controls?<br />
    <small>e.g. Left/ Right arrows</small>
  </span>
);
const indicatorLabel = (
  <span>
    Include Indicators?<br />
    <small>e.g. dots below the slider</small>
  </span>
);

export const CarouselOptionAttributes = {
  carouselHeight: {
    type: 'string',
  },
  hasControls: {
    type: 'bool',
  },
  hasIndicators: {
    type: 'bool',
  },
};

function CarouselOptions(props) {
  const {
    attributes,
    setAttributes,
  } = props;

  return (
    <PanelBody
      {...smallFont}
      title={__('Carousel Options')}
      initialOpen={false}
    >
      {heightLabel}
      <PanelRow>
        <PlainText
          {...smallFont}
          key="carousel-height"
          placeholder="Default is full window height."
          value={attributes.carouselHeight}
          onChange={x => setAttributes({ carouselHeight: x })}
          style={inputStyle}
        />
      </PanelRow>
      <p><b>Carousel Features:</b></p>
      <hr />
      <PanelRow>
        <CheckboxControl
          {...smallFont}
          key="carousel-with-controls"
          label={controlLabel}
          checked={attributes.hasControls}
          onChange={bool => setAttributes({ hasControls: bool })}
        />
      </PanelRow>
      <PanelRow>
        <CheckboxControl
          {...smallFont}
          key="carousel-with-indicators"
          label={indicatorLabel}
          checked={attributes.hasIndicators}
          onChange={bool => setAttributes({ hasIndicators: bool })}
        />
      </PanelRow>
    </PanelBody>
  );
}

export default CarouselOptions;
