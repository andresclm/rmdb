(this.webpackJsonprmdb=this.webpackJsonprmdb||[]).push([[4],{252:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(22),l=function(e){var t=e.children;return c.a.createElement("span",{className:"text-xs border px-2 py-1 rounded-md w-auto"},t)},s=a(38),m=function(e){var t=e.name,a=e.data,r=e.formatter;return c.a.createElement("section",{className:"grid grid-cols-2",style:{justifyItems:"center"}},c.a.createElement("h3",{className:"text-lg text-gray-800 font-light tracking-wider"},t),c.a.createElement("p",{className:"text-gray-700"},void 0===r?a:r(a)))},i=a(40),o=a(4),d=function(e){var t,a;return null!==(t="$ ".concat(null===(a=e)||void 0===a?void 0:a.toLocaleString()))&&void 0!==t?t:void 0},u=a(20),p=a(5),b=a(13),x=a.n(b),v=a(17),w=a(19),g=a(129),f=a.n(g),E=a(39),y=function(){var e=Object(w.a)(x.a.mark((function e(t,a){var r,c,n,l,s,m;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=fetch("".concat(o.c,"movie/").concat(a,"?api_key=").concat(o.a,"&append_to_response=credits,recommendations,videos")),e.next=3,c;case 3:return n=e.sent,e.next=6,n.json();case 6:if(!(l=e.sent).backdrop_path){e.next=13;break}return e.next=10,f.a.from("".concat(o.b).concat(o.d.sm,"/").concat(l.backdrop_path)).getPalette();case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=void 0;case 14:return s=e.t0,m=Object(v.a)(Object(v.a)({},l),{},{credits:Object(v.a)({cast:l.credits.cast},(t=l.credits.crew,t.reduce((function(e,t){switch(t.job){case"Director":return Object(v.a)(Object(v.a)({},e),{},{directors:[].concat(Object(E.a)(e.directors),[t.name])});case"Writer":return Object(v.a)(Object(v.a)({},e),{},{writters:[].concat(Object(E.a)(e.writters),[t.name])});default:return e}}),{directors:[],writters:[]}))),recommendations:l.recommendations.results,vibrantColor:(null===s||void 0===s||null===(r=s.DarkVibrant)||void 0===r?void 0:r.getHex())||"#555555",videos:l.videos.results.filter((function(e){return"Trailer"!==e.type}))}),e.abrupt("return",m);case 17:case"end":return e.stop()}var t}),e)})));return function(t,a){return e.apply(this,arguments)}}(),h=a(21),k=a(23),N=a(14),j=a.n(N),_=[{name:"Status",key:"status"},{name:"Release date",key:"release_date",formatter:function(e){return new Date(e).toUTCString().slice(0,16)}},{name:"Language",key:"spoken_languages",formatter:function(e){var t,a;return null!==(t=null===(a=e[0])||void 0===a?void 0:a.name)&&void 0!==t?t:void 0}},{name:"Budget",key:"budget",formatter:d},{name:"Revenue",key:"revenue",formatter:d}];t.default=function(){var e=Object(p.h)().id,t=Object(u.b)(["details",e],y,{staleTime:1/0}),a=t.data,d=t.isLoading,b=Object(k.b)(e),x=b.showButton,v=b.showModal,w=b.TrailerModal,g=b.PlayButton;return d||void 0===a?c.a.createElement(h.a,null):c.a.createElement("section",{className:"pb-16 md:pt-24"},c.a.createElement("div",{className:"relative"},c.a.createElement("picture",null,c.a.createElement("source",{srcSet:a.backdrop_path?"".concat(o.b).concat(o.d.md).concat(a.backdrop_path):j.a,media:"(min-width: 768px)"}),c.a.createElement("img",{className:"block absolute left-0 z-0 object-cover w-full h-full bg-gray-500",style:{filter:"grayscale(1) contrast(1.5)"},src:a.backdrop_path?"".concat(o.b).concat(o.d.sm).concat(a.backdrop_path):j.a,alt:"".concat(a.title," backdrop")})),c.a.createElement("div",{className:"block absolute left-0 z-10 w-full h-full",style:{backgroundColor:"".concat(a.vibrantColor,"E6")}}),c.a.createElement("article",{className:"px-5 md:px-6 py-10 md:py-10 flex flex-col md:flex-row relative z-20 max-w-5xl mx-auto"},c.a.createElement("picture",{className:"w-full md:w-4/12"},c.a.createElement("source",{srcSet:a.poster_path?"".concat(o.b).concat(o.e.md).concat(a.poster_path):j.a,media:"(min-width: 500px) and (max-width: 768px)"}),c.a.createElement("img",{className:"w-full bg-gray-400 rounded-md md:rounded shadow-md",src:a.poster_path?"".concat(o.b).concat(o.e.sm).concat(a.poster_path):j.a,alt:"".concat(a.title," poster")})),c.a.createElement("div",{className:"mt-6 md:mt-0 md:ml-6 md:w-8/12 text-gray-100"},c.a.createElement("h2",{className:"text-4xl"},a.title),c.a.createElement("div",{className:"mt-3"},c.a.createElement("span",{className:"mr-6"},c.a.createElement(l,null,a.release_date?Object(n.a)(a.release_date):(new Date).getFullYear()+1)),c.a.createElement("span",{className:"mr-6"},a.genres.slice(0,4).map((function(e){return c.a.createElement("span",{className:"mr-1",key:e.id},c.a.createElement(l,null,e.name))}))),c.a.createElement("p",{className:"text-gray-200 hidden sm:inline"},a.runtime?Object(n.b)(a.runtime):Object(n.b)(200))),c.a.createElement("p",{className:"italic mt-5"},a.tagline?'"'.concat(a.tagline,'"'):void 0),c.a.createElement("div",{className:"flex items-center mt-5"},c.a.createElement("div",{className:"w-12 mr-8"},c.a.createElement(s.a,{value:0===a.vote_average?5:a.vote_average})),x&&c.a.createElement(g,null)),c.a.createElement("h3",{className:"mt-5 text-xs leading-4 uppercase text-gray-400 tracking-wide"},"Overview"),c.a.createElement("p",{className:"mt-2 tracking-wide text-sm"},a.overview),["directors","writters"].map((function(e){return a.credits[e].length>0&&c.a.createElement(r.Fragment,{key:e},c.a.createElement("h3",{className:"uppercase text-gray-400 tracking-wide text-xs mt-5"},e),a.credits[e].map((function(e){return c.a.createElement("span",{key:e,className:"inline-block mt-2 mr-3"},c.a.createElement(l,null,e))})))}))))),a.credits.cast.length>0&&c.a.createElement(i.a,{title:"Starring",titleClass:"pl-5 md:pl-10 pb-4 md:pb-6",data:a.credits.cast.slice(0,30),cardType:"castPerson",breakpointsConfig:{0:{slidesPerView:4},470:{slidesPerView:5},575:{slidesPerView:6},1024:{slidesPerView:7}},sliderClass:"px-5 md:px-0 md:mx-5",wrapperClass:"pt-10"}),c.a.createElement("hr",{className:"w-2/3 my-8 mx-auto border-gray-900 md:max-w-3xl"}),c.a.createElement("div",{className:"h-40 w-4/5 mx-auto flex flex-col justify-between md:max-w-2xl"},_.map((function(e){return 0!==a[e.key]&&c.a.createElement(m,{name:e.name,formatter:e.formatter,data:a[e.key],key:e.key})}))),a.recommendations.length>0&&c.a.createElement(r.Fragment,null,c.a.createElement("hr",{className:"w-2/3 my-8 mx-auto border-gray-900 md:max-w-3xl"}),c.a.createElement(i.a,{title:"Recommended",data:a.recommendations,cardType:"movie",titleClass:"pl-5 pb-4 md:pl-10 md:pb-6",sliderClass:"px-5 md:px-0 md:mx-5",breakpointsConfig:{0:{slidesPerView:3},575:{slidesPerView:4},765:{slidesPerView:5},1024:{slidesPerView:6}}})),a.videos.length>0&&c.a.createElement(r.Fragment,null,c.a.createElement("hr",{className:"w-2/3 my-8 mx-auto border-gray-900 md:max-w-3xl"}),c.a.createElement(i.a,{title:"Videos",data:a.videos,cardType:"trailer",titleClass:"pl-5 pb-4 md:pl-10 md:pb-6",sliderClass:"mx-5",breakpointsConfig:{0:{slidesPerView:1,cssMode:!0},575:{slidesPerView:2,cssMode:!0},900:{slidesPerView:3,cssMode:!0}}})),v&&c.a.createElement(w,null))}}}]);
//# sourceMappingURL=4.6f0b5276.chunk.js.map