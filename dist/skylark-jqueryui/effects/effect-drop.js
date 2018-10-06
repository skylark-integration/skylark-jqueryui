/**
 * skylark-jqueryui - A version of backbone that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jqueryui/
 * @license MIT
 */
define(["skylark-jquery","../version","../effect"],function(e){return e.effects.define("drop","hide",function(t,i){var o,n=e(this),r=t.mode,a="show"===r,c=t.direction||"left",f="up"===c||"down"===c?"top":"left",d="up"===c||"left"===c?-1:1,s=d*-1,u={opacity:0},p=n.position()[f];e.effects.createPlaceholder(n),o=t.distance||n["top"===f?"outerHeight":"outerWidth"](!0)/2,u[f]=p+d*o,a&&(n.css(u),u[f]=p+s*o,u.opacity=1),n.animate(u,{queue:!1,duration:t.duration,easing:t.easing,complete:i})})});
//# sourceMappingURL=../sourcemaps/effects/effect-drop.js.map
