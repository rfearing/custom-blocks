/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function TextOptionsInlineStyles(attributes) {
  return {
    color: attributes.textColor || '#000',
  };
}

export default TextOptionsInlineStyles;
