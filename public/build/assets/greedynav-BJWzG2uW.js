$(function(){$("nav.greedy");var i=$("nav.greedy button"),n=$("nav.greedy .links"),a=$("nav.greedy .hidden-links"),d=0,s=0,r=[];n.children().outerWidth(function(o,h){s+=h,d+=1,r.push(s)});var t,e,c;function l(){t=n.width()-10,e=n.children().length,c=r[e-1],c>t?(n.children().last().prependTo(a),e-=1,l()):t>r[e]&&(a.children().first().appendTo(n),e+=1),i.attr("count",d-e),e===d?i.addClass("hidden"):i.removeClass("hidden")}$(window).resize(function(){l()}),i.on("click",function(){a.toggleClass("hidden")}),l()});