(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),s=a.n(r),i=(a(11),a(2)),l=a.n(i),o=a(5),u=a(1),m=(a(13),function(e){var t=e.image,a=e.calories,n=e.title,r=e.ingredients;return c.a.createElement("div",{className:"recipe"},c.a.createElement("h1",null,n),c.a.createElement("ol",null,c.a.createElement("h3",null,"Ingredients"),r.map((function(e,t){return c.a.createElement("li",{key:t},e.text)}))),c.a.createElement("p",null,"Calories: ",Math.trunc(a)),c.a.createElement("img",{className:"image",src:t,alt:n}))});a(14);var p=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),p=i[0],h=i[1],f=Object(n.useState)("banana"),d=Object(u.a)(f,2),b=d[0],E=d[1],v="https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("ddecd6fe","&app_key=").concat("bf7938b79473e3bcd10864b69dc533df");Object(n.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b,v]);var g=function(e){e.preventDefault(),E(p),h("")};return 0===a.length?c.a.createElement("div",{className:"App"},c.a.createElement("form",{className:"search-form"},c.a.createElement("input",{value:p,onChange:function(e){return h(e.target.value)},className:"search-bar",type:"text"}),c.a.createElement("button",{onClick:g,className:"search-button",type:"submit"},"search")),c.a.createElement("div",{className:"recipes"},c.a.createElement("h1",null,"Please double check your search."))):c.a.createElement("div",{className:"App"},c.a.createElement("form",{className:"search-form"},c.a.createElement("input",{value:p,onChange:function(e){return h(e.target.value)},className:"search-bar",type:"text"}),c.a.createElement("button",{onClick:g,className:"search-button",type:"submit"},"search")),c.a.createElement("div",{className:"recipes"},a.map((function(e,t){return c.a.createElement(m,{key:t,image:e.recipe.image,title:e.recipe.label,calories:e.recipe.calories,ingredients:e.recipe.ingredients})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.1a89cc8b.chunk.js.map