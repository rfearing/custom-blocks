/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */
function BackgroundOptionsClasses(attributes) {
  let backgroundClass;
  switch (attributes.backgroundType) {
    case 'image':
      backgroundClass = 'labs-image-background';
      break;
    case 'color':
      backgroundClass = 'labs-color-background';
      break;
    case 'video':
      backgroundClass = 'labs-video-background';
      break;
    default:
      backgroundClass = '';
  }
  return backgroundClass;
}

export default BackgroundOptionsClasses;
