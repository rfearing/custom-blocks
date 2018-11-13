/**
 * Internal dependencies
 */
import TextOptionsAttributes from './attributes';
import TextOptionsInlineStyles from './inline-styles';

const { PanelColorSettings } = wp.editor;
const { __ } = wp.i18n;

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
    <PanelColorSettings
      title={__('Text Color')}
      initialOpen={false}
      colorSettings={[{
        value: attributes.textColor,
        onChange: setTextColor,
        label: __('Text Color'),
      }]}
    />
  );
}

export default TextOptions;
