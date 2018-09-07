/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function BackgroundOptionsInlineStyles(attributes) {
  const { backgroundImage } = attributes;
  let background = null;
  // lazyload if possible
  if (backgroundImage) {
    background = (
      backgroundImage
      && backgroundImage.sizes
    ) ? backgroundImage.sizes.medium.url
      : backgroundImage.url;
  }

  return {
    backgroundColor: 'color' === attributes.backgroundType ? attributes.backgroundColor : null,
    backgroundImage: 'image' === attributes.backgroundType && attributes.backgroundImage ? `url(${background})` : null,
  };
}

export default BackgroundOptionsInlineStyles;
