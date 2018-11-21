# WordPress Helpers

* `get_current_post()` - Return the current post Object.
* `get_list_of_pages()` - Returns a key->value array of pages by page title
	* Response example:
	
	```
	 array(
	 	09 => 'Home',
	 	10 => 'About',
	 	12 => 'News',
	 )
	```
* `get_image_src_array_from_attachment_ids( $ids )` - Takes an array of image attachment ids and returns mapped image src
* `get_img_src_from_attachment_ids( $ids, $size )` - Takes an array of image attachment ids and returns the first src.
	* $ids - Array of Img Ids
	* $size - String of WordPress Image Size (defaults to `'full'`)