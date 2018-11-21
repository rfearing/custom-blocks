<?php
/**
 * Server-side rendering for services block
 *
 * @since   1.0.0
 * @package Laboratory Blocks
 */

require 'templates/no-members-found.php';
require 'templates/team-members-markup.php';

/**
 * Renders the content on the server.
 *
 * @param Array $attributes from the JS Block.
 */
function lab_blocks_render_team( $attributes ) {
	$where_to_render_details = (
		empty( $attributes['memberDisplayType'] ) ||
		'together' === $attributes['memberDisplayType']
	) ? 'together' : $attributes['memberDisplayType'];
	$render_as_bg_image   = (
		empty( $attributes['memberImageLocation'] ) ||
		'background' === $attributes['memberImageLocation']
	);

	$ppp  = '-1';
	$args = array(
		'post_type'      => array( 'team_member' ),
		'post_status'    => array( 'publish' ),
		'posts_per_page' => $ppp,
	);

	$query  = new WP_Query( $args );
	$markup = '';
	if ( $query->have_posts() ) {
		$markup = lab_blocks_team_markup( $query, $where_to_render_details, $render_as_bg_image );
	} else {
		$markup = lab_blocks_no_members_found();
	}
	return $markup;
}

/**
 * Registers the `laboratory-blocks/team` block on server.
 */
function lab_blocks_register_laboratory_blocks_team() {
	// Check if the register function exists.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type( 'laboratory-blocks/team', array(
		'render_callback' => 'lab_blocks_render_team',
	) );
}

add_action( 'init', 'lab_blocks_register_laboratory_blocks_team' );
