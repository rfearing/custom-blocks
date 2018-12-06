<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function laboratory_blocks_cgb_block_assets() {
	// Styles.
	wp_enqueue_style(
		'laboratory_blocks-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
	);
} // End function laboratory_blocks_cgb_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'laboratory_blocks_cgb_block_assets' );

/**
 * Enqueue Plugin Dependency Scripts.
 */
function laboratory_blocks_register() {
	wp_enqueue_script(
		'lazyload',
		'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.0/lazysizes.min.js',
		null,
		'4.1.0', // Up to date as of 8/7/18.
		true
	);

	wp_enqueue_script(
		'unveilhooks',
		'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.0/plugins/unveilhooks/ls.unveilhooks.min.js',
		null,
		'4.1.0', // Up to date as of 8/7/18.
		true
	);

	if ( ( ! wp_script_is( 'bootstrapjs', 'queue' ) ) && ( ! wp_script_is( 'bootstrapjs', 'done' ) ) ) {
		wp_enqueue_script(
			'bootstrapjs',
			'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js',
			array( 'jquery', 'popperjs' ),
			'4.0.0',
			true
		);

		wp_enqueue_script(
			'popperjs',
			'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
			array( 'jquery' ),
			'1.12.9',
			true
		);
	}

	if ( ( ! wp_style_is( 'bootstrap', 'queue' ) ) && ( ! wp_style_is( 'bootstrap', 'done' ) ) ) {
		wp_enqueue_style(
			'bootstrap',
			'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css',
			null,
			'4.0.0'
		);
	}
}
add_action( 'wp_enqueue_scripts', 'laboratory_blocks_register' );

/**
 * Add "Laboratory Blocks" as a category.
 *
 * @param array  $categories - the categories so far.
 * @param object $post - the current post or CPT.
 */
function laboratory_custom_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'laboratory-blocks',
				'title' => 'Laboratory Blocks',
			),
		)
	);
};
add_filter( 'block_categories', 'laboratory_custom_block_category', 10, 2 );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function laboratory_blocks_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'laboratory_blocks-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		true
	);

	// Styles.
	wp_enqueue_style(
		'laboratory_blocks-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' )
	);

} // End function laboratory_blocks_cgb_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'laboratory_blocks_cgb_editor_assets' );

/**
 *  Helper Functions.
 */
require_once plugin_dir_path( __FILE__ ) . 'helpers/post-helpers.php';

/**
 *  Server Side Render Functions.
 */
require_once plugin_dir_path( __FILE__ ) . 'blocks/team/renderer.php';
