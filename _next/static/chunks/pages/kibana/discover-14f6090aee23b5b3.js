(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1426],{590:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kibana/discover",function(){return t(30621)}])},17816:function(e,n,t){"use strict";var r=t(35944),i=t(5741),o=t(30986);n.Z=function(){var e=(0,o.Fg)(),n=e.colorMode,t=e.setColorMode,a="dark"===n;return(0,r.tZ)(i.N4,{color:"ghost",iconType:a?"sun":"moon","aria-label":"Change theme",onClick:function(){t(a?"light":"dark")}})}},17146:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(35944),i=t(67294),o=t(2296),a=t(3124),l=t(1541),c=t(13161),u=t(22902),s=t(75831),f=t(42207),d=t(5331),p=t(49431),b=t(25587),m=t(28682),h=t(87158),g=t(13311),v=t.n(g),y=t(30998),Z=t.n(y),O=t(70917),w=t(17816);function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){k(e,n,t[n])}))}return e}function S(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function P(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(){var e,n,t=(e=["\n        margin-top: 96px; // two top navs\n        min-height: calc(100vh - 96px);\n        display: flex;\n      "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return N=function(){return t},t}var T=[{label:"Home",iconType:"home",isActive:!0,"aria-current":!0,href:"/kibana",pinnable:!1}],C=[{label:"Discover",href:"/kibana/discover"},{label:"Dashboard",href:"/kibana/dashboards"}],z=function(){var e=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map((function(e){var t=e.pinned,r=S(e,["pinned"]);return x({pinned:!!n&&t},r)}))},n=(0,i.useState)(!1),t=n[0],g=n[1],y=(0,i.useState)(["Kibana"]),j=y[0],k=y[1],z=(0,i.useState)([]),I=z[0],A=z[1],_=(0,o.P)({prefix:"collapsibleNav"}),E=[(0,r.BX)(a.H,{ownFocus:!1,css:(0,O.iv)(N()),id:_,"aria-label":"Main navigation",isOpen:t,button:(0,r.tZ)(l.j,{"aria-label":"Toggle main navigation",onClick:function(){return g(!t)},children:(0,r.tZ)(c.pH,{type:"menu",size:"m","aria-hidden":"true"})}),onClose:function(){return g(!1)},children:[(0,r.tZ)(u.J,{grow:!1,style:{flexShrink:0},children:(0,r.tZ)(s.T,{isCollapsible:!1,background:"dark",children:(0,r.tZ)(f.n,{color:"ghost",maxWidth:"none",gutterSize:"none",size:"s",listItems:[{label:"Manage deployment",href:"#",iconType:"logoCloud",iconProps:{color:"ghost"}}]})})}),(0,r.tZ)(u.J,{grow:!1,children:(0,r.tZ)(s.T,{background:"light",children:(0,r.tZ)(d.O,{"aria-label":"Pinned links",listItems:e(T).concat(e(I,!0)),unpinTitle:function(e){return"Unpin ".concat(e.label)},onPinClick:function(e){var n=Z()(I,{label:e.label});if(n>-1){e.pinned=!1;var t=I;t.splice(n,1),A(P(t)),localStorage.setItem("pinnedItems",JSON.stringify(t))}},maxWidth:"none",color:"text",gutterSize:"none",size:"s"})})}),(0,r.tZ)(p.Gt,{margin:"none"}),(0,r.tZ)(u.J,{className:"eui-yScroll",children:(0,r.tZ)(s.T,{title:(0,r.tZ)("a",{className:"eui-textInheritColor",href:"#/navigation/collapsible-nav",onClick:function(e){return e.stopPropagation()},children:"Analytics"}),buttonElement:"div",iconType:"logoKibana",isCollapsible:!0,initialIsOpen:j.includes("Kibana"),onToggle:function(e){return function(e,n){if(n){var t=j.includes(n);if(e){if(t)return;j.push(n)}else{var r=j.indexOf(n);r>-1&&j.splice(r,1)}k(P(j)),localStorage.setItem("openNavGroups",JSON.stringify(j))}}(e,"Kibana")},children:(0,r.tZ)(d.O,{"aria-label":"Kibana",listItems:e(C),pinTitle:function(e){return"Pin ".concat(e.label," to top")},onPinClick:function(e){if(e&&!v()(I,{label:e.label})){e.pinned=!0;var n=I?I.concat(e):[e];A(n),localStorage.setItem("pinnedItems",JSON.stringify(n))}},maxWidth:"none",color:"subdued",gutterSize:"none",size:"s"})})})]})];return(0,r.BX)(r.HY,{children:[(0,r.tZ)(b.j,{theme:"dark",position:"fixed",sections:[{items:[(0,r.tZ)(m.N,{iconType:"logoElastic",href:"".concat("/next-eui-starter"),children:"Elastic"},"ops")],borders:"none"},{items:[(0,r.tZ)(w.Z,{},(0,o.P)()),(0,r.tZ)(l.j,{"aria-label":"Account menu",children:(0,r.tZ)(h.Zs,{name:"John Username",size:"s"})},(0,o.P)())],borders:"none"}]}),(0,r.tZ)(b.j,{position:"fixed",sections:[{items:E,borders:"right"},{items:[(0,r.tZ)(l.j,{"aria-label":"Account menu",children:(0,r.tZ)(h.Zs,{type:"space",name:"Default Space",size:"s"})},(0,o.P)())],breadcrumbs:[{text:"Home"}],borders:"right"}]})]})};function I(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function A(){var e=I(["\n    padding-top: 96px; // two top navs\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  "]);return A=function(){return e},e}function _(){var e=I(["\n    display: flex;\n    flex-flow: column nowrap;\n    flex-grow: 1;\n    z-index: 0;\n    position: relative;\n  "]);return _=function(){return e},e}var E=function(e){var n=e.children,t={mainWrapper:(0,O.iv)(A()),contentWrapper:(0,O.iv)(_())};return(0,r.BX)("div",{css:t.mainWrapper,children:[(0,r.tZ)(z,{}),(0,r.tZ)("div",{css:t.contentWrapper,children:n})]})}},30621:function(e,n,t){"use strict";t.r(n);var r=t(35944),i=t(41664),o=t(82080),a=t(27125),l=t(55670),c=t(17146);n.default=function(){return(0,r.tZ)(c.Z,{children:(0,r.tZ)(o.g,{pageHeader:{pageTitle:"Discover"},children:(0,r.BX)(a.a,{children:[(0,r.tZ)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a erat sed arcu imperdiet eleifend eu vel ante. Nam dapibus lacus id efficitur luctus. Nunc vitae viverra erat, at euismod metus. Nam nec nulla ornare, aliquam arcu in, luctus diam. Phasellus convallis lorem fringilla, dapibus lectus in, pretium dui. Pellentesque massa nulla, tempus ut elit at, scelerisque commodo eros. Proin interdum libero aliquam, volutpat justo ut, posuere nulla."}),(0,r.tZ)(i.default,{href:"/kibana/",passHref:!0,children:(0,r.tZ)(l.p,{color:"primary",children:"Go to Kibana home"})})]})})})}}},function(e){e.O(0,[1803,8275,2080,6447,3987,9774,2888,179],(function(){return n=590,e(e.s=n);var n}));var n=e.O();_N_E=n}]);