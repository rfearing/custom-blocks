/**
 * Internal dependencies
 */
import TextOptionsAttributes from './attributes';
import TextOptionsInlineStyles from './inline-styles';

const { ColorPalette } = wp.editor;
const { PanelColor } = wp.components;

// Export for ease of importing in individual blocks.
export {
  TextOptionsAttributes,
  TextOptionsInlineStyles,
};

function TextOptions(props) {
  const {
    attributes,
    setAttributes,
  } = props;

  const setTextColor = value => setAttributes({ textColor: value });

  return (
    <div>
      <PanelColor
        title="Text Color"
        colorValue={attributes.textColor}
        initialOpen={false}
      >
        <ColorPalette
          value={attributes.textColor}
          onChange={setTextColor}
        />
      </PanelColor>
    </div>
  );
}

export default TextOptions;
