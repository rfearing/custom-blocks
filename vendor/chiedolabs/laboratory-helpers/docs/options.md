## Options Helpers

Option Value Helpers if your theme utilizes [Redux Framework](https://reduxframework.com/)

* Return a boolean from a Redux Checkbox: `is_option_checked( $value )`
* Return your value of a Redux Option: `get_theme_option( $option_id, $theme_options, $default )`
	* $option_id - The Id you set your option as
	* $theme_options - Your array of Redux Options.
		* **Note** You can set a global variable `$lab_theme_options` and the function will use those options on any call.
	* $default - a default value.