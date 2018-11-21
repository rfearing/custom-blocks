<?php
/**
 * Custom Options Helper Functions.
 *
 * @package Laboratory Helpers
 */

if ( ! function_exists( 'is_option_checked' ) ) :
	/**
	 * Is a theme option checked or not?
	 *
	 * @param {string} $option_value - the option field value (in this case, checked or not).
	 * @return {boolean}
	 */
	function is_option_checked( $option_value ) {
		if (
			! isset( $option_value ) ||
			! $option_value
		) {
			return false;
		}
		return '1' === $option_value ||
			1 === $option_value ||
			true === $option_value;
	}
endif;

if ( ! function_exists( 'get_theme_option' ) ) :
	/**
	 * Retrieve a theme options value and avoid PHP "undefined index" errors
	 *
	 * @param {string} $option_id - the option id.
	 * @param {array}  $theme_options - your options.
	 * @param {string} $default - default value to use if option value is null.
	 * @return {string|false}
	 */
	function get_theme_option( $option_id, $theme_options = [], $default = null ) {
		global $lab_theme_options;
		$theme_options = ( ! empty( $lab_theme_options ) ) ? $lab_theme_options : $theme_options;

		if (
			! isset( $theme_options ) ||
			! is_array( $theme_options )
		) {
			return false;
		}

		if (
			isset( $theme_options[ $option_id ] ) &&
			! empty( $theme_options[ $option_id ] )
		) {
			return $theme_options[ $option_id ];
		}

		if ( isset( $default ) ) {
			return $default;
		}

		return false;
	}
endif;
