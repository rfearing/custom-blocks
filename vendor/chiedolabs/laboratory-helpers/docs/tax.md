# Taxonomy Helpers
* Add an Image to a Taxonomy
 1. At the top of the file where you declare your taxonomy, place: `use \ChiedoLabs\LaboratoryHelpers\TaxonomyImage;`
 * After declaring your taxonomy, in the same file place:

		```
		$tax_image = new TaxonomyImage();
		$tax_image -> init( '<taxonomy_name>' );
		```

* Add a WYSIWYG to a Taxonomy `add_wysiwyg_to_tax( $term, $taxonomy )`
	* $term - string - Taxonomy term (e.g. fiction)
	* $taxonomy - string - The Tax itself (e.g. genre)