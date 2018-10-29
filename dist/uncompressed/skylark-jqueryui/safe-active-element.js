define([ 
	"skylark-jquery", 
	"skylark-utils-dom/noder",
	"./version" 
],  function($, noder) {
	return $.ui.safeActiveElement = noder.active;
});
