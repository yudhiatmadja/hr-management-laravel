(function(){var p,l;p=window.jQuery,l=p(window),p.fn.stick_in_parent=function(r){var V,m,W,z,F,j,d,f,q,v,C,h;for(r==null&&(r={}),h=r.sticky_class,F=r.inner_scrolling,C=r.recalc_every,v=r.parent,f=r.offset_top,d=r.spacer,m=r.bottoming,f==null&&(f=0),v==null&&(v=void 0),F==null&&(F=!0),h==null&&(h="is_stuck"),V=p(document),m==null&&(m=!0),q=function(t){var y;return window.getComputedStyle?(t=window.getComputedStyle(t[0]),y=parseFloat(t.getPropertyValue("width"))+parseFloat(t.getPropertyValue("margin-left"))+parseFloat(t.getPropertyValue("margin-right")),t.getPropertyValue("box-sizing")!=="border-box"&&(y+=parseFloat(t.getPropertyValue("border-left-width"))+parseFloat(t.getPropertyValue("border-right-width"))+parseFloat(t.getPropertyValue("padding-left"))+parseFloat(t.getPropertyValue("padding-right"))),y):t.outerWidth(!0)},W=function(t,y,D,I,H,a,u,M){var k,S,c,A,T,o,e,w,_,x,s,g;if(!t.data("sticky_kit")){if(t.data("sticky_kit",!0),T=V.height(),e=t.parent(),v!=null&&(e=e.closest(v)),!e.length)throw"failed to find stick parent";if(k=c=!1,(s=d!=null?d&&t.closest(d):p("<div />"))&&s.css("position",t.css("position")),w=function(){var n,b,i;if(!M&&(T=V.height(),n=parseInt(e.css("border-top-width"),10),b=parseInt(e.css("padding-top"),10),y=parseInt(e.css("padding-bottom"),10),D=e.offset().top+n+b,I=e.height(),c&&(k=c=!1,d==null&&(t.insertAfter(s),s.detach()),t.css({position:"",top:"",width:"",bottom:""}).removeClass(h),i=!0),H=t.offset().top-(parseInt(t.css("margin-top"),10)||0)-f,a=t.outerHeight(!0),u=t.css("float"),s&&s.css({width:q(t),height:a,display:t.css("display"),"vertical-align":t.css("vertical-align"),float:u}),i))return g()},w(),a!==I)return A=void 0,o=f,x=C,g=function(){var n,b,i,P;if(!M&&(i=!1,x!=null&&(--x,0>=x&&(x=C,w(),i=!0)),i||V.height()===T||w(),i=l.scrollTop(),A!=null&&(b=i-A),A=i,c?(m&&(P=i+a+o>I+D,k&&!P&&(k=!1,t.css({position:"fixed",bottom:"",top:o}).trigger("sticky_kit:unbottom"))),i<H&&(c=!1,o=f,d==null&&(u!=="left"&&u!=="right"||t.insertAfter(s),s.detach()),n={position:"",width:"",top:""},t.css(n).removeClass(h).trigger("sticky_kit:unstick")),F&&(n=l.height(),a+f>n&&!k&&(o-=b,o=Math.max(n-a,o),o=Math.min(f,o),c&&t.css({top:o+"px"})))):i>H&&(c=!0,n={position:"fixed",top:o},n.width=t.css("box-sizing")==="border-box"?t.outerWidth()+"px":t.width()+"px",t.css(n).addClass(h),d==null&&(t.after(s),u!=="left"&&u!=="right"||s.append(t)),t.trigger("sticky_kit:stick")),c&&m&&(P==null&&(P=i+a+o>I+D),!k&&P)))return k=!0,e.css("position")==="static"&&e.css({position:"relative"}),t.css({position:"absolute",bottom:y,top:"auto"}).trigger("sticky_kit:bottom")},_=function(){return w(),g()},S=function(){if(M=!0,l.off("touchmove",g),l.off("scroll",g),l.off("resize",_),p(document.body).off("sticky_kit:recalc",_),t.off("sticky_kit:detach",S),t.removeData("sticky_kit"),t.css({position:"",bottom:"",top:"",width:""}),e.position("position",""),c)return d==null&&(u!=="left"&&u!=="right"||t.insertAfter(s),s.remove()),t.removeClass(h)},l.on("touchmove",g),l.on("scroll",g),l.on("resize",_),p(document.body).on("sticky_kit:recalc",_),t.on("sticky_kit:detach",S),setTimeout(g,0)}},z=0,j=this.length;z<j;z++)r=this[z],W(p(r));return this}}).call(void 0);
