/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */
function heightClass(attributes) {
  return (attributes.carouselHeight) ? '' : 'full-height-section';
}

export default heightClass;
