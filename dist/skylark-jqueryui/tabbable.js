/**
 * skylark-jqueryui - A version of backbone that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jqueryui/
 * @license MIT
 */
define(["skylark-jquery","./version","./focusable"],function(e){return e.extend(e.expr.pseudos,{tabbable:function(n){var r=e.attr(n,"tabindex"),u=null!=r;return(!u||r>=0)&&e.ui.focusable(n,u)}})});
//# sourceMappingURL=sourcemaps/tabbable.js.map
