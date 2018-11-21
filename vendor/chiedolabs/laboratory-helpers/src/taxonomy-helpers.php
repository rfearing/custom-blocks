<?php
/**
 * Custom Taxonomy functions.
 *
 * @package Laboratory Helpers
 */

if ( ! function_exists( 'add_wysiwyg_to_tax' ) ) :
	/**
	 * Solution from https://wordpress.stackexchange.com/a/190854
	 * Make the taxonomy description use a WYIWYG
	 * To Use:
	 *   add_action( "{$taxonomy}_edit_form_fields", 'add_wysiwyg_to_tax', 10, 2 );
	 *
	 * @param {Object} $term - Taxonomy term.
	 * @param {Object} $taxonomy - The Tax itself.
	 */
	function add_wysiwyg_to_tax( $term, $taxonomy ) {
	?>
		<tr valign="top">
			<th scope="row">Description</th>
			<td>
				<?php wp_editor( html_entity_decode( $term->description ), 'description', array( 'media_buttons' => false ) ); ?>
				<script>
					jQuery(window).ready(function(){
						jQuery('label[for=description]').parent().parent().remove();
					});
				</script>
			</td>
		</tr>
	<?php
	}
endif;
