/**
 * BLOCK: Laboratory Blocks Carousel
 */
import classNames from 'classnames';
import { Fragment } from 'react';
import CarouselOptions, {
  CarouselOptionAttributes,
} from './options';
import heightClass from './classes';

const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.editor;
const { select, dispatch } = wp.data;
const { __ } = wp.i18n;
const ALLOWED_BLOCKS = [];

registerBlockType('laboratory-blocks/carousel', {
  title: __('LB Carousel'),
  icon: 'slides',
  category: 'laboratory-blocks',
  description: __('A Bootstrap Carousel'),
  supports: { anchor: true },
  keywords: [
    __('Carousel'),
    __('Slider'),
  ],
  attributes: {
    ...CarouselOptionAttributes,
    clientId: {
      type: 'string',
    },
  },

  edit(props) {
    const { setAttributes, isSelected } = props;
    const { clientId } = props;
    // find innerBlocks, add "active" to the first slide, set attribute slideLength
    const children = select('core/editor').getBlocksByClientId(clientId)[0].innerBlocks;
    const firstChild = children[0] || false;
    if (firstChild) {
      dispatch('core/editor').updateBlockAttributes(firstChild.clientId, { className: 'active' });
      setAttributes({ clientId });
    }

    return [
      !!isSelected && (
        <InspectorControls key="inspector">
          <CarouselOptions {...props} />
        </InspectorControls>
      ),
      <Fragment>
        <p>Laboratory Blocks Carousel:&nbsp;
          <small>Include a unique ID under &quot;Carousel Options&quot;</small>
        </p>
        <hr />
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
      </Fragment>,
    ];
  },

  save(props) {
    const { className, attributes, innerBlocks } = props;
    const { carouselHeight, hasControls, hasIndicators } = attributes;
    let { carouselId } = attributes;
    carouselId = carouselId || 'laboratory-carousel';
    const height = heightClass(attributes);
    const classes = classNames(className, 'carousel', 'slide', height);
    const styles = carouselHeight ? { height: carouselHeight } : {};

    let Indicators;
    if (innerBlocks && innerBlocks.length) {
      Indicators = innerBlocks.map((block, i) => {
        const c = (0 === i) ? 'active' : '';
        return (
          <li
            key={`${carouselId}-trigger-${block.clientId}`}
            data-target={`#${carouselId}`}
            data-slide-to={i}
            className={c}
          />
        );
      });
    }

    return (
      <div
        id={carouselId}
        className={classes}
        data-ride="carousel"
        style={styles}
      >
        <InnerBlocks.Content />
        {
          hasControls && (
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
          )
        }
        {
          hasIndicators && (
            <ol className="carousel-indicators">
              {Indicators}
            </ol>
          )
        }
      </div>
    );
  },
});
