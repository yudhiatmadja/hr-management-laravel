var H=(o,g)=>()=>(g||o((g={exports:{}}).exports,g),g.exports);var I=H(q=>{(function(o){typeof define=="function"&&define.amd?define(["jquery"],o):o(typeof q=="object"?require("jquery"):jQuery)})(function(o){var g,S=navigator.userAgent,z=/iphone/i.test(S),K=/chrome/i.test(S),C=/android/i.test(S);o.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},o.fn.extend({caret:function(f,l){var m;if(this.length!==0&&!this.is(":hidden"))return typeof f=="number"?(l=typeof l=="number"?l:f,this.each(function(){this.setSelectionRange?this.setSelectionRange(f,l):this.createTextRange&&(m=this.createTextRange(),m.collapse(!0),m.moveEnd("character",l),m.moveStart("character",f),m.select())})):(this[0].setSelectionRange?(f=this[0].selectionStart,l=this[0].selectionEnd):document.selection&&document.selection.createRange&&(m=document.selection.createRange(),f=0-m.duplicate().moveStart("character",-1e5),l=f+m.text.length),{begin:f,end:l})},unmask:function(){return this.trigger("unmask")},mask:function(f,l){var m,j,c,y,p,w,s,R;if(!f&&this.length>0){m=o(this[0]);var D=m.data(o.mask.dataName);return D?D():void 0}return l=o.extend({autoclear:o.mask.autoclear,placeholder:o.mask.placeholder,completed:null},l),j=o.mask.definitions,c=[],y=s=f.length,p=null,o.each(f.split(""),function(b,d){d=="?"?(s--,y=b):j[d]?(c.push(new RegExp(j[d])),p===null&&(p=c.length-1),y>b&&(w=c.length-1)):c.push(null)}),this.trigger("unmask").each(function(){function b(){if(l.completed){for(var t=p;w>=t;t++)if(c[t]&&u[t]===d(t))return;l.completed.call(n)}}function d(t){return l.placeholder.charAt(t<l.placeholder.length?t:0)}function v(t){for(;++t<s&&!c[t];);return t}function M(t){for(;--t>=0&&!c[t];);return t}function E(t,e){var i,r;if(!(0>t)){for(i=t,r=v(e);s>i;i++)if(c[i]){if(!(s>r&&c[i].test(u[r])))break;u[i]=u[r],u[r]=d(r),r=v(r)}x(),n.caret(Math.max(p,t))}}function Z(t){var e,i,r,a;for(e=t,i=d(t);s>e;e++)if(c[e]){if(r=v(e),a=u[e],u[e]=i,!(s>r&&c[r].test(a)))break;i=a}}function B(){var t=n.val(),e=n.caret();if(R&&R.length&&R.length>t.length){for(k(!0);e.begin>0&&!c[e.begin-1];)e.begin--;if(e.begin===0)for(;e.begin<p&&!c[e.begin];)e.begin++;n.caret(e.begin,e.begin)}else{for(k(!0);e.begin<s&&!c[e.begin];)e.begin++;n.caret(e.begin,e.begin)}b()}function N(){k(),n.val()!=T&&n.change()}function F(t){if(!n.prop("readonly")){var e,i,r,a=t.which||t.keyCode;R=n.val(),a===8||a===46||z&&a===127?(e=n.caret(),i=e.begin,r=e.end,r-i===0&&(i=a!==46?M(i):r=v(i-1),r=a===46?v(r):r),A(i,r),E(i,r-1),t.preventDefault()):a===13?N.call(this,t):a===27&&(n.val(T),n.caret(0,k()),t.preventDefault())}}function Q(t){if(!n.prop("readonly")){var e,i,r,a=t.which||t.keyCode,h=n.caret();if(!(t.ctrlKey||t.altKey||t.metaKey||32>a)&&a&&a!==13){if(h.end-h.begin!==0&&(A(h.begin,h.end),E(h.begin,h.end-1)),e=v(h.begin-1),s>e&&(i=String.fromCharCode(a),c[e].test(i))){if(Z(e),u[e]=i,x(),r=v(e),C){var G=function(){o.proxy(o.fn.caret,n,r)()};setTimeout(G,0)}else n.caret(r);h.begin<=w&&b()}t.preventDefault()}}}function A(t,e){var i;for(i=t;e>i&&s>i;i++)c[i]&&(u[i]=d(i))}function x(){n.val(u.join(""))}function k(t){var e,i,r,a=n.val(),h=-1;for(e=0,r=0;s>e;e++)if(c[e]){for(u[e]=d(e);r++<a.length;)if(i=a.charAt(r-1),c[e].test(i)){u[e]=i,h=e;break}if(r>a.length){A(e+1,s);break}}else u[e]===a.charAt(r)&&r++,y>e&&(h=e);return t?x():y>h+1?l.autoclear||u.join("")===_?(n.val()&&n.val(""),A(0,s)):x():(x(),n.val(n.val().substring(0,h+1))),y?e:p}var n=o(this),u=o.map(f.split(""),function(t,e){return t!="?"?j[t]?d(e):t:void 0}),_=u.join(""),T=n.val();n.data(o.mask.dataName,function(){return o.map(u,function(t,e){return c[e]&&t!=d(e)?t:null}).join("")}),n.one("unmask",function(){n.off(".mask").removeData(o.mask.dataName)}).on("focus.mask",function(){if(!n.prop("readonly")){clearTimeout(g);var t;T=n.val(),t=k(),g=setTimeout(function(){n.get(0)===document.activeElement&&(x(),t==f.replace("?","").length?n.caret(0,t):n.caret(t))},10)}}).on("blur.mask",N).on("keydown.mask",F).on("keypress.mask",Q).on("input.mask paste.mask",function(){n.prop("readonly")||setTimeout(function(){var t=k(!0);n.caret(t),b()},0)}),K&&C&&n.off("input.mask").on("input.mask",B),k()})}})})});export default I();
