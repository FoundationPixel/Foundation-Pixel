String.prototype.rightChars=function(e){return e<=0?"":e>this.length?this:this.substring(this.length,this.length-e)};(function(e){var t={highlightSpeed:20,typeSpeed:100,clearDelay:500,typeDelay:200,clearOnHighlight:!0,typerDataAttr:"data-typer-targets",typerInterval:2e3},n,r,i,s,o,u,a,f,l,c,h,p,d;o=function(t,n){t==="rgba(0, 0, 0, 0)"&&(t="rgb(255, 255, 255)");return e("<span></span>").css("color",t).css("background-color",n)};l=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};f=function(e){e.data("typePosition",null).data("highlightPosition",null).data("leftStop",null).data("rightStop",null).data("primaryColor",null).data("backgroundColor",null).data("text",null).data("typing",null)};s=function(e){var t=e.data("text"),n=e.data("oldLeft"),r=e.data("oldRight");if(!t||t.length===0){f(e);return}e.text(n+t.charAt(0)+r);e.data("oldLeft",n+t.charAt(0));e.data("text",t.substring(1));setTimeout(function(){s(e)},p())};r=function(e){e.find("span").remove();setTimeout(function(){s(e)},a())};n=function(e){var t=e.data("highlightPosition"),i,s,a;l(t)||(t=e.data("rightStop")+1);if(t<=e.data("leftStop")){setTimeout(function(){r(e)},u());return}i=e.text().substring(0,t-1);s=e.text().substring(t-1,e.data("rightStop")+1);a=e.text().substring(e.data("rightStop")+1);e.html(i);e.append(o(e.data("backgroundColor"),e.data("primaryColor")).append(s)).append(a);e.data("highlightPosition",t-1);setTimeout(function(){return n(e)},h())};c=function(t){var n;if(t.data("typing"))return;try{n=JSON.parse(t.attr(e.typer.options.typerDataAttr)).targets}catch(r){}typeof n=="undefined"&&(n=e.map(t.attr(e.typer.options.typerDataAttr).split(","),function(t){return e.trim(t)}));t.typeTo(n[Math.floor(Math.random()*n.length)])};e.typer=function(){return{options:t}}();e.extend(e.typer,{options:t});e.fn.typer=function(){var t=e(this);t=t.filter(function(){return typeof e(this).attr(e.typer.options.typerDataAttr)!="undefined"});t.each(function(){var t=e(this);c(t);setInterval(function(){c(t)},d())})};e.fn.typeTo=function(t){var r=e(this),i=r.text(),s=0,o=0;if(i===t){console.log("Our strings our equal, nothing to type");return}if(i!==r.html()){console.error("Typer does not work on elements with child elements.");return}r.data("typing",!0);while(i.charAt(s)===t.charAt(s))s++;while(i.rightChars(o)===t.rightChars(o))o++;t=t.substring(s,t.length-o+1);r.data("oldLeft",i.substring(0,s));r.data("oldRight",i.rightChars(o-1));r.data("leftStop",s);r.data("rightStop",i.length-o);r.data("primaryColor",r.css("color"));r.data("backgroundColor",r.css("background-color"));r.data("text",t);n(r)};h=function(){return e.typer.options.highlightSpeed};p=function(){return e.typer.options.typeSpeed},u=function(){return e.typer.options.clearDelay},a=function(){return e.typer.options.typeDelay};d=function(){return e.typer.options.typerInterval}})(jQuery);