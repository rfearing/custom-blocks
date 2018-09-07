/**
 * Internal dependencies
 */
import BackgroundOptionsAttributes from './attributes';
import BackgroundOptionsClasses from './classes';
import BackgroundOptionsInlineStyles from './inline-styles';

const {
  ColorPalette,
  MediaUpload,
} = wp.editor;

const {
  Button,
  Dashicon,
  PanelBody,
  PanelColor,
  PanelRow,
  SelectControl,
  CheckboxControl,
} = wp.components;

// Export for ease of importing in individual blocks.
export {
  BackgroundOptionsAttributes,
  BackgroundOptionsClasses,
  BackgroundOptionsInlineStyles,
};

function BackgroundOptions(props) {
  const {
    attributes,
    setAttributes,
    isSelected,
  } = props;

  const setBackgroundType = value => setAttributes({ backgroundType: value });
  const setBackgroundImage = value => setAttributes({ backgroundImage: value });
  const removeBackgroundImage = () => setAttributes({ backgroundImage: null });
  const setBackgroundColor = value => setAttributes({ backgroundColor: value });

  const fixedBgCheckbox = (
    <PanelRow>
      <CheckboxControl
        className="has-small-font-size mb-0"
        key="fixed-bg"
        label="Parallax Background"
        checked={attributes.fixedBg}
        onChange={bool => setAttributes({ fixedBg: bool })}
      />
      <small>If selected the background image will be fixed and it&#39;s content will scroll.</small>
    </PanelRow>
  );

  const imageBackgroundSelect = () => {
    if ('image' !== attributes.backgroundType) {
      return '';
    }

    if (!attributes.backgroundImage) {
      return (
        <div className="media-upload-wrapper">
          <p>
            <MediaUpload
              buttonProps={{ className: 'components-button button button-large' }}
              onSelect={setBackgroundImage}
              type="image"
              value=""
              render={({ open }) => (
                <Button className="button button-large" onClick={open}>
                  <Dashicon icon="format-image" /> Upload Image
                </Button>
              )}
            />
          </p>
          {fixedBgCheckbox}
        </div>
      );
    }

    return (
      <div className="image-wrapper">
        <p>
          <img
            src={attributes.backgroundImage.url}
            alt={attributes.backgroundImage.alt}
          />
        </p>
        {isSelected ? (
          <div className="media-button-wrapper">
            <p>
              <Button
                className="remove-image button button-large"
                onClick={removeBackgroundImage}
              >
                <Dashicon icon="no-alt" /> Remove Image
              </Button>
            </p>
          </div>
        ) : null}
        {fixedBgCheckbox}
      </div>
    );
  }; // imageBackgroundSelect

  const colorPanelSelect = () => {
    if ('color' !== attributes.backgroundType) {
      return '';
    }

    return (
      <PanelColor
        title="Background Color"
        colorValue={attributes.backgroundColor}
      >
        <ColorPalette
          value={attributes.backgroundColor}
          onChange={setBackgroundColor}
        />
      </PanelColor>
    );
  };

  return (
    <PanelBody
      title="Background Options"
      className="labs-background-options"
      initialOpen={false}
    >
      <PanelRow>
        <SelectControl
          key="background-type"
          label="Background Type"
          value={attributes.backgroundType ? attributes.backgroundType : ''}
          options={[
            { label: 'None', value: '' },
            { label: 'Image', value: 'image' },
            { label: 'Color', value: 'color' },
          ]}
          onChange={setBackgroundType}
        />
      </PanelRow>
      <PanelRow>
        { imageBackgroundSelect() }
        { colorPanelSelect() }
      </PanelRow>
    </PanelBody>
  );
}

export default BackgroundOptions;
