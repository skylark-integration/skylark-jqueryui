/**
 * skylark-jqueryui - A version of backbone that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jqueryui/
 * @license MIT
 */
define(["skylark-jquery","../version","../effect"],function(e){return e.effects.define("bounce",function(t,n){function o(e,t,n,o){return function(){var o=new j;return e.animate(t,n,g,function(){o.resolve()}),o.promise}}var r,i,u,s,c=e(this),f=t.mode,a="hide"===f,p="show"===f,h=t.direction||"up",d=t.distance,l=t.times||5,v=2*l+(p||a?1:0),y=t.duration/v,g=t.easing,k="up"===h||"down"===h?"top":"left",m="up"===h||"left"===h,w=0;c.queue().length;e.effects.createPlaceholder(c);var q=e.skylark,b=q.langx,j=b.Deferred,x=[];for(u=c.css(k),d||(d=c["top"===k?"outerHeight":"outerWidth"]()/3),s=c.position()[k],p&&(i={opacity:1},i[k]=u,c.css("opacity",0).css(k,s+(m?2*-d:2*d)),x.push(o(c,i,y,g))),a&&(d/=Math.pow(2,l-1)),i={},i[k]=u;w<l;w++)r={},r[k]=s+(m?-d:d),x.push(o(c,r,y,g)),x.push(o(c,i,y,g)),d=a?2*d:d/2;a&&(r={opacity:0},r[k]=s+(m?-1*d:d),x.push(o(c,r,y,g))),x.push(n),x.reduce(function(e,t,n,o){return e.then(t)},j.resolve())})});
//# sourceMappingURL=../sourcemaps/effects/effect-bounce.js.map
