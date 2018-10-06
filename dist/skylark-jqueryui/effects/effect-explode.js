/**
 * skylark-jqueryui - A version of backbone that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jqueryui/
 * @license MIT
 */
define(["skylark-jquery","../version","../effect"],function(e){return e.effects.define("explode","hide",function(i,t){function o(){g.push(this),g.length===h*p&&s()}function s(){r.css({visibility:"visible"}),e(g).remove(),t()}var n,f,d,l,a,c,h=i.pieces?Math.round(Math.sqrt(i.pieces)):3,p=h,r=e(this),u=i.mode,v="show"===u,b=r.show().css("visibility","hidden").offset(),y=Math.ceil(r.outerWidth()/p),w=Math.ceil(r.outerHeight()/h),g=[];for(n=0;n<h;n++)for(l=b.top+n*w,c=n-(h-1)/2,f=0;f<p;f++)d=b.left+f*y,a=f-(p-1)/2,r.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-f*y,top:-n*w}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:y,height:w,left:d+(v?a*y:0),top:l+(v?c*w:0),opacity:v?0:1}).animate({left:d+(v?0:a*y),top:l+(v?0:c*w),opacity:v?1:0},i.duration||500,i.easing,o)})});
//# sourceMappingURL=../sourcemaps/effects/effect-explode.js.map
