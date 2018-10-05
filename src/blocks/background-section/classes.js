/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */
function AlignmentClasses(attributes) {
  let cssClass;
  switch (attributes.alignContent) {
    case 'centered':
      cssClass = 'labs-container-justify-center';
      break;
    case 'evenly':
      cssClass = 'labs-container-justify-evenly';
      break;
    default:
      cssClass = 'labs-container';
  }
  return cssClass;
}

export default AlignmentClasses;
