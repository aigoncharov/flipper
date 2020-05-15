(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(11),o=(n(0),n(233)),a=n(235),c={id:"logs-plugin",title:"Logs"},s={id:"features/logs-plugin",title:"Logs",description:"The Logs plugin shows device logs without any additional setup. This is a device plugin, meaning that it is not tied to any specific app and there is no additional setup needed to see the logs.",source:"@site/../docs/features/logs-plugin.mdx",permalink:"/docs/features/logs-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/logs-plugin.mdx",sidebar:"features",previous:{title:"Features",permalink:"/docs/features/index"},next:{title:"Layout Inspector",permalink:"/docs/features/layout-plugin"}},u=[{value:"Filtering",id:"filtering",children:[]},{value:"Expression watcher",id:"expression-watcher",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Logs plugin shows device logs without any additional setup. This is a device plugin, meaning that it is not tied to any specific app and there is no additional setup needed to see the logs."),Object(o.b)("img",{alt:"Logs plugin",src:Object(a.a)("img/logs.png")}),Object(o.b)("h2",{id:"filtering"},"Filtering"),Object(o.b)("p",null,"The search bar can be used to search for logs and filter for certain types. From the context menu on the table headers you can show more infos like timestamp, PID or TID. Click on a tag, PID or TID in the table to filter only for logs with the same value."),Object(o.b)("h2",{id:"expression-watcher"},"Expression watcher"),Object(o.b)("p",null,"The expression watcher in the sidebar can be used to watch for certain logs to happen and count how often they occur. An expression can be a simple string, or a regular expression which is matched against the logs."),Object(o.b)("p",null,"When the notify checkbox is enabled, Flipper will send notifications once the log is happening. This lets you know when the watcher triggered, even if Flipper is in the background."))}p.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,d=p["".concat(a,".").concat(h)]||p[h]||f[h]||o;return n?i.a.createElement(d,c({ref:t},u,{components:n})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},234:function(e,t,n){"use strict";var r=n(0),i=n(56);t.a=function(){return Object(r.useContext)(i.a)}},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(236);var r=n(234);function i(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},236:function(e,t,n){"use strict";var r=n(6),i=n(15),o=n(237),a="".startsWith;r(r.P+r.F*n(238)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return a?a.call(t,r,n):t.slice(n,n+r.length)===r}})},237:function(e,t,n){var r=n(81),i=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},238:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(i){}}return!0}}}]);