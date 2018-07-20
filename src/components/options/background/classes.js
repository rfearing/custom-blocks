/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */
function BackgroundOptionsClasses(attributes) {
  return [
    { 'labs-image-background': 'image' === attributes.backgroundType },
    { 'labs-color-background': 'color' === attributes.backgroundType },
    { 'labs-video-background': 'video' === attributes.backgroundType },
  ];
}

export default BackgroundOptionsClasses;
