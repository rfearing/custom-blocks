<?php
/**
 * Helpers for PHP renderers.
 *
 * @since   1.0.0
 * @package CGB
 */

/**
 * Retrieve the featured image url.
 *
 * @param Integer $post_id The Id of the post/page/CPT.
 * @param String  $size The size of the image to reference.
 */
function lab_block_get_featured_url( $post_id, $size = 'full' ) {
	$thumb_id        = get_post_thumbnail_id( $post_id );
	$thumb_url_array = wp_get_attachment_image_src( $thumb_id, $size, true );
	$thumb_url       = $thumb_url_array[0];
	return $thumb_url;
}
