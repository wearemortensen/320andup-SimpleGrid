/*
Author: Mortensen
Info: see /humans.txt
*/

jQuery(document).ready(function(){
	// Run Matt Kersley's jQuery Responsive menu plugin (see plugins.js)
	if (jQuery.fn.mobileMenu) {
		jQuery('ol#id').mobileMenu({
			switchWidth: 768,                   // width (in px to switch at)
			topOptionText: 'Choose a page',     // first option text
			indentString: '&nbsp;&nbsp;&nbsp;'  // string for indenting nested items
		});
	}

	// Run Mathias Bynens jQuery placeholder plugin (see plugins.js)
	if (jQuery.fn.placeholder) {
		jQuery('input, textarea').placeholder();		
	}
});