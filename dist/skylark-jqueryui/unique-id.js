/**
 * skylark-jqueryui - A version of backbone that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jqueryui/
 * @license MIT
 */
define(["skylark-jquery","./version"],function(i){return i.fn.extend({uniqueId:function(){var i=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++i)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")})}})});
//# sourceMappingURL=sourcemaps/unique-id.js.map
