(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(e,t,a){"use strict";var n=a(47),r=a.n(n),l=a(0),o=a.n(l),c=(new Date).getFullYear(),s=(a(131),a(18)),i=function(e){var t,a=e.depth,n=e.bubble,r=e.entry,l=e.baseRowLength,i=10*Math.max(1,r.to-r.from),m=(t=r.to,10*(c-("number"==typeof t?t:t.year()))),u=8*(.5+a),h=8*(l-a)+40+90*n;return o.a.createElement("div",{id:r.name,className:"Card"},o.a.createElement("div",{className:"Card__Range",style:{left:m,bottom:u,width:i}}),o.a.createElement("div",{className:"Card__DashedLine",style:{height:h,left:m,bottom:u}}),o.a.createElement("div",{className:"Card__Entry",style:{bottom:u+h,left:m}},o.a.createElement("div",{className:"Card__Box"},o.a.createElement(s.Link,{to:"/p/"+r.name,className:"Card__ImgWrapper"},o.a.createElement("img",{className:"Card__image",alt:r.name+" representation",src:r.imageUrl})),o.a.createElement("div",{className:"Card__Summary"},o.a.createElement("h2",{className:"Card__Title"},o.a.createElement(s.Link,{to:"/p/"+r.name},r.title)),o.a.createElement("div",{className:"Card__Date"},r.subtitle),r.short&&o.a.createElement("div",{className:"Card__Description"},r.short)))))};a(132);function m(e,t,a,n){return e>=a&&e<=n||t>=a&&t<=n}var u=function(e){var t,a,n=e.from,l=e.to,c=e.data.entries;c.sort(function(e,t){return t.to-e.to}),(t=console).log.apply(t,r()(c));var s,u,h=[],d=!0,p=!1,f=void 0;try{e:for(var v,y=c[Symbol.iterator]();!(d=(v=y.next()).done);d=!0){for(var g=v.value,E=h.length-1;E>=0;E--)for(var _=h[E],b=0;b<_.length;b++){var N=_[b];if(u=N,m((s=g).from,s.to,u.from,u.to)){E===h.length-1?(g.depth=h.length,h.push([g])):(g.depth=E+1,h[E+1].push(g));continue e}}h.length?(g.depth=0,h[0].push(g)):(g.depth=0,h.push([g]))}}catch(I){p=!0,f=I}finally{try{d||null==y.return||y.return()}finally{if(p)throw f}}c.sort(function(e,t){return e.to-t.to}),(a=console).log.apply(a,r()(c));var C,D,w,k=[],S=!0,R=!1,P=void 0;try{e:for(var L,x=c[Symbol.iterator]();!(S=(L=x.next()).done);S=!0){var M=L.value;t:for(var B=0;B<k.length;B++){for(var j=k[B],J=0;J<j.length;J++){var O=j[J];if(C=M.to,D=O.to,m(C-(w=50),C,D-w,D))continue t;if(M.to<O.to){j.splice(J+1,0,M),M.bubbleDepth=B,M.rightDepth=O.depth;continue e}}j.push(M),M.bubbleDepth=B,M.rightDepth=0;continue e}k.push([M]),M.bubbleDepth=k.length-1,M.rightDepth=0}}catch(I){R=!0,P=I}finally{try{S||null==x.return||x.return()}finally{if(R)throw P}}var U=Math.floor(l/100),A=Math.ceil(n/100),F=new Array(U-A).fill(void 0).map(function(e,t){return{name:100*(U-t),century:U-t,years:100}});return n%100&&F.push({name:100*(A-1),century:A-1,years:n%100}),l%100&&F.unshift({name:l,century:U+1,years:l%100}),o.a.createElement("div",{className:"Scales"},o.a.createElement("div",{className:"Scales__Events"},c.map(function(e){return o.a.createElement(i,{key:e.name,entry:e,depth:e.depth,bubble:e.bubbleDepth,baseRowLength:h.length})})),o.a.createElement("div",{className:"Scales__Centuries"},F.map(function(e){var t=e.name,a=""+t;return o.a.createElement("div",{key:"Century"+e.century,id:a,className:"Scales__Century",style:{flexBasis:10*e.years}},o.a.createElement("a",{href:"#"+a},t))})))},h=(a(133),a(15));a.d(t,"a",function(){return d});var d=function(e){var t=Object(h.useSiteData)().historyData;return o.a.createElement("section",{className:"RootPage"},e.children&&o.a.createElement("div",{className:"RootPage__Subpage"},e.children),o.a.createElement("div",{className:"RootPage__Contents"},o.a.createElement("section",{className:"RootPage__Body"},o.a.createElement("div",{className:"RootPage__Scales"},o.a.createElement(u,{data:t,from:Math.min.apply(Math,r()(t.entries.map(function(e){return e.to}))),to:c})))))}},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a(145),c=(a(134),a(18)),s=a(48),i=a.n(s),m=a(49),u=a.n(m),h=a(50),d=a.n(h),p=a(51),f=a.n(p),v=a(52),y=a.n(v),g=a(153),E=a.n(g),_=function(e){function t(){return i()(this,t),d()(this,f()(t).apply(this,arguments))}return y()(t,e),u()(t,[{key:"render",value:function(){return r.a.createElement(E.a,{source:this.props.value})}}]),t}(n.Component),b=function(e){var t=e.pageData,a=t.entry,n=t.content;return r.a.createElement("div",{className:"EventPage"},r.a.createElement(c.Link,{className:"EventPage__Close",to:"/"},"×"),r.a.createElement("h1",null,a.title," ",r.a.createElement("a",{target:"_blank",href:"https://github.com/onepagehistory/onepagehistory/tree/dev/src/data/entries/".concat(a.name,".md")},"edit")),r.a.createElement("h6",null,a.subtitle),r.a.createElement(_,{value:n}),r.a.createElement("a",{target:"_blank",href:a.wikiUrl},"[wikipedia]"))};t.default=function(){var e=Object(l.useRouteData)();return r.a.createElement(o.a,null,r.a.createElement(b,{pageData:e}))}}}]);