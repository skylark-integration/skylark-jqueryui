/**
 * skylark-jqueryui - A version of backbone that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jqueryui/
 * @license MIT
 */
define(["skylark-jquery","../version","../effect"],function(e){return e.effects.define("fold","hide",function(i,n){function t(e,i,n,t){return function(){var s=new y;return e.animate(i,n,t,function(){s.resolve()}),s.promise}}var s=e(this),c=i.mode,r="show"===c,o="hide"===c,f=i.size||15,l=/([0-9]+)%/.exec(f),u=!!i.horizFirst,p=u?["right","bottom"]:["bottom","right"],a=i.duration/2,h=e.effects.createPlaceholder(s),d=s.cssClip(),g={clip:e.extend({},d)},x={clip:e.extend({},d)},v=[d[p[0]],d[p[1]]];s.queue().length;l&&(f=parseInt(l[1],10)/100*v[o?0:1]),g.clip[p[0]]=f,x.clip[p[0]]=f,x.clip[p[1]]=0,r&&(s.cssClip(x.clip),h&&h.css(e.effects.clipToBox(x)),x.clip=d);var m=e.skylark,k=m.langx,y=k.Deferred,B=[];h&&(B.push(t(h,e.effects.clipToBox(g),a,i.easing)),B.push(t(h,e.effects.clipToBox(x),a,i.easing))),B.push(t(s,g,a,i.easing)),B.push(t(s,x,a,i.easing)),B.push(n),B.reduce(function(e,i,n,t){return e.then(i)},y.resolve())})});
//# sourceMappingURL=../sourcemaps/effects/effect-fold.js.map
