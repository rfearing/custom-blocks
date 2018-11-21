<?php
/**
 * Laboratory Blocks Markup.
 *
 * @package WordPress
 * @subpackage  Laboratory Blocks
 */

/**
 * Team Members were found. Generate the markup.
 *
 * @param Array   $query The WordPress query.
 * @param String  $where_to_render_details Where to render details.
 * @param Boolean $render_as_bg_image Whether to render image as a <img /> or bg-image.
 */
function lab_blocks_team_markup( $query, $where_to_render_details, $render_as_bg_image ) {
	$markup = '<div class="lab-blocks-team-members">';
	// Only include modal section if user selected to render seperately.
	if ( 'seperate' === $where_to_render_details ) {
		$markup = '<div class="lab-blocks-team-details">';
		while ( $query->have_posts() ) {
			$query->the_post();
			$markup .= lab_blocks_member_markup( $render_as_bg_image, true, false );
		}
		$markup .= '</div>';
		wp_reset_postdata();
	}

	// Whether or not we want a modal, we'll render a dummed down version.
	$markup .= '<div class="team-member">';
	while ( $query->have_posts() ) {
		$query->the_post();
		$markup .= lab_blocks_member_markup(
			$render_as_bg_image,
			( 'together' === $where_to_render_details ),
			( 'page' === $where_to_render_details)
		);
	}
	wp_reset_postdata();
	$markup .= '</div>';
	return $markup;
}

/**
 * Generate the markup for a single team member.
 *
 * @param Boolean $render_as_bg_image Whether to render.
 * @param Boolean $render_details Whether details should be rendered.
 * @param Boolean $render_link Whether the link should be rendered.
 */
function lab_blocks_member_markup( $render_as_bg_image, $render_details, $render_link ) {
	$classes = ( $render_as_bg_image ) ? 'lab-blocks-member lazyload' : 'lab-blocks-member';
	$id      = get_post_thumbnail_id();
	$large   = get_img_src_from_attachment_ids( [ $id ], 'full' );
	$small   = get_img_src_from_attachment_ids( [ $id ], 'medium_large' );
	$role    = get_post_meta( get_the_ID(), 'team_member_role' );

	$markup = '<div class="' . $classes . '"';
	// Only include background style if user selected that option.
	if ( $render_as_bg_image ) {
		$markup .= 'style="background-image: url(' . $small . ')"';
		$markup .= 'data-bg="' . $large . '">';
	} else {
		$markup .= '>';
		$markup .= '<img alt="Team Member Image" class="lazyload team-member-image" src="';
		$markup .= $small . '" data-src="' . $large . '" />';
	}
	// If we're expecting a modal (or something like it).
	if ( $render_details ) {
		$markup .= '<div class="team-content">';
		$markup .= get_the_content();
		$markup .= '</div>';
	}
	$markup .= '<span class="team-member-title">';
	if ( $render_link ) {
		$markup .= '<a href="' . get_the_permalink() . '">';
	}
	$markup .= get_the_title();
	if ( $render_link ) {
		$markup .= '</a>';
	}
	$markup .= '</span>';
	if ( $role && ! empty( $role[0] ) ) {
		$markup .= '<span class="member-role">' . $role[0] . '</span>';
	}
	$markup .= '</div>';
	return $markup;
}
