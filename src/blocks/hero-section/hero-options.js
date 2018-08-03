/**
 * Internal dependencies
 */

const {
  PanelBody,
  PanelRow,
  CheckboxControl,
  PanelColor,
} = wp.components;
const { PlainText, ColorPalette } = wp.editor;
const smallFont = { className: 'has-small-font-size' };

export const HeroOptionsAttributes = {
  anchorDown: {
    type: 'string',
  },
  fullHeight: {
    type: 'bool',
  },
  logoBeforeHeading: {
    type: 'bool',
  },
  headingButtonLink: {
    type: 'string',
  },
  buttonColor: {
    type: 'string',
  },
};

function HeroOptions(props) {
  const {
    attributes,
    setAttributes,
  } = props;

  const buttonColorSelector = (
    <PanelColor
      title="Button Background Color"
      colorValue={attributes.buttonColor}
      initialOpen={false}
    >
      <ColorPalette
        value={attributes.buttonColor}
        onChange={x => setAttributes({ buttonColor: x })}
      />
    </PanelColor>
  );

  return (
    <PanelBody
      {...smallFont}
      title="Hero Section Options"
      initialOpen={false}
    >
      <PanelRow>
        <CheckboxControl
          {...smallFont}
          key="full-height"
          label="Make 100% height?"
          checked={attributes.fullHeight}
          onChange={bool => setAttributes({ fullHeight: bool })}
        />
      </PanelRow>

      <PanelRow>
        <CheckboxControl
          {...smallFont}
          key="reverse-order"
          label="Reverse the Logo and Heading (Heading First)?"
          checked={attributes.logoBeforeHeading}
          onChange={bool => setAttributes({ logoBeforeHeading: bool })}
        />
      </PanelRow>

      <PanelRow>
        <small>
          To include a <i>Move Down</i> link, add a unique title (no spaces) below.
        </small>
        <PlainText
          {...smallFont}
          key="hero-anchor"
          placeholder="E.G. hero-section"
          value={attributes.anchorDown}
          onChange={x => setAttributes({ anchorDown: x })}
          style={{ border: '1px solid #DDD' }}
        />
      </PanelRow>

      <PanelRow>
        <small>
          To display the heading as a button, include a link.
        </small>
        <PlainText
          {...smallFont}
          key="hero-as-button"
          value={attributes.headingButtonLink}
          onChange={x => setAttributes({ headingButtonLink: x })}
          style={{ border: '1px solid #DDD' }}
        />
      </PanelRow>

      {attributes.anchorDown && buttonColorSelector}

    </PanelBody>
  );
}

export default HeroOptions;
