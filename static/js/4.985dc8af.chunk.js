(this.webpackJsonprmdb=this.webpackJsonprmdb||[]).push([[4],{251:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(22),c=function(e){var t=e.children;return n.a.createElement("span",{className:"text-xs border px-2 py-1 rounded-md w-auto"},t)},s=a(38),i=function(e){var t=e.name,a=e.data,r=e.formatter;return n.a.createElement("section",{className:"grid grid-cols-2",style:{justifyItems:"center"}},n.a.createElement("h3",{className:"text-lg text-gray-800 font-light tracking-wider"},t),n.a.createElement("p",{className:"text-gray-700"},void 0===r?a:r(a)))},m=a(40),o=a(4),d=function(e){var t,a;return null!==(t="$ ".concat(null===(a=e)||void 0===a?void 0:a.toLocaleString()))&&void 0!==t?t:void 0},u=a(20),p=a(5),f=a(13),b=a.n(f),g=a(17),v=a(19),w=a(128),x=a.n(w),h=a(39),E=function(){var e=Object(v.a)(b.a.mark((function e(t,a){var r,n,l,c,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=fetch("".concat(o.c,"movie/").concat(a,"?api_key=").concat(o.a,"&append_to_response=credits,recommendations,videos,reviews")),e.next=3,n;case 3:return l=e.sent,e.next=6,l.json();case 6:if(!(c=e.sent).backdrop_path){e.next=13;break}return e.next=10,x.a.from("".concat(o.b).concat(o.d.sm,"/").concat(c.backdrop_path)).getPalette();case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=void 0;case 14:return s=e.t0,i=Object(g.a)(Object(g.a)({},c),{},{credits:Object(g.a)({cast:c.credits.cast},(t=c.credits.crew,t.reduce((function(e,t){switch(t.job){case"Director":return Object(g.a)(Object(g.a)({},e),{},{directors:[].concat(Object(h.a)(e.directors),[t.name])});case"Writer":return Object(g.a)(Object(g.a)({},e),{},{writters:[].concat(Object(h.a)(e.writters),[t.name])});default:return e}}),{directors:[],writters:[]}))),recommendations:c.recommendations.results,vibrantColor:(null===s||void 0===s||null===(r=s.DarkVibrant)||void 0===r?void 0:r.getHex())||"#555555",videos:c.videos.results.filter((function(e){return"Trailer"!==e.type})),reviews:c.reviews.results}),e.abrupt("return",i);case 17:case"end":return e.stop()}var t}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=a(21),k=a(23),N=a(14),j=a.n(N);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var P=n.a.createElement("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"}),C=function(e){var t=e.svgRef,a=e.title,r=_(e,["svgRef","title"]);return n.a.createElement("svg",O({viewBox:"0 0 20 20",fill:"currentColor",className:"arrow-right w-6 h-6",ref:t},r),a?n.a.createElement("title",null,a):null,P)},R=n.a.forwardRef((function(e,t){return n.a.createElement(C,O({svgRef:t},e))})),V=(a.p,function(e){var t=e.author,a=e.content,r=e.url;return n.a.createElement("article",{className:"w-full shadow-2xl p-8"},n.a.createElement("h3",{className:"text-gray-300 mb-4"},t),n.a.createElement("p",{className:"leading-relaxed text-gray-600 mb-6"},"".concat(a.slice(0,195),"...")),n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r,className:"text-primary inline-flex items-center"},"Read More",n.a.createElement(R,{className:"h-4 w-4 ml-1"})))}),S=[{name:"Status",key:"status"},{name:"Release date",key:"release_date",formatter:function(e){return new Date(e).toUTCString().slice(0,16)}},{name:"Language",key:"spoken_languages",formatter:function(e){var t,a;return null!==(t=null===(a=e[0])||void 0===a?void 0:a.name)&&void 0!==t?t:void 0}},{name:"Budget",key:"budget",formatter:d},{name:"Revenue",key:"revenue",formatter:d}];t.default=function(){var e=Object(p.h)().id,t=Object(u.b)(["details",e],E,{staleTime:1/0}),a=t.data,d=t.isLoading,f=Object(k.b)(e),b=f.showButton,g=f.showModal,v=f.TrailerModal,w=f.PlayButton;return d||void 0===a?n.a.createElement(y.a,null):n.a.createElement("section",{className:"pb-16"},n.a.createElement("div",{className:"relative"},n.a.createElement("picture",null,n.a.createElement("source",{srcSet:a.backdrop_path?"".concat(o.b).concat(o.d.md).concat(a.backdrop_path):j.a,media:"(min-width: 768px)"}),n.a.createElement("img",{className:"block absolute left-0 z-0 object-cover w-full h-full bg-gray-500",style:{filter:"grayscale(1) contrast(1.5)"},src:a.backdrop_path?"".concat(o.b).concat(o.d.sm).concat(a.backdrop_path):j.a,alt:"".concat(a.title," backdrop")})),n.a.createElement("div",{className:"block absolute left-0 z-10 w-full h-full",style:{backgroundImage:"linear-gradient(".concat(a.vibrantColor,"E6, #111822)")}}),n.a.createElement("article",{className:"px-5 pt-10 flex flex-col relative z-20 max-w-5xl mx-auto md:flex-row md:px-6 md:pt-20 lg:pt-24"},n.a.createElement("img",{className:"w-full h-full object-cover bg-gray-400 md:w-4/12 md:mt-1 rounded-md md:rounded shadow-md",src:a.poster_path?"".concat(o.b).concat(o.e.md).concat(a.poster_path):j.a,alt:"".concat(a.title," poster")}),n.a.createElement("div",{className:"mt-6 text-gray-100 md:mt-0 md:ml-6 md:w-8/12 self-center"},n.a.createElement("h2",{className:"text-4xl leading-none"},a.title),n.a.createElement("div",{className:"mt-5"},n.a.createElement("span",{className:"mr-6"},n.a.createElement(c,null,a.release_date?Object(l.a)(a.release_date):(new Date).getFullYear()+1)),n.a.createElement("span",{className:"md:mr-6"},a.genres.slice(0,4).map((function(e){return n.a.createElement("span",{className:"mr-1",key:e.id},n.a.createElement(c,null,e.name))}))),n.a.createElement("p",{className:"hidden sm:text-gray-200 sm:inline"},a.runtime?Object(l.b)(a.runtime):Object(l.b)(200))),n.a.createElement("p",{className:"italic mt-5"},a.tagline?'"'.concat(a.tagline,'"'):void 0),n.a.createElement("div",{className:"flex items-center mt-5"},n.a.createElement("div",{className:"w-12 mr-8"},n.a.createElement(s.a,{value:0===a.vote_average?5:a.vote_average})),b&&n.a.createElement(w,null)),n.a.createElement("h3",{className:"mt-5 font-light text-gray-700 tracking-wide"},"Overview"),n.a.createElement("p",{className:"mt-3 tracking-wide text-gray-600 text-sm leading-normal"},a.overview),["directors","writters"].map((function(e){return a.credits[e].length>0&&n.a.createElement(r.Fragment,{key:e},n.a.createElement("h3",{className:"capitalize font-light text-gray-800 tracking-wide mt-12 md:mt-5"},e),a.credits[e].map((function(e){return n.a.createElement("span",{key:e,className:"inline-block mt-2 mr-3 text-gray-600"},n.a.createElement(c,null,e))})))}))))),a.credits.cast.length>0&&n.a.createElement(m.a,{title:"Starring",titleClass:"pl-5 md:pl-10 pb-4 md:pb-6",data:a.credits.cast.slice(0,30),cardType:"castPerson",breakpointsConfig:{0:{slidesPerView:4},470:{slidesPerView:5},575:{slidesPerView:6},1024:{slidesPerView:7}},sliderClass:"px-5 md:px-0 md:mx-5",wrapperClass:"mt-16",preRenderedSlides:5}),n.a.createElement("div",{className:"mt-16 h-40 w-4/5 mx-auto flex flex-col justify-between md:max-w-2xl"},S.map((function(e){return 0!==a[e.key]&&n.a.createElement(i,{name:e.name,formatter:e.formatter,data:a[e.key],key:e.key})}))),a.recommendations.length>0&&n.a.createElement(m.a,{title:"Recommended",data:a.recommendations,cardType:"movie",titleClass:"pl-5 pb-4 md:pl-10 md:pb-6",sliderClass:"px-5 md:px-0 md:mx-5",wrapperClass:"mt-16",breakpointsConfig:{0:{slidesPerView:3},575:{slidesPerView:4},765:{slidesPerView:5},1024:{slidesPerView:6}},preRenderedSlides:4}),a.videos.length>0&&n.a.createElement(m.a,{title:"Videos",data:a.videos,cardType:"trailer",titleClass:"pl-5 pb-4 md:pl-10 md:pb-6",sliderClass:"mx-5",wrapperClass:"mt-16",breakpointsConfig:{0:{slidesPerView:1,cssMode:!0},575:{slidesPerView:2,cssMode:!0},900:{slidesPerView:3,cssMode:!0}}}),a.reviews.length>0&&n.a.createElement("section",{className:"max-w-screen-lg lg:mx-auto mt-16"},n.a.createElement("h2",{className:"text-gray-800 font-light tracking-wider text-lg pl-5 pb-4 md:pl-10 md:pb-6"},"Reviews"),n.a.createElement("ul",{className:"flex flex-col mx-5"},a.reviews.map((function(e){return n.a.createElement("li",{className:"mb-5",key:e.id},n.a.createElement(V,{url:e.url,author:e.author,content:e.content}))})))),g&&n.a.createElement(v,null))}}}]);
//# sourceMappingURL=4.985dc8af.chunk.js.map