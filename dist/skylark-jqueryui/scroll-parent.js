/**
 * skylark-jqueryui - A version of backbone that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jqueryui/
 * @license MIT
 */
define(["skylark-jquery","./version"],function(s){return s.fn.scrollParent=function(t){var o=this.css("position"),e="absolute"===o,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,r=this.parents().filter(function(){var t=s(this);return(!e||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==o&&r.length?r:s(this[0].ownerDocument||document)}});
//# sourceMappingURL=sourcemaps/scroll-parent.js.map
