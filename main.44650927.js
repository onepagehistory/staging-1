!function(e){function t(t){for(var a,r,o=t[0],s=t[1],p=t[2],d=0,u=[];d<o.length;d++)r=o[d],c[r]&&u.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(f&&f(t);u.length;)u.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},c={1:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=c[e]=[t,a]});t.push(n[2]=a);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.src=function(e){return r.p+"templates/"+({2:"src/EventPage/EventPageContainer",3:"src/pages/404.tsx",4:"src/pages/about.tsx",5:"src/pages/index.tsx",6:"src/pages/new-layout-page.tsx",8:"vendors~src/EventPage/EventPageContainer"}[e]||e)+"."+{2:"eb82fe8f",3:"52f72a1d",4:"dcf77b77",5:"a48d41ae",6:"8ebf8366",8:"728edac5"}[e]+".js"}(e),i=function(t){o.onerror=o.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,n[1](r)}c[e]=void 0}};var s=setTimeout(function(){i({type:"timeout",target:o})},12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var f=s;i.push([72,0,7]),n()}([,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return r});var a=(new Date).getFullYear(),c=10,i=80,r=i+250+7,o=function(e){var t=e.imageSize,n=void 0===t?i:t,a=e.descriptionWidth,c=void 0===a?250:a,r=e.descriptionMargin,o=void 0===r?7:r,s=e.stepHeight;return{imageSize:n,descriptionWidth:c,descriptionMargin:o,cardWidth:n+c+o,cardHeight:n,stepHeight:void 0===s?16:s}};o({imageSize:60,stepHeight:10,descriptionWidth:350}),o({}),o({imageSize:120})},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(15),r=n(5),o=n(40);n(275);t.a=function(){return c.a.createElement(i.Root,null,c.a.createElement(c.a.Suspense,{fallback:c.a.createElement("em",null,"Loading...")},c.a.createElement(r.g,null,c.a.createElement(r.d,{exact:!0,path:"/",component:o.a}),c.a.createElement(r.d,{exact:!0,path:"/p/:pageId",component:o.a}),c.a.createElement(r.d,{path:"/",render:function(){return c.a.createElement(i.Routes,{path:"*"})}}))))}},,,,,,,function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(15),r=n(12),o=n.n(r),s=n(16),p=(n(141),function(e){var t=e.entry,a=e.cardPosition,i=e.rangePosition,r=e.isSelected,o=e.sizes,p=e.sizeId,f="/p/"+t.name+"/",d=n(142)("./".concat(t.name,"@1x.png")),u=n(185)("./".concat(t.name,"@2x.png")),l=n(228)("./".concat(t.name,"@3x.png"));return c.a.createElement("div",{id:t.name,className:"Card"+(r?" Card--selected":"")+" Card--size-".concat(p),title:t.title},c.a.createElement(s.Link,{to:f,className:"Card__Range",style:{left:i.x,bottom:i.y,width:i.width,height:i.height}}),c.a.createElement("div",{className:"Card__Entry",style:{left:a.x,bottom:a.y,width:a.width,height:a.height}},c.a.createElement("div",{className:"Card__Box",style:{height:o.cardHeight}},c.a.createElement(s.Link,{to:f,className:"Card__ImgWrapper",style:{height:o.imageSize,width:o.imageSize}},c.a.createElement("img",{className:"Card__image",alt:t.name+" representation",src:d||t.imageUrl,srcSet:"".concat(d," 1x, ").concat(u," 2x, ").concat(l," 3x,")})),c.a.createElement("div",{className:"Card__Summary"},c.a.createElement(s.Link,{className:"Card__Head",to:f},c.a.createElement("h3",{className:"Card__Title"},t.title),c.a.createElement("p",{className:"Card__sub-title"},t.subtitle)),t.short&&c.a.createElement("p",{className:"Card__Description",style:{width:o.descriptionWidth}},t.short)))))}),f=n(23),d=n.n(f),u=n(24),l=n.n(u),g=n(25),x=n.n(g),b=n(26),m=n.n(b),h=n(28),v=n.n(h),w=n(27),E=n.n(w),y=n(32),_=n.n(y),k=(n(271),n(13)),C=[2e3,1500,1e3,500,0,-500],N=k.a-2e3,P=function(e){function t(e){var n;return d()(this,t),n=x()(this,m()(t).call(this,e)),_()(v()(n),"elementRefWrapper",c.a.createRef()),_()(v()(n),"elementRef",c.a.createRef()),n.handleScroll=n.handleScroll.bind(v()(n)),n}return E()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleScroll)}},{key:"handleScroll",value:function(){var e=(window.scrollX+200)/k.d-N;e<0?this.setIndicatorPosition(0):e>2500?this.setIndicatorPosition(N+2500):this.setIndicatorPosition(e)}},{key:"setIndicatorPosition",value:function(e){var t=40+(this.elementRefWrapper.current.clientWidth-80)/2500*e;this.elementRef.current.style.left=t+"px"}},{key:"scrollTo",value:function(e){var t=10*k.d,n=(k.a-e)*k.d-2*t;window.scrollTo({left:n})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"navigation"},c.a.createElement("div",{className:"navigation__bar",ref:this.elementRefWrapper},C.map(function(t){return c.a.createElement("a",{key:t,href:"#",className:"navigation__item",onClick:function(n){n.preventDefault(),e.scrollTo(t)}},t," ",c.a.createElement("span",{className:"navigation__item-text"},"year"))}),c.a.createElement("div",{ref:this.elementRef,className:"navigation__indicator",style:{width:100,marginLeft:-50}})))}}]),t}(a.Component);n(272);function S(e){var t=e.centuries.map(function(e){if(e.name%100==0)return c.a.createElement("p",{key:e.name.toString(),className:"century-label",style:{left:(k.a-e.name)*k.d}},e.name)});return c.a.createElement("div",null,t)}var O=function(e){var t=e.selectedId,n=e.sizeId,a=e.entries,i=e.upperEntries,r=e.lowerEntries,o=e.decades,s=e.sizes;return c.a.createElement("div",{className:"scales scales--size-".concat(n)},c.a.createElement("div",{className:"scales__events"},i.map(function(e){return c.a.createElement(p,{key:e.entryName,entry:a.find(function(t){return t.name==e.entryName}),isSelected:t==e.entryName,cardPosition:e.cardPosition,rangePosition:e.rangePosition,sizes:s,sizeId:n})}),c.a.createElement(S,{centuries:o})),c.a.createElement("div",{className:"scales__decades"},o.map(function(e){return c.a.createElement("div",{key:e.name,className:"scales-decades__item"},c.a.createElement("p",null,e.name))})),c.a.createElement("div",{className:"scales__events"},r.map(function(e){return c.a.createElement(p,{key:e.entryName,entry:a.find(function(t){return t.name==e.entryName}),isSelected:t==e.entryName,cardPosition:e.cardPosition,rangePosition:e.rangePosition,sizes:s,sizeId:n})})),c.a.createElement("div",{className:"scales__navigation-container"},c.a.createElement(P,null)))},L=function(e){var t=e.data,n=e.selectedId,i=Object(a.useState)({sizeId:"m"}),r=o()(i,2),s=r[0],p=r[1];Object(a.useLayoutEffect)(function(){var e,t=window.innerHeight;e=t>1e3?"l":t>720?"m":"s",s.sizeId!==e&&p({sizeId:e})});var f=t.decades,d=t.entries,u=t.plot[s.sizeId],l=u.upperEntries,g=u.lowerEntries,x=u.sizes;return c.a.createElement(O,{sizeId:s.sizeId,selectedId:n,sizes:x,decades:f,entries:d,upperEntries:l,lowerEntries:g})},H=n(5),z=(n(273),n(63));n.d(t,"a",function(){return j});var j=function(e){var t=Object(i.useSiteData)().data,n=e.match.params.pageId;return c.a.createElement("section",{className:"root-page"},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement("em",null,"Loading...")},c.a.createElement(H.d,{path:"/p/:id",render:function(){return c.a.createElement(i.Routes,{path:"/p/*"})}})),c.a.createElement("div",{className:"root-page__contents"},c.a.createElement("section",null,c.a.createElement(s.Link,{to:"/",className:"logo",onClick:function(){return window.scrollTo(0,0)}},c.a.createElement("svg",{width:"60",height:"28",viewBox:"0 0 60 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M36.7236 0H41.5221L31.7704 27.5524H27.7072L20.7804 7.73944L13.7762 27.5524H9.713L0 0H5.06933L11.9574 20.5482L19.1164 0H22.6766L29.6808 20.703L36.7236 0Z",fill:"white"}),c.a.createElement("path",{d:"M54.7611 0H59.7143V27.5524H54.7611V15.595H40.6366L42.249 11.5318H54.7611V0Z",fill:"white"})),c.a.createElement("p",{className:"logo__name"},"World History ",c.a.createElement("br",null),"Educational project")),c.a.createElement(L,{data:t,selectedId:n})),c.a.createElement("div",{className:"social-media-box"},c.a.createElement(z.a,null))))}},,,,,function(e,t,n){"use strict";n.r(t);var a=n(64),c=[{location:"../node_modules/react-static-plugin-typescript",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-react-router",plugins:[],hooks:n.n(a)()({})},{location:"../node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"..",plugins:[],hooks:{}}];t.default=c},,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",function(){return m});var a=n(9),c=n.n(a),i=n(10),r=n.n(i),o=n(0),s=n.n(o),p=n(11),f=n.n(p);Object(p.setHasBabelPlugin)();var d={loading:function(){return null},error:function(e){return console.error(e.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},u=f()(r()({id:"../src/pages/404.tsx",load:function(){return Promise.all([n.e(3).then(n.bind(null,67))]).then(function(e){return e[0]})},path:function(){return c.a.join(e,"../src/pages/404.tsx")},resolve:function(){return 67},chunkName:function(){return"src/pages/404.tsx"}}),d);u.template="../src/pages/404.tsx";var l=f()(r()({id:"../src/pages/about.tsx",load:function(){return Promise.all([n.e(4).then(n.bind(null,68))]).then(function(e){return e[0]})},path:function(){return c.a.join(e,"../src/pages/about.tsx")},resolve:function(){return 68},chunkName:function(){return"src/pages/about.tsx"}}),d);l.template="../src/pages/about.tsx";var g=f()(r()({id:"../src/pages/index.tsx",load:function(){return Promise.all([n.e(5).then(n.bind(null,69))]).then(function(e){return e[0]})},path:function(){return c.a.join(e,"../src/pages/index.tsx")},resolve:function(){return 69},chunkName:function(){return"src/pages/index.tsx"}}),d);g.template="../src/pages/index.tsx";var x=f()(r()({id:"../src/pages/new-layout-page.tsx",load:function(){return Promise.all([Promise.all([n.e(0),n.e(6)]).then(n.bind(null,70))]).then(function(e){return e[0]})},path:function(){return c.a.join(e,"../src/pages/new-layout-page.tsx")},resolve:function(){return 70},chunkName:function(){return"src/pages/new-layout-page.tsx"}}),d);x.template="../src/pages/new-layout-page.tsx";var b=f()(r()({id:"../src/EventPage/EventPageContainer",load:function(){return Promise.all([Promise.all([n.e(0),n.e(8),n.e(2)]).then(n.bind(null,71))]).then(function(e){return e[0]})},path:function(){return c.a.join(e,"../src/EventPage/EventPageContainer")},resolve:function(){return 71},chunkName:function(){return"src/EventPage/EventPageContainer"}}),d);b.template="../src/EventPage/EventPageContainer",t.default={"../src/pages/404.tsx":u,"../src/pages/about.tsx":l,"../src/pages/index.tsx":g,"../src/pages/new-layout-page.tsx":x,"../src/EventPage/EventPageContainer":b};var m="../src/pages/404.tsx"}.call(this,"/")},function(e,t,n){"use strict";n.d(t,"a",function(){return x});var a=n(23),c=n.n(a),i=n(24),r=n.n(i),o=n(25),s=n.n(o),p=n(26),f=n.n(p),d=n(27),u=n.n(d),l=n(0),g=n.n(l),x=(n(274),function(e){function t(){return c()(this,t),s()(this,f()(t).apply(this,arguments))}return u()(t,e),r()(t,[{key:"render",value:function(){return g.a.createElement("div",{className:"Share-box"},g.a.createElement("p",{className:"Share-box__text"},"Follow us:"),g.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?"},g.a.createElement("svg",{className:"Share-box__icon",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g.a.createElement("path",{d:"M17.5 0H2.5C1.12125 0 0 1.12125 0 2.5V17.5C0 18.8787 1.12125 20 2.5 20H10V13.125H7.5V10H10V7.5C10 5.42875 11.6788 3.75 13.75 3.75H16.25V6.875H15C14.31 6.875 13.75 6.81 13.75 7.5V10H16.875L15.625 13.125H13.75V20H17.5C18.8787 20 20 18.8787 20 17.5V2.5C20 1.12125 18.8787 0 17.5 0Z",fill:"white"}))),g.a.createElement("a",{target:"_blank",href:"https://twitter.com/intent/tweet?text=Look+what+I+found+out+here&url=https%3A%2F%2Fstg1.worldhistory.page%2Fp%2F"},g.a.createElement("svg",{className:"Share-box__icon",width:"21",height:"18",viewBox:"0 0 21 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g.a.createElement("path",{d:"M20.3333 2.79875C19.5895 3.125 18.797 3.34125 17.9708 3.44625C18.8208 2.93875 19.4695 2.14125 19.7745 1.18C18.982 1.6525 18.107 1.98625 17.1745 2.1725C16.422 1.37125 15.3495 0.875 14.1795 0.875C11.9095 0.875 10.082 2.7175 10.082 4.97625C10.082 5.30125 10.1095 5.61375 10.177 5.91125C6.76825 5.745 3.752 4.11125 1.72575 1.6225C1.372 2.23625 1.1645 2.93875 1.1645 3.695C1.1645 5.115 1.89575 6.37375 2.98575 7.1025C2.327 7.09 1.68075 6.89875 1.13325 6.5975C1.13325 6.61 1.13325 6.62625 1.13325 6.6425C1.13325 8.635 2.5545 10.29 4.41825 10.6712C4.0845 10.7625 3.72075 10.8062 3.34325 10.8062C3.08075 10.8062 2.81575 10.7913 2.567 10.7362C3.09825 12.36 4.60575 13.5538 6.39825 13.5925C5.00325 14.6838 3.232 15.3412 1.3145 15.3412C0.978252 15.3412 0.655752 15.3263 0.333252 15.285C2.1495 16.4563 4.302 17.125 6.62325 17.125C14.1683 17.125 18.2933 10.875 18.2933 5.4575C18.2933 5.27625 18.287 5.10125 18.2783 4.9275C19.092 4.35 19.7758 3.62875 20.3333 2.79875Z",fill:"white"}))))}}]),t}(g.a.Component))},,,,,,,,,function(e,t,n){n(73),n(126),e.exports=n(133)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var a={".":22,"./":22,"./index":22,"./index.js":22};function c(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=i,e.exports=c,c.id=128},,,,,,,,function(e,t,n){"use strict";n.r(t),function(e){var a=n(0),c=n.n(a),i=n(42),r=n.n(i),o=n(33);if(t.default=o.a,"undefined"!=typeof document){var s=document.getElementById("root"),p=s.hasChildNodes()?r.a.hydrate:r.a.render,f=function(e){p(c.a.createElement(e,null),s)};f(o.a),e&&e.hot&&e.hot.accept("./App",function(){f(o.a)})}}.call(this,n(137)(e))},,,,,,function(e,t,n){var a={"./albert-einstein@1x.png":143,"./alexander-the-great@1x.png":144,"./automobile@1x.png":145,"./caesar@1x.png":146,"./capitalism@1x.png":147,"./charles-darwin@1x.png":148,"./christianity@1x.png":149,"./crusades@1x.png":150,"./dante-alighieri@1x.png":151,"./dark-ages@1x.png":152,"./discovery-of-america@1x.png":153,"./firearms@1x.png":154,"./first-human-in-space@1x.png":155,"./french-revolution@1x.png":156,"./galileo@1x.png":157,"./giordano-bruno@1x.png":158,"./incandescent-light-bulb@1x.png":159,"./isaac-newton@1x.png":160,"./islam@1x.png":161,"./leonardo-da-vinci@1x.png":162,"./metropolitan-railway@1x.png":163,"./michael-faraday@1x.png":164,"./modern-computer@1x.png":165,"./napoleon@1x.png":166,"./nikola-copernicus@1x.png":167,"./nuclear-weapons@1x.png":168,"./omar-khayyam@1x.png":169,"./on-the-fabric-of-the-human-body@1x.png":170,"./printing-press@1x.png":171,"./public-tv@1x.png":172,"./pythagoras@1x.png":173,"./radio@1x.png":174,"./renaissance@1x.png":175,"./scientific-revolution@1x.png":176,"./soviet-union@1x.png":177,"./steam-engine@1x.png":178,"./steam-locomotive@1x.png":179,"./united-states@1x.png":180,"./view-from-the-window-at-le-gras@1x.png":181,"./william-shakespeare@1x.png":182,"./world-war-i@1x.png":183,"./world-war-ii@1x.png":184};function c(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=i,e.exports=c,c.id=142},function(e,t,n){e.exports=n.p+"static/e8d465a3d73c96f7b280435f8ebbe1d6.png"},function(e,t,n){e.exports=n.p+"static/51b1c6144455361904df0e6e66b19854.png"},function(e,t,n){e.exports=n.p+"static/eff3b8469fe9be08bc5fbacb2e257286.png"},function(e,t,n){e.exports=n.p+"static/c631ac169291a14e54a007089541d22e.png"},function(e,t,n){e.exports=n.p+"static/7303ded1f0e0eaedd15b8527086c34f4.png"},function(e,t,n){e.exports=n.p+"static/3b6659f3197a50d4ac64a26a23481e1a.png"},function(e,t,n){e.exports=n.p+"static/807dafeb2f8fa73da4d052632a980f6b.png"},function(e,t,n){e.exports=n.p+"static/2d597105febc4311a7d5b053c508e8c5.png"},function(e,t,n){e.exports=n.p+"static/96ecedb068bca7d0d133388f5f493ed9.png"},function(e,t,n){e.exports=n.p+"static/20fb3ca9a96b939f9b341777a9f23152.png"},function(e,t,n){e.exports=n.p+"static/da21a8d9aa63972c8fc585534098260f.png"},function(e,t,n){e.exports=n.p+"static/f267019313cadd714ec504aaa085ca43.png"},function(e,t,n){e.exports=n.p+"static/bbcf2e351e2a314cc4160b594e89abf2.png"},function(e,t,n){e.exports=n.p+"static/2289225323b454bf4c201bc18cf305e8.png"},function(e,t,n){e.exports=n.p+"static/11ed66da7f5d038e0a59d803472f9c5e.png"},function(e,t,n){e.exports=n.p+"static/ca19113a68effc93e409d3bd4f72eb64.png"},function(e,t,n){e.exports=n.p+"static/833128b08c52e3240a8f367cad1029b0.png"},function(e,t,n){e.exports=n.p+"static/2e5501a2164f5872a6b04d05c9d210d6.png"},function(e,t,n){e.exports=n.p+"static/5aae7a2fdf35c20ba7f19014ccd8bebd.png"},function(e,t,n){e.exports=n.p+"static/dbbac5e85b8ebf48f2180aac2328de36.png"},function(e,t,n){e.exports=n.p+"static/d690ccba1da3f939a1fc1bcab8f4455a.png"},function(e,t,n){e.exports=n.p+"static/043bece35c829730bbc9c995cc82457c.png"},function(e,t,n){e.exports=n.p+"static/0509fcd36e30e69a9a73916f91579c52.png"},function(e,t,n){e.exports=n.p+"static/856230bf8dcbee6f7b5e764aafd23d38.png"},function(e,t,n){e.exports=n.p+"static/27878f46bb8b620c6317d7a1cc54f94e.png"},function(e,t,n){e.exports=n.p+"static/8cba0190e36e0ea18dbe3e4763cda935.png"},function(e,t,n){e.exports=n.p+"static/bb4a43b625251e6ca84efafd1815d89a.png"},function(e,t,n){e.exports=n.p+"static/2cba496b3ddc26c234d23b9ea75d69c4.png"},function(e,t,n){e.exports=n.p+"static/04fa94f1f8eb1a306d623a0ec2757c54.png"},function(e,t,n){e.exports=n.p+"static/e7f64dcee41620aaf084aa17ab1e807f.png"},function(e,t,n){e.exports=n.p+"static/111d4fb2e6c6237554c7c886f2823759.png"},function(e,t,n){e.exports=n.p+"static/9667fb3abad07c6ebc7f5227145d21c2.png"},function(e,t,n){e.exports=n.p+"static/2ea9c9fefe9960a3f7161d665098477b.png"},function(e,t,n){e.exports=n.p+"static/bec3f8224cd1cbf34bdadfe172674172.png"},function(e,t,n){e.exports=n.p+"static/c9ac9d95a8734263ea06ff6aced42321.png"},function(e,t,n){e.exports=n.p+"static/a91bb9b29607517a2a339a4b2963f1ce.png"},function(e,t,n){e.exports=n.p+"static/a53ad298a8158d828db4e45c7ea624c1.png"},function(e,t,n){e.exports=n.p+"static/5e9e36687fd9e9dd4ef5bf32af5c573d.png"},function(e,t,n){e.exports=n.p+"static/1ccf47024754264f55c008ebc3706153.png"},function(e,t,n){e.exports=n.p+"static/3117c3a26c59c149b767033b728310bd.png"},function(e,t,n){e.exports=n.p+"static/c885d2c041d55b4d592774cfd3600bb9.png"},function(e,t,n){e.exports=n.p+"static/47664ea16dd7ae2a9d8a65101d793f08.png"},function(e,t,n){var a={"./albert-einstein@2x.png":186,"./alexander-the-great@2x.png":187,"./automobile@2x.png":188,"./caesar@2x.png":189,"./capitalism@2x.png":190,"./charles-darwin@2x.png":191,"./christianity@2x.png":192,"./crusades@2x.png":193,"./dante-alighieri@2x.png":194,"./dark-ages@2x.png":195,"./discovery-of-america@2x.png":196,"./firearms@2x.png":197,"./first-human-in-space@2x.png":198,"./french-revolution@2x.png":199,"./galileo@2x.png":200,"./giordano-bruno@2x.png":201,"./incandescent-light-bulb@2x.png":202,"./isaac-newton@2x.png":203,"./islam@2x.png":204,"./leonardo-da-vinci@2x.png":205,"./metropolitan-railway@2x.png":206,"./michael-faraday@2x.png":207,"./modern-computer@2x.png":208,"./napoleon@2x.png":209,"./nikola-copernicus@2x.png":210,"./nuclear-weapons@2x.png":211,"./omar-khayyam@2x.png":212,"./on-the-fabric-of-the-human-body@2x.png":213,"./printing-press@2x.png":214,"./public-tv@2x.png":215,"./pythagoras@2x.png":216,"./radio@2x.png":217,"./renaissance@2x.png":218,"./scientific-revolution@2x.png":219,"./soviet-union@2x.png":220,"./steam-engine@2x.png":221,"./steam-locomotive@2x.png":222,"./united-states@2x.png":223,"./view-from-the-window-at-le-gras@2x.png":224,"./william-shakespeare@2x.png":225,"./world-war-i@2x.png":226,"./world-war-ii@2x.png":227};function c(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=i,e.exports=c,c.id=185},function(e,t,n){e.exports=n.p+"static/38cd0575c93e3809c0149971653cdfca.png"},function(e,t,n){e.exports=n.p+"static/e612e0edddb42703c8b5f57acd858fa7.png"},function(e,t,n){e.exports=n.p+"static/598afda162a901b45e78e6d9a6f1867c.png"},function(e,t,n){e.exports=n.p+"static/2a87071080e56f0ba1ccc2ab3e5399cc.png"},function(e,t,n){e.exports=n.p+"static/cbb460110383ff20fdf769027964cc79.png"},function(e,t,n){e.exports=n.p+"static/9b7ea2a806348da48991338982e106a2.png"},function(e,t,n){e.exports=n.p+"static/01004946295f06d70d9e1e86b79685e6.png"},function(e,t,n){e.exports=n.p+"static/cca6637e7eccb614f96208e6f3fb602f.png"},function(e,t,n){e.exports=n.p+"static/0d065f31a79f937a24132553c34ca265.png"},function(e,t,n){e.exports=n.p+"static/6d564ab0ee3080ca265ab1bf8b6c4b99.png"},function(e,t,n){e.exports=n.p+"static/227e7c7fce79917c7549b9ec47dbc6a9.png"},function(e,t,n){e.exports=n.p+"static/b3390b6bd991579988981595b6682052.png"},function(e,t,n){e.exports=n.p+"static/e69e79cbe43d511c88b6d70b4795a92e.png"},function(e,t,n){e.exports=n.p+"static/7386ff19d1bcb12420b181ed98f5a4d0.png"},function(e,t,n){e.exports=n.p+"static/9fc9ba359a58784e0e0e01b6e01032ac.png"},function(e,t,n){e.exports=n.p+"static/68d40e6bb3c5c8e839ae78eef4867d30.png"},function(e,t,n){e.exports=n.p+"static/f888f94b26e77e16f29eef82b8416c4c.png"},function(e,t,n){e.exports=n.p+"static/91f68878cd551945619a5fac150ccfb1.png"},function(e,t,n){e.exports=n.p+"static/a79a50b1bfccc511faade0173bae79e8.png"},function(e,t,n){e.exports=n.p+"static/128ed0e60537385b21a6be31d902e0e0.png"},function(e,t,n){e.exports=n.p+"static/1970d3444ff196af5ef83c48de93c71f.png"},function(e,t,n){e.exports=n.p+"static/97b42e086310f8e4584eb5fbf45caa1c.png"},function(e,t,n){e.exports=n.p+"static/e9978080704edc9f604f020cb7c32689.png"},function(e,t,n){e.exports=n.p+"static/e5e8024d6fb8da826f2970241971929d.png"},function(e,t,n){e.exports=n.p+"static/ff143b3c02bb097a39dfc139036a74f4.png"},function(e,t,n){e.exports=n.p+"static/9de72dd3f5d91457d9c46f7d61c86a8f.png"},function(e,t,n){e.exports=n.p+"static/0cd4c88a22f08f2c531b064d14df54c7.png"},function(e,t,n){e.exports=n.p+"static/51258fe38f93e1f2729c69167c3baab3.png"},function(e,t,n){e.exports=n.p+"static/d5a3c127639ed0acf59bb774f42c9cfa.png"},function(e,t,n){e.exports=n.p+"static/5d946fecffdba3bd4b6c62f60c840da8.png"},function(e,t,n){e.exports=n.p+"static/bc0e394fe0b10f374a73ac63af0d33f5.png"},function(e,t,n){e.exports=n.p+"static/f509f01a91a811433dee1ed82231ed0c.png"},function(e,t,n){e.exports=n.p+"static/9889072a5de9ef5b7c5108bded6db3a0.png"},function(e,t,n){e.exports=n.p+"static/1f31df43a99e4f820f4eeb1ccc17811f.png"},function(e,t,n){e.exports=n.p+"static/1bb169d4a446919de847774472b45b28.png"},function(e,t,n){e.exports=n.p+"static/669cfdc59f61be7751366467b478a02b.png"},function(e,t,n){e.exports=n.p+"static/5dfebd926102017988b3ed334ec8e3d1.png"},function(e,t,n){e.exports=n.p+"static/9c4590f17b0a8752cd31e66cccfae417.png"},function(e,t,n){e.exports=n.p+"static/fec772828a2e8d14d6fadb3fdbe2d204.png"},function(e,t,n){e.exports=n.p+"static/19b9b6bc51f8cae4da68045dd33e93e5.png"},function(e,t,n){e.exports=n.p+"static/4ceffcb90ba4f925adc6f6e215cdaa9f.png"},function(e,t,n){e.exports=n.p+"static/fd7a607c5b09a1fa97f29ca64fd8f4bc.png"},function(e,t,n){var a={"./albert-einstein@3x.png":229,"./alexander-the-great@3x.png":230,"./automobile@3x.png":231,"./caesar@3x.png":232,"./capitalism@3x.png":233,"./charles-darwin@3x.png":234,"./christianity@3x.png":235,"./crusades@3x.png":236,"./dante-alighieri@3x.png":237,"./dark-ages@3x.png":238,"./discovery-of-america@3x.png":239,"./firearms@3x.png":240,"./first-human-in-space@3x.png":241,"./french-revolution@3x.png":242,"./galileo@3x.png":243,"./giordano-bruno@3x.png":244,"./incandescent-light-bulb@3x.png":245,"./isaac-newton@3x.png":246,"./islam@3x.png":247,"./leonardo-da-vinci@3x.png":248,"./metropolitan-railway@3x.png":249,"./michael-faraday@3x.png":250,"./modern-computer@3x.png":251,"./napoleon@3x.png":252,"./nikola-copernicus@3x.png":253,"./nuclear-weapons@3x.png":254,"./omar-khayyam@3x.png":255,"./on-the-fabric-of-the-human-body@3x.png":256,"./printing-press@3x.png":257,"./public-tv@3x.png":258,"./pythagoras@3x.png":259,"./radio@3x.png":260,"./renaissance@3x.png":261,"./scientific-revolution@3x.png":262,"./soviet-union@3x.png":263,"./steam-engine@3x.png":264,"./steam-locomotive@3x.png":265,"./united-states@3x.png":266,"./view-from-the-window-at-le-gras@3x.png":267,"./william-shakespeare@3x.png":268,"./world-war-i@3x.png":269,"./world-war-ii@3x.png":270};function c(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=i,e.exports=c,c.id=228},function(e,t,n){e.exports=n.p+"static/99b8f6808e117fdf1d9411ec2afff80e.png"},function(e,t,n){e.exports=n.p+"static/d4da5279494328d22eb70feea34a5999.png"},function(e,t,n){e.exports=n.p+"static/6d4466e2805857dbc2f1afc28cb9de20.png"},function(e,t,n){e.exports=n.p+"static/2a4784766714e16898ec98d7f7a05cef.png"},function(e,t,n){e.exports=n.p+"static/7923dfc6e0123db1827171347a207099.png"},function(e,t,n){e.exports=n.p+"static/d7d61fa56da630c2537daea7bd02693f.png"},function(e,t,n){e.exports=n.p+"static/764f1b23e9a9ce00d965a2ca342be5a0.png"},function(e,t,n){e.exports=n.p+"static/96cb35f13f6e0191885006cfb4962b1f.png"},function(e,t,n){e.exports=n.p+"static/a07780ddce58c6f897535267ae440401.png"},function(e,t,n){e.exports=n.p+"static/6c6350b49fa185fb58289cfe31e390fa.png"},function(e,t,n){e.exports=n.p+"static/b26c598f5079b3ac2136b628c8ee6229.png"},function(e,t,n){e.exports=n.p+"static/c03fa5387a142ec3151b6eeb17df4911.png"},function(e,t,n){e.exports=n.p+"static/1e2fd7456a32cbd84f750da2fc20b291.png"},function(e,t,n){e.exports=n.p+"static/fdfc46ab660a78868e23360614d4d565.png"},function(e,t,n){e.exports=n.p+"static/ec3d4ab66e7dac08cf8d86ec7fc589ef.png"},function(e,t,n){e.exports=n.p+"static/05c150ef87896756f4b672691ef91ed9.png"},function(e,t,n){e.exports=n.p+"static/91d6e15611ed5fd3a5fd88c6935934f6.png"},function(e,t,n){e.exports=n.p+"static/e145f311e979acf0fe69ed21ecd3a4f5.png"},function(e,t,n){e.exports=n.p+"static/f485bfb82be3e2c08bd20d1690c7c23f.png"},function(e,t,n){e.exports=n.p+"static/64313289cd2b4076f6e713f4510979ad.png"},function(e,t,n){e.exports=n.p+"static/f1da13f51fb59f0d37ecc6deaac2a404.png"},function(e,t,n){e.exports=n.p+"static/c8a05803b71104dea7e6bf6f5ba8ff4d.png"},function(e,t,n){e.exports=n.p+"static/a35e2146792d306fe3da2247cddd7e18.png"},function(e,t,n){e.exports=n.p+"static/2226c658547780a5f1619c82f1ea4803.png"},function(e,t,n){e.exports=n.p+"static/d43d6376919466cfca62da881ac6d987.png"},function(e,t,n){e.exports=n.p+"static/8d9722b8eeb04df9dc69ed30680b7419.png"},function(e,t,n){e.exports=n.p+"static/6dfaa185da149f28a8e9da03cdbf2e8b.png"},function(e,t,n){e.exports=n.p+"static/dcec872af4d14c7ecfe3be755d780c8a.png"},function(e,t,n){e.exports=n.p+"static/10c55f207ee6b1fa79494f3f734efba5.png"},function(e,t,n){e.exports=n.p+"static/eff69104494cde8151893112f52dcd5d.png"},function(e,t,n){e.exports=n.p+"static/e072ee7deb6ff421b573cc3c29cde0b8.png"},function(e,t,n){e.exports=n.p+"static/e9139d12a6a44ecefb761e83587d926f.png"},function(e,t,n){e.exports=n.p+"static/f1bd912d6da27a44aa3de43e2a746653.png"},function(e,t,n){e.exports=n.p+"static/bc067998dddd4b501b3423c58f4a10b2.png"},function(e,t,n){e.exports=n.p+"static/5b5b6710205001f6f374e048dfde7590.png"},function(e,t,n){e.exports=n.p+"static/7752c3bd38fc4110c3a102e3ab239c6a.png"},function(e,t,n){e.exports=n.p+"static/2eab6e370378cb372bda562e651cb1b1.png"},function(e,t,n){e.exports=n.p+"static/7406d67fdb6f0550e528b49a5b531664.png"},function(e,t,n){e.exports=n.p+"static/f9013ec063257b62017e68f0eaaa5e8e.png"},function(e,t,n){e.exports=n.p+"static/4785e7341385013a18fdc883691dea42.png"},function(e,t,n){e.exports=n.p+"static/4676e1c5ae5478542a4eb98ffa9e217a.png"},function(e,t,n){e.exports=n.p+"static/abd6d1fc93bc78bac9e58b4a3e2e53d5.png"}]);