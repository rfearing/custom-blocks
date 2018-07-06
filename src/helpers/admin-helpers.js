'use strict';

const { Button } = wp.components;

/**
 * Return either an example image, or an image button.
 *
 * @param openEvent - The event handler
 * @param attributes - Array of attributes.
 * @returns {object} Button
 */
export function getImageButton(openEvent, attributes) {
  if(attributes.imageUrl) {
    return (
      <img
        src={ attributes.imageUrl }
        onClick={ openEvent }
        className="image"
      />
    );
  }
  else {
    return (
      <div className="button-container">
        <Button
          onClick={ openEvent }
          className="button button-large"
        >
          BG Image
        </Button>
      </div>
    );
  }
}