(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{165:function(e,t,a){"use strict";a.r(t);a(228);var n=a(0),r=a.n(n),l=a(298),i=a(224),c=a(218);t.default=function(e){var t=e.metadata,a=e.items,n=t.allTagsPath,o=t.name,s=t.count;return r.a.createElement(i.a,{title:'Highlights tagged "'+o+'"',description:'Highlight | Tagged "'+o+'"'},r.a.createElement("header",{className:"hero hero--clean"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,s," ",function(e,t){return e>1?t+"s":t}(s,"highlight"),' tagged with "',o,'"'),r.a.createElement("div",{className:"hero--subtitle"},r.a.createElement(c.a,{href:n},"View All Tags")))),r.a.createElement("main",{className:"container container--xs"},r.a.createElement(l.a,{items:a})))}},223:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(217);function r(){var e=Object(n.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_highlight,a=Date.parse(t.date),r=new Date,l=Math.abs(r-a),i=Math.ceil(l/864e5),c=null;return"undefined"!=typeof window&&(c=new Date(parseInt(window.localStorage.getItem("highlightsViewedAt")||"0"))),i<30&&(!c||c<a)?t:null}function l(){"undefined"!=typeof window&&window.localStorage.setItem("highlightsViewedAt",(new Date).getTime())}},224:function(e,t,a){"use strict";a(231);var n=a(0),r=a.n(n),l=a(232),i=a(221),c=a(1),o=(a(233),a(218)),s=a(234),m=a(222),u=a.n(m),d=a(235),g=a.n(d),h=a(217),f=a(216),p=a.n(f),b=a(131),v=a.n(b),y=function(){return r.a.createElement("span",{className:p()(v.a.toggle,v.a.moon)})},E=function(){return r.a.createElement("span",{className:p()(v.a.toggle,v.a.sun)})},N=function(e){var t=Object(h.a)().isClient;return r.a.createElement(g.a,Object(c.a)({disabled:!t,icons:{checked:r.a.createElement(y,null),unchecked:r.a.createElement(E,null)}},e))},_=a(223),k=a(220),w=a(239),T=a(229),O=a(230),M=a(227),j=a(132),D=a.n(j);function S(e){var t=e.href,a=e.hideIcon,n=e.label,l=e.onClick,i=(e.position,e.right),s=e.to,m=function(e,t){var a={label:e};switch(e.toLowerCase()){case"chat":return a.hideText=1==t,a.icon="message-circle",a;case"community":return a.hideText=1==t,a.icon="users",a;case"github":return a.badge="4.2k",a.hideText=!1,a.icon="github",a;case"highlights":return Object(_.a)()&&(a.badge="new",a.badgeStyle="primary"),a.hideText=1==t,a.icon="gift",a;default:return a}}(n,i)||{},u=Object(k.a)(s);return r.a.createElement(o.a,Object(c.a)({className:p()("navbar__item navbar__link",m.className,{navbar__item__icon_only:m.hideText}),title:m.hideText?n:null,onClick:l},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:u}),!a&&m.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+m.icon})," ",m.iconLabel),!m.hideText&&m.label,m.badge&&r.a.createElement("span",{className:p()("badge","badge--"+(m.badgeStyle||"secondary"))},m.badge))}var C=function(){var e,t=Object(h.a)(),a=t.siteConfig.themeConfig,l=a.navbar,i=(l=void 0===l?{}:l).title,m=l.links,d=void 0===m?[]:m,g=l.hideOnScroll,f=void 0!==g&&g,b=a.disableDarkMode,v=void 0!==b&&b,y=(t.isClient,Object(n.useState)(!1)),E=y[0],_=y[1],k=Object(n.useState)(!1),j=k[0],C=k[1],x=Object(M.a)(),A=x.isDarkTheme,P=x.setLightTheme,H=x.setDarkTheme,I=Object(w.a)(f),L=I.navbarRef,F=I.isNavbarVisible,U=Object(O.a)(),G=U.logoLink,z=U.logoLinkProps,B=U.logoImageUrl,J=U.logoAlt;Object(T.a)(E);var W=Object(n.useCallback)((function(){_(!0)}),[_]),Z=Object(n.useCallback)((function(){_(!1)}),[_]),V=Object(n.useCallback)((function(e){return e.target.checked?H():P()}),[P,H]);return r.a.createElement("nav",{ref:L,className:p()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":E},e[D.a.navbarHideable]=f,e[D.a.navbarHidden]=!F,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:W,onKeyDown:W},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,Object(c.a)({className:"navbar__brand",to:G},z),null!=B&&r.a.createElement(u.a,{className:"navbar__logo",src:B,alt:J}),null!=i&&r.a.createElement("strong",{className:j?D.a.hideLogoText:""},i)),d.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(S,Object(c.a)({},e,{left:!0,key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},d.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(S,Object(c.a)({},e,{right:!0,key:t}))})),!v&&r.a.createElement(N,{className:D.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:A,onChange:V}),r.a.createElement(s.a,{handleSearchBarToggle:C,isSearchBarExpanded:j}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Z}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,Object(c.a)({className:"navbar__brand",onClick:Z,to:G},z),null!=B&&r.a.createElement(u.a,{className:"navbar__logo",src:B,alt:J}),null!=i&&r.a.createElement("strong",null,i)),!v&&E&&r.a.createElement(N,{"aria-label":"Dark mode toggle in sidebar",checked:A,onChange:V})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(S,Object(c.a)({className:"menu__link"},e,{hideIcon:!0,onClick:Z})))})))))))},x=a(9);a(133);var A=function(e){var t,a=e.block,n=e.buttonClass,l=e.center,i=e.description,c=e.size,o=e.width;return r.a.createElement("div",{className:p()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":l},t["mailing-list--"+c]=c,t))},!1!==i&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://app.getvero.com/forms/a748ded7ce0da69e6042fa1e21042506",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:p()("input","input--"+c),name:"email",placeholder:"you@email.com",type:"email",style:{width:o}}),r.a.createElement("button",{className:p()("button","button--"+(n||"primary"),"button--"+c),type:"submit"},"Subscribe")))},P=a(134),H=a.n(P);function I(e){var t=e.to,a=e.href,n=e.label,l=Object(x.a)(e,["to","href","label"]),i=Object(k.a)(t);return r.a.createElement(o.a,Object(c.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:i},l),n)}var L=function(e){var t=e.url,a=e.alt;return r.a.createElement(u.a,{className:"footer__logo",alt:a,src:t})};var F=function(){var e=Object(h.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,i=n.links,c=void 0===i?[]:i,o=n.logo,s=void 0===o?{}:o,m=Object(k.a)(s.src);return a?r.a.createElement("footer",{className:p()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},c&&c.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(u.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"Gnet",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(A,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/_andy_pan",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"Gnet's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"Gnet's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://strikefreedom.top/rss.xml",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"Gnet's RSS feed"})))),c.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(I,e))}))):null)}))),(s||l)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:H.a.footerLogoLink},r.a.createElement(L,{alt:s.alt,url:m})):r.a.createElement(L,{alt:s.alt,url:m}),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.digitalocean.com/",target:"_blank",rel:"noopener noreferrer",className:H.a.footerLogoLink},r.a.createElement("img",{alt:"DigitalOcean",src:"https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_blue.svg",width:"201px"}))),l,r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/security/policy"},"Security Policy"),"\xa0\u2022\xa0",r.a.createElement("a",{href:"https://github.com/panjf2000/gnet/blob/master/PRIVACY.md"},"Privacy Policy")),r.a.createElement("br",null),r.a.createElement("small",null,"Acknowledgement for Timber, Inc.")))):null},U=a(240),G=a(241),z=a(3);a(135);t.a=function(e){var t=Object(h.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,c=(a.tagline,a.title),o=a.themeConfig.image,s=a.url,m=e.children,u=e.title,d=e.noFooter,g=e.description,f=e.image,p=e.keywords,b=(e.permalink,e.version),v=u?u+" | "+c:c,y=f||o,E=s+Object(k.a)(y),N=Object(k.a)(n),_=Object(z.h)(),w=_?"https://gnet.host"+(_.pathname.endsWith("/")?_.pathname:_.pathname+"/"):null;return r.a.createElement(G.a,null,r.a.createElement(U.a,null,r.a.createElement(i.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),v&&r.a.createElement("title",null,v),v&&r.a.createElement("meta",{property:"og:title",content:v}),n&&r.a.createElement("link",{rel:"shortcut icon",href:N}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),b&&r.a.createElement("meta",{name:"docsearch:version",content:b}),p&&p.length&&r.a.createElement("meta",{name:"keywords",content:p.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:E}),y&&r.a.createElement("meta",{property:"twitter:image",content:E}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),y&&r.a.createElement("meta",{name:"twitter:site",content:"@vectordotdev"}),y&&r.a.createElement("meta",{name:"twitter:creator",content:"@vectordotdev"}),w&&r.a.createElement("meta",{property:"og:url",content:w}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),w&&r.a.createElement("link",{rel:"canonical",href:w})),r.a.createElement(l.a,null),r.a.createElement(C,null),r.a.createElement("div",{className:"main-wrapper"},m),!d&&r.a.createElement(F,null)))}},226:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a(79),a(246),a(225),a(78);var n=a(238),r=a.n(n);function l(e,t){var a=new r.a;return e.map((function(e){var n=e;return"string"==typeof e&&(n={label:e,permalink:"/"+t+"/tags/"+a.slug(e)}),function(e,t){if(e.enriched)return e;var a=e.label.split(": ",2),n=a[0],r=a[1],l="primary";switch(n){case"domain":l="blue";break;case"type":l="pink";break;default:l="primary"}return{category:n,count:e.count,enriched:!0,label:e.label,permalink:e.permalink,style:l,value:r}}(n)}))}},237:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(218),i=a(216),c=a.n(i);t.a=function(e){var t=e.count,a=e.label,n=e.permalink,i=e.style,o=e.value,s=e.valueOnly;return r.a.createElement(l.a,{to:n+"/",className:c()("badge","badge--rounded","badge--"+i)},s?o:a,t&&r.a.createElement(r.a.Fragment,null," (",t,")"))}},242:function(e,t,a){"use strict";a(228),a(225);var n=a(0),r=a.n(n),l=a(216),i=a.n(l),c=a(217);a(137);t.a=function(e){var t,a=e.bio,n=e.className,l=e.github,o=e.nameSuffix,s=e.rel,m=e.size,u=e.subTitle,d=e.vertical,g=Object(c.a)().siteConfig,h=(void 0===g?{}:g).customFields.metadata.team,f=h.find((function(e){return e.github==l}))||h.find((function(e){return"ben"==e.id}));return r.a.createElement("div",{className:i()("avatar",n,(t={},t["avatar--"+m]=m,t["avatar--vertical"]=d,t))},r.a.createElement("img",{className:i()("avatar__photo","avatar__photo--"+m),src:f.avatar}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("div",{className:"avatar__name"},r.a.createElement("a",{href:f.github,target:"_blank",rel:s},f.name),o),u&&r.a.createElement("small",{className:"avatar__subtitle"},u),!u&&a&&r.a.createElement("small",{className:"avatar__subtitle",dangerouslySetInnerHTML:{__html:f.bio}})))}},243:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),i=(a(218),a(237)),c=a(216),o=a.n(c),s=a(226),m=a(138),u=a.n(m);t.a=function(e){var t,a=e.block,r=e.colorProfile,c=e.tags,m=e.valuesOnly,d=Object(s.a)(c,r);return l.a.createElement("span",{className:o()(u.a.tags,(t={},t[u.a.tagsBlock]=a,t))},d.map((function(e,t){return l.a.createElement(i.a,Object(n.a)({key:t,valueOnly:m},e))})))}},244:function(e,t,a){var n;!function(r){"use strict";var l,i,c,o=(l=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,c=/[^-+\dA-Z]/g,function(e,t,a,n){if(1!==arguments.length||"string"!==d(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var r=(t=String(o.masks[t]||t||o.masks.default)).slice(0,4);"UTC:"!==r&&"GMT:"!==r||(t=t.slice(4),a=!0,"GMT:"===r&&(n=!0));var g=a?"getUTC":"get",h=e[g+"Date"](),f=e[g+"Day"](),p=e[g+"Month"](),b=e[g+"FullYear"](),v=e[g+"Hours"](),y=e[g+"Minutes"](),E=e[g+"Seconds"](),N=e[g+"Milliseconds"](),_=a?0:e.getTimezoneOffset(),k=m(e),w=u(e),T={d:h,dd:s(h),ddd:o.i18n.dayNames[f],dddd:o.i18n.dayNames[f+7],m:p+1,mm:s(p+1),mmm:o.i18n.monthNames[p],mmmm:o.i18n.monthNames[p+12],yy:String(b).slice(2),yyyy:b,h:v%12||12,hh:s(v%12||12),H:v,HH:s(v),M:y,MM:s(y),s:E,ss:s(E),l:s(N,3),L:s(Math.round(N/10)),t:v<12?o.i18n.timeNames[0]:o.i18n.timeNames[1],tt:v<12?o.i18n.timeNames[2]:o.i18n.timeNames[3],T:v<12?o.i18n.timeNames[4]:o.i18n.timeNames[5],TT:v<12?o.i18n.timeNames[6]:o.i18n.timeNames[7],Z:n?"GMT":a?"UTC":(String(e).match(i)||[""]).pop().replace(c,""),o:(_>0?"-":"+")+s(100*Math.floor(Math.abs(_)/60)+Math.abs(_)%60,4),S:["th","st","nd","rd"][h%10>3?0:(h%100-h%10!=10)*h%10],W:k,N:w};return t.replace(l,(function(e){return e in T?T[e]:e.slice(1,e.length-1)}))});function s(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function m(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var r=(t-a)/6048e5;return 1+Math.floor(r)}function u(e){var t=e.getDay();return 0===t&&(t=7),t}function d(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}o.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},o.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(n=function(){return o}.call(t,a,t,e))||(e.exports=n)}()},269:function(e,t,a){"use strict";var n=a(12),r=a(29),l=a(26),i=a(13),c=[].sort,o=[1,2,3];n(n.P+n.F*(i((function(){o.sort(void 0)}))||!i((function(){o.sort(null)}))||!a(270)(c)),"Array",{sort:function(e){return void 0===e?c.call(l(this)):c.call(l(this),r(e))}})},270:function(e,t,a){"use strict";var n=a(13);e.exports=function(e,t){return!!e&&n((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},277:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=["second","minute","hour","day","week","month","year"],i=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"],c={},o=function(e,t){c[e]=t},s=function(e){return c[e]||c.en_US},m=[60,60,24,7,365/7/12,12];function u(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function d(e,t){for(var a=e<0?1:0,n=e=Math.abs(e),r=0;e>=m[r]&&r<m.length;r++)e/=m[r];return(e=Math.floor(e))>(0===(r*=2)?9:1)&&(r+=1),t(e,r,n)[a].replace("%s",e.toString())}function g(e,t){return(+(t?u(t):new Date)-+u(e))/1e3}function h(e){return parseInt(e.getAttribute("timeago-id"))}var f={},p=function(e){clearTimeout(e),delete f[e]};function b(e,t,a,n){p(h(e));var r=n.relativeDate,l=n.minInterval,i=g(t,r);e.innerText=d(i,a);var c=setTimeout((function(){b(e,t,a,n)}),Math.min(1e3*Math.max(function(e){for(var t=1,a=0,n=Math.abs(e);e>=m[a]&&a<m.length;a++)e/=m[a],t*=m[a];return n=(n%=t)?t-n:t,Math.ceil(n)}(i),l||1),2147483647));f[c]=0,function(e,t){e.setAttribute("timeago-id",t)}(e,c)}function v(e){e?p(h(e)):Object.keys(f).forEach(p)}o("en_US",(function(e,t){if(0===t)return["just now","right now"];var a=l[Math.floor(t/2)];return e>1&&(a+="s"),[e+" "+a+" ago","in "+e+" "+a]})),o("zh_CN",(function(e,t){if(0===t)return["\u521a\u521a","\u7247\u523b\u540e"];var a=i[~~(t/2)];return[e+" "+a+"\u524d",e+" "+a+"\u540e"]}));var y,E=(y=function(e,t){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}y(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),N=function(){return(N=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},_=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dom=null,t}return E(t,e),t.prototype.componentDidMount=function(){this.renderTimeAgo()},t.prototype.componentDidUpdate=function(){this.renderTimeAgo()},t.prototype.renderTimeAgo=function(){var e,t=this.props,a=t.live,n=t.datetime,r=t.locale,l=t.opts;v(this.dom),!1!==a&&(this.dom.setAttribute("datetime",""+((e=n)instanceof Date?e.getTime():e)),function(e,t,a){var n=e.length?e:[e];n.forEach((function(e){b(e,function(e){return e.getAttribute("datetime")}(e),s(t),a||{})}))}(this.dom,r,l))},t.prototype.componentWillUnmount=function(){v(this.dom)},t.prototype.render=function(){var e=this,t=this.props,a=t.datetime,n=(t.live,t.locale),l=t.opts,i=_(t,["datetime","live","locale","opts"]);return r.a.createElement("time",N({ref:function(t){e.dom=t}},i),function(e,t,a){return d(g(e,a&&a.relativeDate),s(t))}(a,n,l))},t.defaultProps={live:!0,className:""},t}(r.a.Component);t.a=k},294:function(e,t,a){"use strict";const n=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.toLowerCase().replace(/(?:^|\s|-)\S/g,e=>e.toUpperCase())};e.exports=n,e.exports.default=n},298:function(e,t,a){"use strict";var n=a(1),r=(a(269),a(25),a(20),a(19),a(53),a(0)),l=a.n(r),i=a(236),c=(a(225),a(242)),o=a(218),s=a(243),m=a(277),u=(a(271),a(216)),d=a.n(u),g=a(244),h=a.n(g),f=a(226);var p=function(e){var t=e.authorGithub,a=e.colorize,n=e.dateString,r=e.description,i=e.headingDepth,u=e.hideAuthor,g=e.hideTags,p=e.permalink,b=e.prNumbers,v=e.tags,y=e.title,E=new Date(Date.parse(n)),N=h()(E,"mmm dS, yyyy"),_=Object(f.a)(v,"highlights"),k=(_=_.concat(b.map((function(e){return{enriched:!0,label:l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"feather icon-git-pull-request"})," ",e),permalink:"https://github.com/panjf2000/gnet/commit/"+e,style:"secondary"}})))).find((function(e){return"domain"==e.category})),w=k?k.value:null,T=_.find((function(e){return"type"==e.category})),O=T?T.value:null,M="h"+(i||3),j=null;if(a)switch(O){case"breaking change":j="danger";break;case"enhancement":j="pink";break;case"new feature":j="primary";break;case"performance":j="warning"}var D=l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"time"},l.a.createElement("span",{className:"formatted-time"},N),l.a.createElement("span",{className:"separator"}," / "),l.a.createElement(m.a,{title:N,pubdate:"pubdate",datetime:E})),l.a.createElement("span",{className:"separator"}," / "),l.a.createElement("span",{className:"author-title"},"Gnet creator"));return l.a.createElement(o.a,{to:p,className:d()("panel","panel--"+j,"domain-bg","domain-bg--hover","domain-bg--"+w)},l.a.createElement("article",null,l.a.createElement(M,null,y),l.a.createElement("div",{className:"subtitle"},r),!u&&t&&l.a.createElement(c.a,{github:t,size:"sm",subTitle:D,rel:"author"}),!g&&_.length>0&&l.a.createElement("div",null,l.a.createElement(s.a,{colorProfile:"blog",tags:_}))))},b=a(238),v=a.n(b),y=a(293),E=a.n(y),N=a(294),k=a.n(N),w=(Object(i.a)("h2"),Object(i.a)("h3"));function T(e){var t=e.groupBy,a=e.group,n=new v.a;switch(t){case"release":return l.a.createElement("li",{className:"header sticky"},l.a.createElement("h3",null,l.a.createElement(o.a,{to:"/releases/"+a+"/"},k()(a))));case"type":var r=null,i=E()(k()(a)),c=null;switch(a){case"breaking change":r="alert-triangle",c="danger";break;case"enhancement":r="arrow-up-circle",c="pink";break;case"new feature":r="gift",c="primary";break;case"performance":r="zap",i="Performance Improvements",c="warning"}return l.a.createElement("li",{className:"header sticky"},l.a.createElement(w,{id:n.slug(a+"-highlights"),className:"text--"+c},r&&l.a.createElement("i",{className:"feather icon-"+r})," ",i));default:throw Error("unknown group: "+t)}}t.a=function(e){var t=e.author,a=(e.clean,e.colorize),r=e.groupBy,i=e.items,c=e.tags,o=e.timeline,s=r||"release",m=function(e){return e.map((function(e){if(e.content){var t=e.content,a=t.frontMatter,n=t.metadata,r=a.author_github,l=a.pr_numbers,i=a.release,c=a.title,o=n.date,s=n.description,m=n.permalink,u=n.tags,d={};return d.authorGithub=r,d.dateString=o,d.description=s,d.permalink=m,d.prNumbers=l,d.release=i,d.tags=u,d.title=c,d}return e}))}(i),u=_.groupBy(m,s),g=!1!==o?Object.keys(u):Object.keys(u).sort();return l.a.createElement("ul",{className:d()("connected-list","connected-list--clean")},g.map((function(e,r){var i=u[e];return l.a.createElement(l.a.Fragment,null,l.a.createElement(T,{groupBy:s,group:e}),l.a.createElement("ul",{className:d()("connected-list",{"connected-list--timeline":!1!==o})},i.map((function(e,r){return l.a.createElement("li",{key:r},l.a.createElement(p,Object(n.a)({},e,{colorize:a,hideAuthor:0==t,hideTags:0==c})))}))))})))}}}]);