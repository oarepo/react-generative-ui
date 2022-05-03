"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{4832:function(e,n,t){t.d(n,{Z:function(){return V}});var r,a=t(7294),i=t(7378),o=i.createContext({}),l=t(9729),c=t.n(l),u=t(7206),s=t.n(u),m=t(5389),p=t.n(m),d=function(e,n){if(e){var t=(m=function(e){var n=i.useContext(o);return s()(e)?c()(n,e,""):e.path||e.default?c()(n,e.path||"",e.default||""):void 0},{childrenData:m(u=e),propsData:s()(u)?{}:p()(u.props,(function(e){return m(e)}))}),r=t.childrenData,a=t.propsData,l=Object.assign({},n,a);return r&&n&&n.children?l.children=r:r&&n&&n.content?l.content=r:r&&(l.children=r),l}var u,m;return n},f=t(7462),v=t(3366),h=["title","titleId"];function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)}function b(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var E=function(e){var n=e.title,t=e.titleId,a=b(e,h);return i.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"#a6ce39","aria-labelledby":t},a),n?i.createElement("title",{id:t},n):null,r||(r=i.createElement("path",{d:"M294.75 188.19h-45.92V342h47.47c67.62 0 83.12-51.34 83.12-76.91 0-41.64-26.54-76.9-84.67-76.9zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-80.79 360.76h-29.84v-207.5h29.84zm-14.92-231.14a19.57 19.57 0 1 1 19.57-19.57 19.64 19.64 0 0 1-19.57 19.57zM300 369h-81V161.26h80.6c76.73 0 110.44 54.83 110.44 103.85C410 318.39 368.38 369 300 369z"})))},y=t(5773),O=["identifier","scheme"],Z=t(5504),w=["separator"],k=t(3927),C=t(7429),j=t.n(C),x=t(8052),I=t.n(x),z=["component"],F=function(e){var n=e.component,t=(0,v.Z)(e,z);return i.createElement(i.Fragment,null,i.createElement(n,t))},S=t(7653),U=function(e){var n,t=e.config,r=e.renderUIFragment,a=t.component,o=t.items,l=t.props,c=t.data,u=l||{},s=u.item,m=u.separator,p=d(c),f=o||(null==p||null==(n=p.children)?void 0:n.map((function(e){return n=e,Object.assign({},s,{props:Object.assign({},(null==s?void 0:s.props)||{},{children:n})});var n})))||[],v=p||{};return"horizontal-list"===a&&(v.horizontal=!0),m&&(v.divided=!0),i.createElement(S.Z,v,null==f?void 0:f.map((function(e,n){return i.createElement(S.Z.Item,{key:n},r(e))})))},D=t(2013),P=t.n(D),R=t(928),_={authority:function(e){var n=e.config,t=e.renderUIFragment,r=n.data,a=n.props,o=a,l=o.fullNameComponent,c=void 0===l?"span":l,u=o.identifierComponent,s=void 0===u?"authority-identifier":u,m=o.roleComponent,p=void 0===m?"span":m,f=d(r,a),v=null==f?void 0:f.children,h=v.authorityIdentifiers,g=void 0===h?[]:h,b=v.fullName,E=v.role,y=void 0===E?void 0:E,O={component:c,props:Object.assign({},f,{children:[b]})},Z={component:p,props:Object.assign({},f,{children:["("+y+")"]})};return i.createElement(i.Fragment,null,t(O,"name"),g.map((function(e,n){return t((r=e,{component:s,props:Object.assign({},f,r)}),"identifier-"+n);var r})),y&&t(Z,"role"))},"authority-identifier":function(e){var n=e.config.props,t=n.identifier,r=n.scheme,a=(0,v.Z)(n,O);if("orcid"===r.toLowerCase()){var o=t.startsWith("https://orcid.org")?t:"https://orcid.org/"+t;return i.createElement("a",(0,f.Z)({href:o,target:"_blank"},a),i.createElement("img",{alt:"ORCID iD",src:E,style:{width:"16px",display:"inline-block"}}))}return i.createElement("a",(0,f.Z)({href:r+":"+t,target:"_blank"},a),i.createElement(y.Z,(0,f.Z)({link:!0,name:"id card"},a)))},columns:function(e){var n,t=e.config,r=e.renderUIFragment,a=t.props,o=t.items;return(null==o?void 0:o.length)&&i.createElement(Z.Z,(0,f.Z)({},a,{columns:o.length}),null==(n=t.items)?void 0:n.map((function(e,n){return r(e,n)})))||i.createElement(Z.Z,a)},column:function(e){var n=e.config,t=e.renderUIFragment,r=n.items,a=n.props;return i.createElement(Z.Z.Column,a,null==r?void 0:r.map((function(e,n){return i.createElement(Z.Z.Row,{key:n},t(e))})))},row:function(e){var n=e.config,t=e.renderUIFragment,r=n.props,a=n.items,o=r||{},l=o.separator,c=(0,v.Z)(o,w);return i.createElement(Z.Z.Row,c,null==a?void 0:a.map((function(e,n){return i.createElement(i.Fragment,{key:n},t(e,n),n<a.length-1&&(l||" "))})))},list:U,raw:function(e){var n=e.config,t=n.data,r=n.props,a=d(t,r);return i.createElement(i.Fragment,a,null==a?void 0:a.children)},"horizontal-list":U,"truncated-text":function(e){var n,t=e.config,r=t.data,a=t.props,o=d(r,a),l=null==o||null==(n=o.children)?void 0:n.toString(),c=i.useState(!1),u=c[0],s=c[1],m=o,p=m.lines,v=void 0===p?1:p,h=m.ellipsis,g=void 0===h?"\u2026":h,b=m.expandToggle,E=void 0===b?{basic:!0,size:"mini"}:b,y=i.createElement(R.Z,(0,f.Z)({onClick:function(){s(!u)}},E),"Show ",u?"less":"more");return u&&i.createElement("p",null,l,y)||i.createElement(P(),{line:v,truncateText:g,text:l,textTruncateChild:y})},_fallback:function(e){var n=e.config,r=n.component,a=n.props,o=n.data,l=d(o,a),u=i.lazy((function(){return t.e(645).then(t.bind(t,3645)).then((function(e){return{default:c()(e,I()(j()(r)))||F}}))}));return i.createElement(i.Suspense,{fallback:i.createElement(k.Z,null,i.createElement(k.Z.Line,{length:"very short"}))},i.createElement(u,(0,f.Z)({},l,{component:r})))}},M=i.createContext(_),N=t(3180),T=t.n(N),L=function e(n,t){var r=n.props,a=n.component,o=T()(r,(function(e,n){return"class"===n?"className":n})),l={renderUIFragment:e,config:Object.assign({},n,{props:o})};return i.createElement(M.Consumer,null!=t&&{key:t},(function(e){return function(e,n,t){var r=c()(e,n,e._fallback),a=i.memo(r);return i.createElement(a,t)}(e,a,l)}))},V=Object.assign({React:a},a,{GeneratedUI:function(e){var n=e.config,t=e.data,r=e.components,a=Object.assign({},r,_);return i.createElement(M.Provider,{value:a},i.createElement(o.Provider,{value:t},null==n?void 0:n.map((function(e,n){return L(e,n)}))))}})}}]);