/**
 * BLOCK: Laboratory Blocks Carousel
 */
import classNames from 'classnames';
import './editor.scss';
import './style.scss';
import { Fragment } from 'react';
import CarouselOptions, {
  CarouselOptionAttributes,
} from './options';
import heightClass from './classes';
import Indicators from '../../components/carousel/indicators';

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
  keywords: [
    __('Carousel'),
    __('Slider'),
  ],
  attributes: {
    ...CarouselOptionAttributes,
    clientId: {
      type: 'string',
    },
    innerCount: {
      type: 'integer',
    },
  },

  edit(props) {
    const { setAttributes, isSelected } = props;
    const { clientId, attributes } = props;
    // find innerBlocks, add "active" to the first slide, set attribute slideLength
    const children = select('core/editor').getBlocksByClientId(clientId)[0].innerBlocks;
    // children.length changed after update... this seems to work:
    const innerCount = select('core/editor').getBlocksByClientId(clientId)[0].innerBlocks.length;
    const firstChild = children[0] || false;
    if (firstChild) {
      dispatch('core/editor').updateBlockAttributes(firstChild.clientId, { className: 'active' });
      setAttributes({ clientId, innerCount });
    }

    return [
      !!isSelected && (
        <InspectorControls key="inspector">
          <CarouselOptions {...props} />
        </InspectorControls>
      ),
      <Fragment>
        <p>Laboratory Blocks Carousel:</p>
        <hr />
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
        {
          attributes.hasIndicators && (
            <Indicators count={attributes.innerCount} clientId={clientId} />
          )
        }
      </Fragment>,
    ];
  },

  save(props) {
    const { className, attributes } = props;
    const {
      carouselHeight,
      hasControls,
      hasIndicators,
      clientId,
      innerCount,
    } = attributes;
    const height = heightClass(attributes);
    const classes = classNames(className, 'carousel', 'slide', height);
    const styles = carouselHeight ? { height: carouselHeight } : {};

    return (
      <div
        id={`carousel-${clientId}`}
        className={classes}
        data-ride="carousel"
        style={styles}
      >
        <InnerBlocks.Content />
        {
          hasControls && (
            <Fragment>
              <a claclassName="carousel-control-prev" href={`#${clientId}`} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a claclassName="carousel-control-prev" href={`#${clientId}`} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </Fragment>
          )
        }
        {
          hasIndicators && (
            <Indicators count={innerCount} clientId={clientId} />
          )
        }
      </div>
    );
  },
});
