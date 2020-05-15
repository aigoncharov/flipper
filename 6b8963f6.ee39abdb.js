(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(2),o=n(11),r=(n(0),n(233)),l=n(235),a={id:"debugging",title:"Debugging"},s={id:"extending/debugging",title:"Debugging",description:"## Built-in Developer Tools",source:"@site/../docs/extending/debugging.mdx",permalink:"/docs/extending/debugging",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/debugging.mdx",sidebar:"extending",previous:{title:"Testing",permalink:"/docs/extending/testing"},next:{title:"Implementing a Flipper Client",permalink:"/docs/extending/new-clients"}},c=[{value:"Built-in Developer Tools",id:"built-in-developer-tools",children:[]},{value:"Google Chrome Developer Tools",id:"google-chrome-developer-tools",children:[]},{value:"Visual Studio Code",id:"visual-studio-code",children:[]},{value:"Plugin missing",id:"plugin-missing",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"built-in-developer-tools"},"Built-in Developer Tools"),Object(r.b)("p",null,"Flipper is built on Electron which itself is built on Chromium. This means we can debug Flipper using Chrome's developer tools. Flipper will also automatically install the React devtools extension allowing you to have better insight into what is going on in your plugin."),Object(r.b)("p",null,"You can open the dev tools from the menu with ",Object(r.b)("inlineCode",{parentName:"p"},"View")," > ",Object(r.b)("inlineCode",{parentName:"p"},"Toggle Developer Tools")," or pressing \u2325\u2318I on a Mac."),Object(r.b)("p",null,"In addition to helping you with the JavaScript, the JS console will also display uncaught exceptions thrown from the client plugin in response to Flipper method calls."),Object(r.b)("h2",{id:"google-chrome-developer-tools"},"Google Chrome Developer Tools"),Object(r.b)("p",null,"As an alternative to using built-in Developer Tools you can also attach to the running Flipper instance from Google Chrome Developer Tools. Sometimes this is useful, because the version of Dev Tools in Google Chrome is more recent than the embedded one, and it is possible to easily install additional extensions if required."),Object(r.b)("p",null,'To attach the running Flipper instance open new tab in Google Chrome, navigate to "http://localhost:9222" and choose "Flipper" in the opened list.'),Object(r.b)("img",{alt:"Attach From Google Chrome",src:Object(l.a)("img/debugging-from-google-chrome.png")}),Object(r.b)("h2",{id:"visual-studio-code"},"Visual Studio Code"),Object(r.b)("p",null,'If you prefer to use the same editor for both coding and debugging, you can attach to the running Flipper instance for debugging right from Visual Studio Code. First of all, you need to install extension "Debugger for Chrome". Then, to start debugging, open folder ',Object(r.b)("inlineCode",{parentName:"p"},"desktop")," of Flipper repository in VSCode, execute ",Object(r.b)("inlineCode",{parentName:"p"},"yarn start")," in terminal to launch Flipper in development mode, select tab ",Object(r.b)("inlineCode",{parentName:"p"},"Debug and Run"),", and run task ",Object(r.b)("inlineCode",{parentName:"p"},"Attach to Running Renderer"),". By default this task is set as the first one, so you can just press ",Object(r.b)("inlineCode",{parentName:"p"},"F5")," to run it."),Object(r.b)("img",{alt:"Attach From Visual Studio Code",src:Object(l.a)("img/debugging-from-vscode.png")}),Object(r.b)("h2",{id:"plugin-missing"},"Plugin missing"),Object(r.b)("p",null,"If a plugin you created is not showing up there might be two potential classes of problems: Either there is a problem on the mobile side or on the desktop side. Understanding where the problem is rooted helps debugging it."),Object(r.b)("p",null,'Click on "Plugin now showing" in the sidebar and see if your plugin is listed here. If it is not listed, the desktop side of the plugin is not loaded. One of the main reasons for this is that the plugin could not be compiled, due to some errors. Try launching Flipper from the Terminal to see some additional logs: ',Object(r.b)("inlineCode",{parentName:"p"},"/Applications/Flipper.app/Contents/MacOS/Flipper"),"."),Object(r.b)("p",null,"A common error here is ",Object(r.b)("inlineCode",{parentName:"p"},"Error: fsevents unavailable (this watcher can only be used on Darwin)"),". This can be fixed by installing watchman (",Object(r.b)("inlineCode",{parentName:"p"},"brew install watchman"),")."),Object(r.b)("p",null,"If the plugin is listed in the desktop app, but still is not showing up in the sidebar, the mobile app is not announcing the plugin. In this case, make sure, to instantiate your plugin and add it to your FlipperClient."))}p.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,b=p["".concat(l,".").concat(g)]||p[g]||d[g]||r;return n?o.a.createElement(b,a({ref:t},c,{components:n})):o.a.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<r;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},234:function(e,t,n){"use strict";var i=n(0),o=n(56);t.a=function(){return Object(i.useContext)(o.a)}},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(236);var i=n(234);function o(e){var t=(Object(i.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},236:function(e,t,n){"use strict";var i=n(6),o=n(15),r=n(237),l="".startsWith;i(i.P+i.F*n(238)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return l?l.call(t,i,n):t.slice(n,n+i.length)===i}})},237:function(e,t,n){var i=n(81),o=n(23);e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},238:function(e,t,n){var i=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);