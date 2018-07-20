/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function BackgroundOptionsInlineStyles(attributes) {
  return {
    backgroundColor: 'color' === attributes.backgroundType ? attributes.backgroundColor : null,
    backgroundImage: 'image' === attributes.backgroundType && attributes.backgroundImage ? `url(${attributes.backgroundImage.url})` : null,
  };
}

export default BackgroundOptionsInlineStyles;
