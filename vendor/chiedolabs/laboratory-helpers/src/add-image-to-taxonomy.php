<?php
/**
 * Laboratory Theme Functions.
 *
 * @package Laboratory Helpers
 */

/**
 * Add Image To Taxonomy
 * Modified from https://catapultthemes.com/adding-an-image-upload-field-to-categories/
 *
 * To Use:
 *  1. At the top of the file where you declare your taxonomy, place:
				use \ChiedoLabs\LaboratoryHelpers\TaxonomyImage;
 *  2. After declaring your taxonomy, in the same file place:
				$tax_image = new TaxonomyImage();
				$tax_image -> init( '<taxonomy_name>' );
 *
 * @package chiedolabs/laboratory-helpers
 */

namespace ChiedoLabs\LaboratoryHelpers;

/**
 * Add Images to Taxonomies.
 */
class TaxonomyImage {

	/**
	 * Class Constructor
	 */
	public function __construct() {}

	/**
	 * Initialize the class and start calling our hooks and filters
	 *
	 * @param String $taxonomy - The name of the taxonomy you want to add the img to.
	 * @since 1.0.0
	 */
	public function init( $taxonomy = 'category' ) {
		add_action( "{$taxonomy}_add_form_fields", array( $this, 'add_category_image' ), 10, 2 );
		add_action( "created_{$taxonomy}", array( $this, 'save_category_image' ), 10, 2 );
		add_action( "{$taxonomy}_edit_form_fields", array( $this, 'update_category_image' ), 10, 2 );
		add_action( "edited_{$taxonomy}", array( $this, 'updated_category_image' ), 10, 2 );
		add_action( 'admin_enqueue_scripts', array( $this, 'load_media' ) );
		add_action( 'admin_footer', array( $this, 'add_script' ) );
		add_filter( "manage_edit-{$taxonomy}_columns" , array( $this, 'add_image_column' ), 10, 3 );
		add_filter( "manage_{$taxonomy}_custom_column", array( $this, 'add_image_column_content' ), 10, 3 );
	}

	/**
	 * Enqueues all scripts, styles, settings, and templates necessary to use all media JavaScript APIs.
	 */
	public function load_media() {
		wp_enqueue_media();
	}

	/**
	 * Add a form field in the new category page
	 *
	 * @param Object $taxonomy The taxonomy to add to.
	 * @since 1.0.0
	 */
	public function add_category_image( $taxonomy ) {
	?>
	<div class="form-field term-group">
		<label for="category-image-id">Image</label>
		<input type="hidden" id="category-image-id" name="category-image-id" class="custom_media_url" value="">
		<div id="category-image-wrapper"></div>
		<p>
			<input type="button" class="button button-secondary ct_tax_media_button" id="ct_tax_media_button" name="ct_tax_media_button" value="Add Image" />
			<input type="button" class="button button-secondary ct_tax_media_remove" id="ct_tax_media_remove" name="ct_tax_media_remove" value="Remove Image" />
		/p>
	</div>
	<?php
	}

	/**
	 * Save the form field
	 *
	 * @param Integer $term_id - The ID of the term to which a custom field should be added.
	 * @param String  $tt_id - The key of the custom field which should be added.
	 * @since 1.0.0
	 */
	public function save_category_image( $term_id, $tt_id ) {
		if (
			isset( $_POST['category-image-id'] ) &&
			'' !== $_POST['category-image-id']
		) { // WPCS: input var ok.
			$image = $_POST['category-image-id']; // WPCS: input var ok.
			add_term_meta( $term_id, 'category-image-id', $image, true );
		}
	}

	/**
	 * Edit the form field
	 *
	 * @param Object $term - The term to be added.
	 * @param Object $taxonomy - The taxonomy to be added to.
	 * @since 1.0.0
	 */
	public function update_category_image( $term, $taxonomy ) {
	?>
	<tr class="form-field term-group-wrap">
		<th scope="row">
			<label for="category-image-id">Image</label>
		</th>
		<td>
			<?php $image_id = get_term_meta( $term->term_id, 'category-image-id', true ); ?>
			<input type="hidden" id="category-image-id" name="category-image-id" value="<?php echo esc_html( $image_id ); ?>">
			<div id="category-image-wrapper">
				<?php if ( $image_id ) { ?>
					<?php echo wp_get_attachment_image( $image_id, 'thumbnail' ); ?>
				<?php } ?>
			</div>
			<p>
				<input type="button" class="button button-secondary ct_tax_media_button" id="ct_tax_media_button" name="ct_tax_media_button" value="Add Image" />
				<input type="button" class="button button-secondary ct_tax_media_remove" id="ct_tax_media_remove" name="ct_tax_media_remove" value="Remove Image" />
			</p>
		</td>
	</tr>
	<?php
	}

	/**
	 * Update the form field value
	 *
	 * @param Integer $term_id - The ID of the term to which a custom field should be added.
	 * @param String  $tt_id - The key of the custom field which should be added.
	 * @since 1.0.0
	 */
	public function updated_category_image( $term_id, $tt_id ) {
		if ( isset( $_POST['category-image-id'] ) && '' !== $_POST['category-image-id'] ) { // WPCS: input var ok.
			$image = $_POST['category-image-id']; // WPCS: input var ok.
			update_term_meta( $term_id, 'category-image-id', $image );
		} else {
			update_term_meta( $term_id, 'category-image-id', '' );
		}
	}


	/**
	 * Add the image column to the taxonom list.
	 *
	 * @param Array $columns - Default list.
	 */
	public function add_image_column( $columns ) {
		$columns['taxonomy-image'] = 'Image';
		return $columns;
	}

	/**
	 * Add the image to the list of taxoonmies.
	 *
	 * @param Object  $content - The original Content.
	 * @param String  $column_name - The name of the column.
	 * @param Integer $term_id  - ID of Taxonomy Meta Data.
	 */
	public function add_image_column_content( $content, $column_name, $term_id ) {
		$image_id = get_term_meta( $term_id, 'category-image-id', true );
		$image    = '<style>
			.tax-img-contain { width:50px; height:50px; display: block; }
			.tax-img-contain img { max-width: 100%; height: auto; }
		</style>';

		$image .= '<span class="tax-img-contain">';
		$image .= wp_get_attachment_image( $image_id, 'thumbnail' );
		$image .= '</span>';
		return $image;
	}

	/**
	 * Add script
	 *
	 * @since 1.0.0
	 */
	public function add_script() {
	?>
		<script>
			jQuery(document).ready( function($) {
				function ct_media_upload(button_class) {
					var _custom_media = true,
					_orig_send_attachment = wp.media.editor.send.attachment;
					$('body').on('click', button_class, function(e) {
						var button_id = '#'+$(this).attr('id');
						var send_attachment_bkp = wp.media.editor.send.attachment;
						var button = $(button_id);
						_custom_media = true;
						wp.media.editor.send.attachment = function(props, attachment){
							if ( _custom_media ) {
								$('#category-image-id').val(attachment.id);
								$('#category-image-wrapper').html('<img class="custom_media_image" src="" style="margin:0;padding:0;max-height:100px;float:none;" />');
								$('#category-image-wrapper .custom_media_image').attr('src',attachment.url).css('display','block');
							} else {
								return _orig_send_attachment.apply( button_id, [props, attachment] );
							}
						}
						wp.media.editor.open(button);
						return false;
					});
				}
				ct_media_upload('.ct_tax_media_button.button');
				$('body').on('click','.ct_tax_media_remove',function(){
					$('#category-image-id').val('');
					$('#category-image-wrapper').html('<img class="custom_media_image" src="" style="margin:0;padding:0;max-height:100px;float:none;" />');
				});
				// Thanks: http://stackoverflow.com/questions/15281995/wordpress-create-category-ajax-response
				$(document).ajaxComplete(function(event, xhr, settings) {
					var queryStringArr = settings.data.split('&');
					if( $.inArray('action=add-tag', queryStringArr) !== -1 ){
						var xml = xhr.responseXML;
						$response = $(xml).find('term_id').text();
						if($response!=""){
							// Clear the thumb image
							$('#category-image-wrapper').html('');
						}
					}
				});
			});
		</script>
	<?php
	}
}
