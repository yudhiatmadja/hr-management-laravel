(function(i){function v(t,e){this.itemsArray=[],this.$element=i(t),this.$element.hide(),this.isSelect=t.tagName==="SELECT",this.multiple=this.isSelect&&t.hasAttribute("multiple"),this.objectItems=e&&e.itemValue,this.placeholderText=t.hasAttribute("placeholder")?this.$element.attr("placeholder"):"",this.inputSize=Math.max(1,this.placeholderText.length),this.$container=i('<div class="bootstrap-tagsinput"></div>'),this.$input=i('<input type="text" placeholder="'+this.placeholderText+'"/>').appendTo(this.$container),this.$element.before(this.$container),this.build(e)}function y(t,e){if(typeof t[e]!="function"){var o=t[e];t[e]=function(n){return n[o]}}}function $(t,e){if(typeof t[e]!="function"){var o=t[e];t[e]=function(){return o}}}function g(t){return t?w.text(t).html():""}function x(t){var e=0;if(document.selection){t.focus();var o=document.selection.createRange();o.moveStart("character",-t.value.length),e=o.text.length}else(t.selectionStart||t.selectionStart=="0")&&(e=t.selectionStart);return e}function T(t,e){var o=!1;return i.each(e,function(n,r){if(typeof r=="number"&&t.which===r)return o=!0,!1;if(t.which===r.which){var l=!r.hasOwnProperty("altKey")||t.altKey===r.altKey,a=!r.hasOwnProperty("shiftKey")||t.shiftKey===r.shiftKey,s=!r.hasOwnProperty("ctrlKey")||t.ctrlKey===r.ctrlKey;if(l&&a&&s)return o=!0,!1}}),o}var A={tagClass:function(t){return"badge badge-primary"},itemValue:function(t){return t&&t.toString()},itemText:function(t){return this.itemValue(t)},itemTitle:function(t){return null},freeInput:!0,addOnBlur:!0,maxTags:void 0,maxChars:void 0,confirmKeys:[13,44],delimiter:",",delimiterRegex:null,cancelConfirmKeysOnEmpty:!0,onTagExists:function(t,e){e.hide().fadeIn()},trimValue:!1,allowDuplicates:!1};v.prototype={constructor:v,add:function(t,e,o){var n=this;if(!(n.options.maxTags&&n.itemsArray.length>=n.options.maxTags)&&(t===!1||t)){if(typeof t=="string"&&n.options.trimValue&&(t=i.trim(t)),typeof t=="object"&&!n.objectItems)throw"Can't add objects when itemValue option is not set";if(!t.toString().match(/^\s*$/)){if(n.isSelect&&!n.multiple&&n.itemsArray.length>0&&n.remove(n.itemsArray[0]),typeof t=="string"&&this.$element[0].tagName==="INPUT"){var r=n.options.delimiterRegex?n.options.delimiterRegex:n.options.delimiter,l=t.split(r);if(l.length>1){for(var a=0;a<l.length;a++)this.add(l[a],!0);return void(e||n.pushVal())}}var s=n.options.itemValue(t),u=n.options.itemText(t),c=n.options.tagClass(t),p=n.options.itemTitle(t),m=i.grep(n.itemsArray,function(C){return n.options.itemValue(C)===s})[0];if(!m||n.options.allowDuplicates){if(!(n.items().toString().length+t.length+1>n.options.maxInputLength)){var h=i.Event("beforeItemAdd",{item:t,cancel:!1,options:o});if(n.$element.trigger(h),!h.cancel){n.itemsArray.push(t);var f=i('<span class="tag '+g(c)+(p!==null?'" title="'+p:"")+'">'+g(u)+'<span data-role="remove"></span></span>');if(f.data("item",t),n.findInputWrapper().before(f),f.after(" "),n.isSelect&&!i('option[value="'+encodeURIComponent(s)+'"]',n.$element)[0]){var d=i("<option selected>"+g(u)+"</option>");d.data("item",t),d.attr("value",s),n.$element.append(d)}e||n.pushVal(),(n.options.maxTags===n.itemsArray.length||n.items().toString().length===n.options.maxInputLength)&&n.$container.addClass("bootstrap-tagsinput-max"),n.$element.trigger(i.Event("itemAdded",{item:t,options:o}))}}}else if(n.options.onTagExists){var V=i(".tag",n.$container).filter(function(){return i(this).data("item")===m});n.options.onTagExists(t,V)}}}},remove:function(t,e,o){var n=this;if(n.objectItems&&(t=typeof t=="object"?i.grep(n.itemsArray,function(l){return n.options.itemValue(l)==n.options.itemValue(t)}):i.grep(n.itemsArray,function(l){return n.options.itemValue(l)==t}),t=t[t.length-1]),t){var r=i.Event("beforeItemRemove",{item:t,cancel:!1,options:o});if(n.$element.trigger(r),r.cancel)return;i(".tag",n.$container).filter(function(){return i(this).data("item")===t}).remove(),i("option",n.$element).filter(function(){return i(this).data("item")===t}).remove(),i.inArray(t,n.itemsArray)!==-1&&n.itemsArray.splice(i.inArray(t,n.itemsArray),1)}e||n.pushVal(),n.options.maxTags>n.itemsArray.length&&n.$container.removeClass("bootstrap-tagsinput-max"),n.$element.trigger(i.Event("itemRemoved",{item:t,options:o}))},removeAll:function(){var t=this;for(i(".tag",t.$container).remove(),i("option",t.$element).remove();t.itemsArray.length>0;)t.itemsArray.pop();t.pushVal()},refresh:function(){var t=this;i(".tag",t.$container).each(function(){var e=i(this),o=e.data("item"),n=t.options.itemValue(o),r=t.options.itemText(o),l=t.options.tagClass(o);if(e.attr("class",null),e.addClass("tag "+g(l)),e.contents().filter(function(){return this.nodeType==3})[0].nodeValue=g(r),t.isSelect){var a=i("option",t.$element).filter(function(){return i(this).data("item")===o});a.attr("value",n)}})},items:function(){return this.itemsArray},pushVal:function(){var t=this,e=i.map(t.items(),function(o){return t.options.itemValue(o).toString()});t.$element.val(e,!0).trigger("change")},build:function(t){var e=this;if(e.options=i.extend({},A,t),e.objectItems&&(e.options.freeInput=!1),y(e.options,"itemValue"),y(e.options,"itemText"),$(e.options,"tagClass"),e.options.typeahead){var o=e.options.typeahead||{};$(o,"source"),e.$input.typeahead(i.extend({},o,{source:function(a,s){function u(m){for(var h=[],f=0;f<m.length;f++){var d=e.options.itemText(m[f]);c[d]=m[f],h.push(d)}s(h)}this.map={};var c=this.map,p=o.source(a);i.isFunction(p.success)?p.success(u):i.isFunction(p.then)?p.then(u):i.when(p).then(u)},updater:function(a){return e.add(this.map[a]),this.map[a]},matcher:function(a){return a.toLowerCase().indexOf(this.query.trim().toLowerCase())!==-1},sorter:function(a){return a.sort()},highlighter:function(a){var s=new RegExp("("+this.query+")","gi");return a.replace(s,"<strong>$1</strong>")}}))}if(e.options.typeaheadjs){var n=null,r={},l=e.options.typeaheadjs;i.isArray(l)?(n=l[0],r=l[1]):r=l,e.$input.typeahead(n,r).on("typeahead:selected",i.proxy(function(a,s){r.valueKey?e.add(s[r.valueKey]):e.add(s),e.$input.typeahead("val","")},e))}e.$container.on("click",i.proxy(function(a){e.$element.attr("disabled")||e.$input.removeAttr("disabled"),e.$input.focus()},e)),e.options.addOnBlur&&e.options.freeInput&&e.$input.on("focusout",i.proxy(function(a){i(".typeahead, .twitter-typeahead",e.$container).length===0&&(e.add(e.$input.val()),e.$input.val(""))},e)),e.$container.on("keydown","input",i.proxy(function(a){var s=i(a.target),u=e.findInputWrapper();if(e.$element.attr("disabled"))return void e.$input.attr("disabled","disabled");switch(a.which){case 8:if(x(s[0])===0){var c=u.prev();c.length&&e.remove(c.data("item"))}break;case 46:if(x(s[0])===0){var p=u.next();p.length&&e.remove(p.data("item"))}break;case 37:var m=u.prev();s.val().length===0&&m[0]&&(m.before(u),s.focus());break;case 39:var h=u.next();s.val().length===0&&h[0]&&(h.after(u),s.focus())}s.val().length,s.attr("size",Math.max(this.inputSize,s.val().length))},e)),e.$container.on("keypress","input",i.proxy(function(a){var s=i(a.target);if(e.$element.attr("disabled"))return void e.$input.attr("disabled","disabled");var u=s.val(),c=e.options.maxChars&&u.length>=e.options.maxChars;e.options.freeInput&&(T(a,e.options.confirmKeys)||c)&&(u.length!==0&&(e.add(c?u.substr(0,e.options.maxChars):u),s.val("")),e.options.cancelConfirmKeysOnEmpty===!1&&a.preventDefault()),s.val().length,s.attr("size",Math.max(this.inputSize,s.val().length))},e)),e.$container.on("click","[data-role=remove]",i.proxy(function(a){e.$element.attr("disabled")||e.remove(i(a.target).closest(".tag").data("item"))},e)),e.options.itemValue===A.itemValue&&(e.$element[0].tagName==="INPUT"?e.add(e.$element.val()):i("option",e.$element).each(function(){e.add(i(this).attr("value"),!0)}))},destroy:function(){var t=this;t.$container.off("keypress","input"),t.$container.off("click","[role=remove]"),t.$container.remove(),t.$element.removeData("tagsinput"),t.$element.show()},focus:function(){this.$input.focus()},input:function(){return this.$input},findInputWrapper:function(){for(var t=this.$input[0],e=this.$container[0];t&&t.parentNode!==e;)t=t.parentNode;return i(t)}},i.fn.tagsinput=function(t,e,o){var n=[];return this.each(function(){var r=i(this).data("tagsinput");if(r)if(t||e){if(r[t]!==void 0){if(r[t].length===3&&o!==void 0)var l=r[t](e,null,o);else var l=r[t](e);l!==void 0&&n.push(l)}}else n.push(r);else r=new v(this,t),i(this).data("tagsinput",r),n.push(r),this.tagName==="SELECT"&&i("option",i(this)).attr("selected","selected"),i(this).val(i(this).val())}),typeof t=="string"?n.length>1?n:n[0]:n},i.fn.tagsinput.Constructor=v;var w=i("<div />");i(function(){i("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()})})(window.jQuery);