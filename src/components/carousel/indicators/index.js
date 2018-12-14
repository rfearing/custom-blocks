/**
 * Indicators for the Carousel Block.
 *
 * @param {int} count The number of InnerBlocks
 * @param {string} clientId Of the carousel container block.
 * @return {object} JSX Dom Elements.
 */
export default function ({ count, clientId }) {
  let i = 1;
  const Indicators = [];
  do {
    const c = (0 === i) ? 'active' : '';
    Indicators.push(
      <li
        key={`${clientId}-trigger-${i}`}
        data-target={`#carousel-${clientId}`}
        data-slide-to={i - 1}
        className={c}
      />,
    );
    i += 1;
  } while (i <= count);

  return (
    <ol className="carousel-indicators">
      {Indicators}
    </ol>
  );
}
