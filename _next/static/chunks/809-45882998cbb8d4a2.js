(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{19952:function(e,t,r){"use strict";r.d(t,{u:function(){return b}});var n=r(67294),i=r(45697),l=r.n(i),u=r(98695),s=r(94184),a=r.n(s),p=r(95835),o=r(70917);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=function(e){var t=e.transparentBackground,r=void 0!==t&&t,i=e.language,l=void 0===i?p.k$:i,s=e.children,b=e.className,g=c(e,["transparentBackground","language","children","className"]),S=(0,n.useMemo)((function(){return(0,p.Es)(l)}),[l]),d=(0,n.useMemo)((function(){return"string"!==typeof s?[]:(0,u.highlight)(s,S)}),[s,S]),f=(0,n.useMemo)((function(){return(0,p.Al)(d,s)}),[d,s]),y=a()("euiCode",{"euiCode--transparentBackground":r},b);return(0,o.tZ)("code",m({className:y,"data-code-language":S},g),f)};b.propTypes={className:l().string,"aria-label":l().string,"data-test-subj":l().string,language:l().string,transparentBackground:l().bool}},13322:function(e,t,r){"use strict";r.d(t,{E:function(){return w}});var n=r(45697),i=r.n(n),l=r(67294),u=r(94184),s=r.n(u),a=r(99667),p=r(85058),o=r(95441),m=r(13161),c=r(63289),b=r(70709),g=r(70917);function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var f={incomplete:"euiStepNumber--incomplete",disabled:"euiStepNumber--disabled",loading:"euiStepNumber--loading",warning:"euiStepNumber--warning",danger:"euiStepNumber--danger",complete:"euiStepNumber--complete",current:null},y=((0,o.u)(f),function(e){var t=e.className,r=e.status,n=e.number,i=e.isHollow,u=e.titleSize,a=d(e,["className","status","number","isHollow","titleSize"]),o=function(e){var t=e.number,r=e.title,n=(0,c.l)("euiStepStrings.step","Step {number}: {title}",{number:t,title:r}),i=(0,c.l)("euiStepStrings.simpleStep","Step {number}",{number:t});return r?n:i}({number:n}),y=function(e){var t=e.number,r=e.title,n=(0,c.l)("euiStepStrings.complete","Step {number}: {title} is complete",{number:t,title:r}),i=(0,c.l)("euiStepStrings.simpleComplete","Step {number} is complete",{number:t});return r?n:i}({number:n}),v=function(e){var t=e.number,r=e.title,n=(0,c.l)("euiStepStrings.warning","Step {number}: {title} has warnings",{number:t,title:r}),i=(0,c.l)("euiStepStrings.simpleWarning","Step {number} has warnings",{number:t});return r?n:i}({number:n}),N=function(e){var t=e.number,r=e.title,n=(0,c.l)("euiStepStrings.errors","Step {number}: {title} has errors",{number:t,title:r}),i=(0,c.l)("euiStepStrings.simpleErrors","Step {number} has errors",{number:t});return r?n:i}({number:n}),h=function(e){var t=e.number,r=e.title,n=(0,c.l)("euiStepStrings.incomplete","Step {number}: {title} is incomplete",{number:t,title:r}),i=(0,c.l)("euiStepStrings.simpleIncomplete","Step {number} is incomplete",{number:t});return r?n:i}({number:n}),O=function(e){var t=e.number,r=e.title,n=(0,c.l)("euiStepStrings.disabled","Step {number}: {title} is disabled",{number:t,title:r}),i=(0,c.l)("euiStepStrings.simpleDisabled","Step {number} is disabled",{number:t});return r?n:i}({number:n}),j=function(e){var t=e.number,r=e.title,n=(0,c.l)("euiStepStrings.loading","Step {number}: {title} is loading",{number:t,title:r}),i=(0,c.l)("euiStepStrings.simpleLoading","Step {number} is loading",{number:t});return r?n:i}({number:n}),w=function(e){var t=e.number,r=e.title,n=(0,c.l)("euiStepStrings.current","Current step {number}: {title}",{number:t,title:r}),i=(0,c.l)("euiStepStrings.simpleCurrent","Current step is {number}",{number:t});return r?n:i}({number:n}),_=s()("euiStepNumber",r?f[r]:void 0,{"euiStepNumber-isHollow":i},t),Z="xs"===u?"s":"m",E=o;"incomplete"===r?E=h:"disabled"===r?E=O:"loading"===r?E=j:"current"===r&&(E=w);var z=(0,g.tZ)(l.Fragment,null,(0,g.tZ)(p.D,null,(0,g.tZ)("span",null,E)),(0,g.tZ)("span",{className:"euiStepNumber__number","aria-hidden":"true"},n));return"complete"===r?z=(0,g.tZ)(m.pH,{type:"check",className:"euiStepNumber__icon",size:Z,"aria-label":y}):"warning"===r?z=(0,g.tZ)(m.pH,{type:"alert",className:"euiStepNumber__icon",size:Z,"aria-label":v}):"danger"===r?z=(0,g.tZ)(m.pH,{type:"cross",className:"euiStepNumber__icon",size:Z,"aria-label":N}):"loading"===r&&(z=(0,g.tZ)(l.Fragment,null,(0,g.tZ)(p.D,null,(0,g.tZ)("span",null,E)),(0,g.tZ)(b.p,{className:"euiStepNumber__loader",size:"s"===Z?"l":"xl"}))),(0,g.tZ)("span",S({className:_},a),z)});function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function N(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}y.propTypes={status:i().any,number:i().number,isHollow:i().bool,titleSize:i().any,className:i().string,"aria-label":i().string,"data-test-subj":i().string};var h=function(e){var t=e.className,r=e.children,n=e.headingElement,i=void 0===n?"p":n,u=e.step,p=void 0===u?1:u,o=e.title,m=e.titleSize,c=void 0===m?"s":m,b=e.status,S=N(e,["className","children","headingElement","step","title","titleSize","status"]),d=s()("euiStep",{"euiStep--small":"xs"===c,"euiStep-isDisabled":"disabled"===b},t),f=s()("euiStep__circle",{"euiStepNumber--small":"xs"===c});return(0,g.tZ)("div",v({className:d},S),(0,g.tZ)("div",{className:"euiStep__titleWrapper"},(0,g.tZ)(y,{className:f,number:p,status:b,titleSize:c,isHollow:"incomplete"===b}),(0,g.tZ)(a.yR,{size:c,className:"euiStep__title"},(0,l.createElement)(i,null,o))),(0,g.tZ)("div",{className:"euiStep__content"},r))};function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},O.apply(this,arguments)}function j(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}h.propTypes={className:i().string,"aria-label":i().string,"data-test-subj":i().string,children:i().node.isRequired,headingElement:i().string,step:i().number,title:i().string.isRequired,status:i().any,titleSize:i().any};var w=function(e){var t=e.className,r=e.firstStepNumber,n=void 0===r?1:r,i=e.headingElement,l=void 0===i?"p":i,u=e.titleSize,a=e.steps,p=j(e,["className","firstStepNumber","headingElement","titleSize","steps"]),o=s()("euiSteps",t);return(0,g.tZ)("div",O({className:o},p),function(e,t,r,n){return e.map((function(e,i){var l=e.className,u=e.children,s=e.title,a=e.status,p=j(e,["className","children","title","status"]);return(0,g.tZ)(h,O({className:l,key:i,headingElement:r,step:t+i,title:s,titleSize:n,status:a},p),u)}))}(a,n,l,u))};w.propTypes={steps:i().arrayOf(i().any.isRequired).isRequired,firstStepNumber:i().number,headingElement:i().string,titleSize:i().any,className:i().string,"aria-label":i().string,"data-test-subj":i().string}},11163:function(e,t,r){e.exports=r(90387)}}]);