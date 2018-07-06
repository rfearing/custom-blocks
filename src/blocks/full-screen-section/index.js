/**
 * BLOCK: laboratory-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import { getImageButton } from '../../helpers/admin-helpers';

const { RichText, MediaUpload, PlainText, InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Button } = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'laboratory-blocks/full-screen-section', {
  title: 'Full Screen Section',
  icon: 'editor-expand',
  category: 'common',

  attributes: {
    title: {
      source: 'text',
      selector: '.card__title'
    },
    body: {
      type: 'array',
      source: 'children',
      selector: '.card__body'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.card__image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.card__image'
    },
  },
  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit({ attributes, className, setAttributes }) {
    return (
      <div className="container">

        <MediaUpload
          onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
          type="image"
          value={ attributes.imageID }
          render={ ({ open }) => getImageButton(open, attributes) }
        />
        <PlainText
          onChange={ content => setAttributes({ title: content }) }
          value={ attributes.title }
          placeholder="Your card title"
          className="heading"
        />
        <RichText
          onChange={ content => setAttributes({ body: content }) }
          value={ attributes.body }
          multiline="p"
          placeholder="Your card text"
        />
      </div>
    );
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  save({ attributes }) {

    const cardImage = (src, alt) => {
      if(!src) return null;

      if(alt) {
        return (
          <img
            className="card__image"
            src={ src }
            alt={ alt }
          />
        );
      }

      // No alt set, so let's hide it from screen readers
      return (
        <img
          className="card__image"
          src={ src }
          alt=""
          aria-hidden="true"
        />
      );
    };

    return (
      <div className="card">
        { cardImage(attributes.imageUrl, attributes.imageAlt) }
        <div className="card__content">
          <h3 className="card__title">{ attributes.title }</h3>
          <div className="card__body">
            { attributes.body }
          </div>
        </div>
      </div>
    );
  }
} );
