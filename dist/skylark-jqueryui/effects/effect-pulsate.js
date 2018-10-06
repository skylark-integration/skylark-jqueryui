/**
 * skylark-jqueryui - A version of backbone that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jqueryui/
 * @license MIT
 */
define(["skylark-jquery","../version","../effect"],function(e){return e.effects.define("pulsate","show",function(n,i){function r(e,n,i,r){return function(){var s=new v;return e.animate(n,i,r,function(){s.resolve()}),s.promise}}var s=e(this),t=n.mode,o="show"===t,u="hide"===t,a=o||u,f=2*(n.times||5)+(a?1:0),c=n.duration/f,h=0,l=1;s.queue().length;!o&&s.is(":visible")||(s.css("opacity",0).show(),h=1);for(var p=e.skylark,d=p.langx,v=d.Deferred,y=[];l<f;l++)y.push(r(s,{opacity:h},c,n.easing)),h=1-h;y.push(r(s,{opacity:h},c,n.easing)),y.push(i),y.reduce(function(e,n,i,r){return e.then(n)},v.resolve())})});
//# sourceMappingURL=../sourcemaps/effects/effect-pulsate.js.map
