const {
  MediaUpload,
} = wp.editor;

const {
  Button,
  Dashicon,
} = wp.components;

/**
 * Conditional Return Add Image or Remove Image.
 * @param {object} attributes - attributes of the block.
 *    @param setAttributes() - function provided by wp.
 *    @param isSelected - boolean provided by wp.
 *    @param imageName (required) (string) The name of the attribute you want to save the image as.
 */
function imageSelector(props) {
  const {
    attributes,
    setAttributes,
    isSelected,
    imageName,
  } = props;
  const setImage = value => setAttributes({ [imageName]: value });
  const removeImage = () => setAttributes({ [imageName]: null });

  if (!attributes[imageName]) {
    return (
      <div className="media-upload-wrapper">
        <p>
          <MediaUpload
            buttonProps={{ className: 'components-button button button-large' }}
            onSelect={setImage}
            type="image"
            value=""
            render={({ open }) => (
              <Button className="button button-large" onClick={open}>
                <Dashicon icon="format-image" /> Upload Image
              </Button>
            )}
          />
        </p>
      </div>
    );
  }

  // some images are too small and don't have thumbnail size
  const imageUrl = attributes[imageName].sizes.thumbnail
    ? attributes[imageName].sizes.thumbnail.url
    : attributes[imageName].url;

  return (
    <div className="image-wrapper">
      <p>
        <img
          src={imageUrl}
          alt={attributes[imageName].alt}
        />
      </p>
      {isSelected ? (
        <div className="media-button-wrapper">
          <p>
            <Button
              className="remove-image button button-large"
              onClick={removeImage}
            >
              <Dashicon icon="no-alt" /> Remove Image
            </Button>
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default imageSelector;
