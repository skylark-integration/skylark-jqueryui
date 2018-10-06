/**
 * skylark-jqueryui - A version of backbone that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jqueryui/
 * @license MIT
 */
define(["skylark-jquery","./version"],function(e){function i(e){for(var i=e.css("visibility");"inherit"===i;)e=e.parent(),i=e.css("visibility");return"hidden"!==i}return e.ui.focusable=function(t,s){var n,a,r,o,u,l=t.nodeName.toLowerCase();return"area"===l?(n=t.parentNode,a=n.name,!(!t.href||!a||"map"!==n.nodeName.toLowerCase())&&(r=e("img[usemap='#"+a+"']"),r.length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(l)?(o=!t.disabled,o&&(u=e(t).closest("fieldset")[0],u&&(o=!u.disabled))):o="a"===l?t.href||s:s,o&&e(t).is(":visible")&&i(e(t)))},e.extend(e.expr.pseudos,{focusable:function(i){return e.ui.focusable(i,null!=e.attr(i,"tabindex"))}}),e.ui.focusable});
//# sourceMappingURL=sourcemaps/focusable.js.map
