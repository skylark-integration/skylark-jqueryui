/*!
 * jQuery UI Keycode @VERSION
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery", "./version" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
  var keyCode = $.ui.keyCode = {},
  	  langx = $.skylark.langx,
  	  keys = $.skylark.eventer.keys;
  	  
  langx.each(keys,function(name,value) {
  	keyCode[name.toUpperCase()] = value;
  });
  return keyCode;
};

} ) );
