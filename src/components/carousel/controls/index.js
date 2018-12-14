import { Fragment } from 'react';

/**
 * Indicators for the Carousel Block.
 */
export default function ({ carouselId }) {
  return (
    <Fragment>
      <a claclassName="carousel-control-prev" href={`#${carouselId}`} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a claclassName="carousel-control-prev" href={`#${carouselId}`} role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </Fragment>
  );
}
