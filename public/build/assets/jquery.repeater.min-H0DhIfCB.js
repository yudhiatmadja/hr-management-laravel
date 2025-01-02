(function(s){var B=function(e){return e},y=function(e){return s.isArray(e)},A=function(e){return!y(e)&&e instanceof Object},O=function(e,o){return s.inArray(o,e)},F=function(e,o){return O(e,o)!==-1},v=function(e,o){for(var c in e)e.hasOwnProperty(c)&&o(e[c],c,e)},z=function(e){return e[e.length-1]},G=function(e,o){var c=[];return v(e,function(f,l,h){c.push(o(f,l,h))}),c},H=function(e,o,c){var f={};return v(e,function(l,h,b){h=c?c(h,l):h,f[h]=o(l,h,b)}),f},D=function(e,o,c){return y(e)?G(e,o):H(e,o,c)},q=function(e,o,c){return D(e,function(f){return f[o].apply(f,[])})},P=function(e,o){var c=null;return function(){var f=this,l=arguments;c===null&&(c=setTimeout(function(){c=null},e),o.apply(f,l))}},I=function(e){e=e||{};var o={};return e.publish=function(c,f){v(o[c],function(l){l(f)})},e.subscribe=function(c,f){o[c]=o[c]||[],o[c].push(f)},e.unsubscribe=function(c){v(o,function(f){var l=O(f,c);l!==-1&&f.splice(l,1)})},e};(function(e){var o=function(u,n){var t=I(),i=u.$;return t.getType=function(){throw'implement me (return type. "text", "radio", etc.)'},t.$=function(r){return r?i.find(r):i},t.disable=function(){t.$().prop("disabled",!0),t.publish("isEnabled",!1)},t.enable=function(){t.$().prop("disabled",!1),t.publish("isEnabled",!0)},n.equalTo=function(r,d){return r===d},n.publishChange=function(){var r;return function(d,$){var g=t.get();n.equalTo(g,r)||t.publish("change",{e:d,domElement:$}),r=g}}(),t},c=function(u,n){var t=o(u,n);return t.get=function(){return t.$().val()},t.set=function(i){t.$().val(i)},t.clear=function(){t.set("")},n.buildSetter=function(i){return function(r){i.call(t,r)}},t},f=function(u,n){u=y(u)?u:[u],n=y(n)?n:[n];var t=!0;return u.length!==n.length?t=!1:v(u,function(i){F(n,i)||(t=!1)}),t},l=function(u){var n={},t=c(u,n);return t.getType=function(){return"button"},t.$().on("change",function(i){n.publishChange(i,this)}),t},h=function(u){var n={},t=c(u,n);return t.getType=function(){return"checkbox"},t.get=function(){var i=[];return t.$().filter(":checked").each(function(){i.push(e(this).val())}),i},t.set=function(i){i=y(i)?i:[i],t.$().each(function(){e(this).prop("checked",!1)}),v(i,function(r){t.$().filter('[value="'+r+'"]').prop("checked",!0)})},n.equalTo=f,t.$().change(function(i){n.publishChange(i,this)}),t},b=function(u){var n=E(u);return n.getType=function(){return"email"},n},k=function(u){var n={},t=o(u,n);return t.getType=function(){return"file"},t.get=function(){return z(t.$().val().split("\\"))},t.clear=function(){this.$().each(function(){e(this).wrap("<form>").closest("form").get(0).reset(),e(this).unwrap()})},t.$().change(function(i){n.publishChange(i,this)}),t},V=function(u){var n={},t=c(u,n);return t.getType=function(){return"hidden"},t.$().change(function(i){n.publishChange(i,this)}),t},Q=function(u){var n={},t=o(u,n);return t.getType=function(){return"file[multiple]"},t.get=function(){var i,r=t.$().get(0).files||[],d=[];for(i=0;i<(r.length||0);i+=1)d.push(r[i].name);return d},t.clear=function(){this.$().each(function(){e(this).wrap("<form>").closest("form").get(0).reset(),e(this).unwrap()})},t.$().change(function(i){n.publishChange(i,this)}),t},a=function(u){var n={},t=c(u,n);return t.getType=function(){return"select[multiple]"},t.get=function(){return t.$().val()||[]},t.set=function(i){t.$().val(i===""?[]:y(i)?i:[i])},n.equalTo=f,t.$().change(function(i){n.publishChange(i,this)}),t},p=function(u){var n=E(u);return n.getType=function(){return"password"},n},m=function(u){var n={},t=c(u,n);return t.getType=function(){return"radio"},t.get=function(){return t.$().filter(":checked").val()||null},t.set=function(i){i?t.$().filter('[value="'+i+'"]').prop("checked",!0):t.$().each(function(){e(this).prop("checked",!1)})},t.$().change(function(i){n.publishChange(i,this)}),t},x=function(u){var n={},t=c(u,n);return t.getType=function(){return"range"},t.$().change(function(i){n.publishChange(i,this)}),t},T=function(u){var n={},t=c(u,n);return t.getType=function(){return"select"},t.$().change(function(i){n.publishChange(i,this)}),t},E=function(u){var n={},t=c(u,n);return t.getType=function(){return"text"},t.$().on("change keyup keydown",function(i){n.publishChange(i,this)}),t},J=function(u){var n={},t=c(u,n);return t.getType=function(){return"textarea"},t.$().on("change keyup keydown",function(i){n.publishChange(i,this)}),t},K=function(u){var n=E(u);return n.getType=function(){return"url"},n},w=function(u){var n={},t=u.$,i=u.constructorOverride||{button:l,text:E,url:K,email:b,password:p,range:x,textarea:J,select:T,"select[multiple]":a,radio:m,checkbox:h,file:k,"file[multiple]":Q,hidden:V},r=function($,g){var C=A(g)?g:t.find(g);C.each(function(){var j=e(this).attr("name");n[j]=i[$]({$:e(this)})})},d=function($,g){var C=[],j=A(g)?g:t.find(g);A(g)?n[j.attr("name")]=i[$]({$:j}):(j.each(function(){O(C,e(this).attr("name"))===-1&&C.push(e(this).attr("name"))}),v(C,function(S){n[S]=i[$]({$:t.find('input[name="'+S+'"]')})}))};if(t.is("input, select, textarea"))if(t.is('input[type="button"], button, input[type="submit"]'))r("button",t);else if(t.is("textarea"))r("textarea",t);else if(t.is('input[type="text"]'))r("text",t);else if(t.is('input[type="password"]'))r("password",t);else if(t.is('input[type="email"]'))r("email",t);else if(t.is('input[type="url"]'))r("url",t);else if(t.is('input[type="range"]'))r("range",t);else if(t.is("select"))t.is("[multiple]")?r("select[multiple]",t):r("select",t);else if(t.is('input[type="file"]'))t.is("[multiple]")?r("file[multiple]",t):r("file",t);else if(t.is('input[type="hidden"]'))r("hidden",t);else if(t.is('input[type="radio"]'))d("radio",t);else{if(!t.is('input[type="checkbox"]'))throw"invalid input type";d("checkbox",t)}else r("button",'input[type="button"], button, input[type="submit"]'),r("text",'input[type="text"]'),r("password",'input[type="password"]'),r("email",'input[type="email"]'),r("url",'input[type="url"]'),r("range",'input[type="range"]'),r("textarea","textarea"),r("select","select:not([multiple])"),r("select[multiple]","select[multiple]"),r("file",'input[type="file"]:not([multiple])'),r("file[multiple]",'input[type="file"][multiple]'),r("hidden",'input[type="hidden"]'),d("radio",'input[type="radio"]'),d("checkbox",'input[type="checkbox"]');return n};e.fn.inputVal=function(u){var n=e(this),t=w({$:n});return n.is("input, textarea, select")?typeof u>"u"?t[n.attr("name")].get():(t[n.attr("name")].set(u),n):typeof u>"u"?q(t,"get"):(v(u,function(i,r){t[r].set(i)}),n)},e.fn.inputOnChange=function(u){var n=e(this),t=w({$:n});return v(t,function(i){i.subscribe("change",function(r){u.call(r.domElement,r.e)})}),n},e.fn.inputDisable=function(){var u=e(this);return q(w({$:u}),"disable"),u},e.fn.inputEnable=function(){var u=e(this);return q(w({$:u}),"enable"),u},e.fn.inputClear=function(){var u=e(this);return q(w({$:u}),"clear"),u}})(jQuery),s.fn.repeater=function(e){e=e||{};var o=this,c=e.show||function(){s(this).show()},f=e.hide||function(a){a()},l=o.find("[data-repeater-list]"),h=l.find("[data-repeater-item]").first().clone().hide(),b=l.data("repeater-list"),k=function(){l.find("[data-repeater-item]").each(function(a){s(this).find("[name]").each(function(){var p=s(this).attr("name").match(/\[[^\]]+\]/g),m=p?z(p).replace(/\[|\]/g,""):s(this).attr("name"),x=b+"["+a+"]["+m+"]"+(s(this).is(":checkbox")?"[]":"");s(this).attr("name",x)})}),l.find("input[name][checked]").removeAttr("checked").prop("checked",!0)};k();var V=function(a,p){var m;m=a.find("[name]").first().attr("name").match(/\[([0-9]*)\]/)[1],a.inputVal(D(p,B,function(x){var T=b+"["+m+"]["+x+"]";return a.find('[name="'+T+'"]').length?T:T+"[]"}))},Q=function(){var a=function(p){var m=e.defaultValues;p.find("[name]").each(function(){s(this).inputClear()}),m&&V(p,m)};return function(p){l.append(p),k(),a(p)}}();return o.find("[data-repeater-create]").click(P(50,function(){var a=h.clone();Q(a),c.call(a.get(0))})),l.on("click","[data-repeater-delete]",P(50,function(){var a=s(this).closest("[data-repeater-item]").get(0);f.call(a,function(){s(a).remove(),k()})})),this}})(jQuery);
