<?php
/**
 * Server-side rendering for services block
 *
 * @since   1.0.0
 * @package Laboratory Blocks
 */

/**
 * Renders the content on the server.
 *
 * @param Array $attributes from the JS Block.
 */
function lab_blocks_render_services_section( $attributes ) {
	$ppp    = ( empty( $attributes['count'] ) ) ? '-1' : $attributes['count'];
	$args   = array(
		'post_type'      => array( 'service' ),
		'post_status'    => array( 'publish' ),
		'posts_per_page' => $ppp,
	);
	$query  = new WP_Query( $args );
	$markup = '';
	if ( $query->have_posts() ) {
		$img_url = ( has_post_thumbnail() ) ? lab_block_get_featured_url( get_the_ID() ) : '';
		$markup .= '<div class="lab-blocks-services" data-img="' . $img_url . '">';
		while ( $query->have_posts() ) {
			$query->the_post();
			$markup .= '<div class="lab-service">';
			$markup .= '<h3 class="service-title">' . get_the_title() . '</h3>';
			$markup .= '<div class="service-excerpt">' . get_the_excerpt() . '</div>';
			$markup .= '<div class="service-image" data-img="' . $img_url . '"></div>';
			$markup .= '</div>';
		}
		$markup .= '</div>';
	} else {
		$markup .= '<h3>No Services Found</h3>';
	}
	wp_reset_postdata();
	return $markup;
}

/**
 * Registers the `core/services` block on server.
 */
function lab_blocks_register_core_services() {

	// Check if the register function exists.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type( 'laboratory-blocks/services-section', array(
		// 'attributes' => array(),
		'render_callback' => 'lab_blocks_render_services_section',
	) );
}

add_action( 'init', 'lab_blocks_register_core_services' );