const { Button } = wp.components;

/**
 * Return either an example image, or an image button.
 *
 * @param openEvent - The event handler
 * @param {object} attributes Array of attributes.
 *    @param {string} src - src attribute of the image
 *    @param {string} description - button text
 *    @param {string} alt - alt attribute of the image
 *    @param {string} classes - css classes | className
 * @returns {object} Button
 */
export function getImageButton(openEvent, attributes) {
  if (attributes.src) {
    return (
      <button
        onClick={openEvent}
        onKeyPress={openEvent}
        type="button"
      >
        <img
          src={attributes.src}
          className={`${attributes.classes} lab-blocks-editor-image`}
          alt={attributes.alt || 'Image Selected'}
        />
      </button>
    );
  }
  return (
    <div className="button-container">
      <Button
        onClick={openEvent}
        className={`${attributes.classes} button button-large lab-blocks-button`}
      >
        {attributes.description || 'Image Selection'}
      </Button>
    </div>
  );
}

export function conditionallyReturnImage(attributes) {
  if (attributes.src) {
    return (
      <img
        src={attributes.src}
        className={`${attributes.classes}`}
        alt={attributes.alt || ''}
      />
    );
  }
  return <span />;
}
