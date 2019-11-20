/**
 * skylark-jqueryui - A version of backbone that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jqueryui/
 * @license MIT
 */
define(["skylark-jquery","../version","../widget"],function(e){return e.widget("ui.progressbar",{version:"@VERSION",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=e("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(e){if(void 0===e)return this.options.value;this.options.value=this._constrainedValue(e),this._refreshValue()},_constrainedValue:function(e){return void 0===e&&(e=this.options.value),this.indeterminate=!1===e,"number"!=typeof e&&(e=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var i=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(i),this._refreshValue()},_setOption:function(e,i){"max"===e&&(i=Math.max(this.min,i)),this._super(e,i)},_setOptionDisabled:function(e){this._super(e),this.element.attr("aria-disabled",e),this._toggleClass(null,"ui-state-disabled",!!e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var i=this.options.value,t=this._percentage();this.valueDiv.toggle(this.indeterminate||i>this.min).width(t.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,i===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":i}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==i&&(this.oldValue=i,this._trigger("change")),i===this.options.max&&this._trigger("complete")}})});
//# sourceMappingURL=../sourcemaps/widgets/progressbar.js.map
