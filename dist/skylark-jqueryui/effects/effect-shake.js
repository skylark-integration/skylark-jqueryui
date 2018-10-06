/**
 * skylark-jqueryui - A version of backbone that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jqueryui/
 * @license MIT
 */
define(["skylark-jquery","../version","../effect"],function(e){return e.effects.define("shake",function(n,t){function s(e,n,t,s){return function(){var r=new y;return e.animate(n,t,s,function(){r.resolve()}),r.promise}}var r=1,u=e(this),f=n.direction||"left",i=n.distance||20,a=n.times||3,c=2*a+1,o=Math.round(n.duration/c),h="up"===f||"down"===f?"top":"left",l="up"===f||"left"===f,d={},p={},g={},v={};u.queue().length;e.effects.createPlaceholder(u);var k=e.skylark,m=k.langx,y=m.Deferred;for(start=u.position()[h],funcs=[],d[h]=start,p[h]=start+(l?-1:1)*i,g[h]=p[h]+(l?1:-1)*i*2,v[h]=g[h]+(l?-1:1)*i*2,funcs.push(s(u,p,o,n.easing));r<a;r++)funcs.push(s(u,g,o,n.easing)),funcs.push(s(u,v,o,n.easing));funcs.push(s(u,d,o/2,n.easing)),funcs.push(t),funcs.reduce(function(e,n,t,s){return e.then(n)},y.resolve())})});
//# sourceMappingURL=../sourcemaps/effects/effect-shake.js.map
