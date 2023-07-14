"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1249],{80685:function(e,n,r){r.d(n,{BY:function(){return i},Bq:function(){return c},MV:function(){return o},OZ:function(){return t},Rr:function(){return a},Tb:function(){return l},om:function(){return u},si:function(){return s},tE:function(){return f}});var t=2,o=52.1429,u=.0025,i=.0017,a=1619136e3,c=86400,l=3600,s=10,f=[]},77344:function(e,n,r){r.d(n,{jf:function(){return w},l4:function(){return g}});var t=r(34051),o=r.n(t),u=r(28687),i=r(67294),a=r(27429),c=r(58145),l=r(68567),s=r(87534),f=r(48229),v=r(81135);function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function p(e,n,r,t,o,u,i){try{var a=e[u](i),c=a.value}catch(l){return void r(l)}a.done?n(c):Promise.resolve(c).then(t,o)}function m(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var u=e.apply(n,r);function i(e){p(u,t,o,i,a,"next",e)}function a(e){p(u,t,o,i,a,"throw",e)}i(void 0)}))}}function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,u=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(u.push(t.value),!n||u.length!==n);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return u}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return d(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(){var e,n,r=(e=["\n      query pools {\n        now: ","\n        oneDayAgo: ","\n        twoDaysAgo: ","\n        oneWeekAgo: ","\n        twoWeeksAgo: ","\n      }\n    "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return y=function(){return r},r}var k=function(e,n){var r=e?"block: {number: ".concat(e,"}"):"",t='["'.concat(n.join('","'),'"]');return"pairs(\n    where: { id_in: ".concat(t," }\n    ").concat(r,"\n    orderBy: trackedReserveBNB\n    orderDirection: desc\n  ) {\n    id\n    reserve0\n    reserve1\n    reserveUSD\n    volumeUSD\n    token0Price\n    token1Price\n    token0 {\n      id\n      symbol\n      name\n    }\n    token1 {\n      id\n      symbol\n      name\n    }\n  }")},w=function(){var e=m(o().mark((function e(n,r,t,i,c){var l,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=(0,u.gql)(y(),k(null,c),k(n,c),k(r,c),k(t,c),k(i,c)),e.next=4,a.dQ.request(l);case 4:return s=e.sent,e.abrupt("return",{data:s,error:!1});case 8:return e.prev=8,e.t0=e.catch(0),console.error("Failed to fetch pool data",e.t0),e.abrupt("return",{error:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,r,t,o,u){return e.apply(this,arguments)}}(),g=function(e){return e?e.reduce((function(e,n){var r=n.volumeUSD,t=n.reserveUSD,o=n.reserve0,u=n.reserve1,i=n.token0Price,a=n.token1Price;return e[n.id]=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){h(e,n,r[n])}))}return e}({},n,{volumeUSD:parseFloat(r),reserveUSD:parseFloat(t),reserve0:parseFloat(o),reserve1:parseFloat(u),token0Price:parseFloat(i),token1Price:parseFloat(a)}),e}),{}):{}};n.ZP=function(e){var n=(0,i.useState)({error:!1}),r=n[0],t=n[1],u=b((0,s.z)(),4),a=u[0],d=u[1],p=u[2],h=u[3],y=(0,f.Z)([a,d,p,h]),k=y.blocks,S=y.error,D=b(null!==k&&void 0!==k?k:[],4),P=D[0],O=D[1],F=D[2],U=D[3];return(0,i.useEffect)((function(){var n=function(){var n=m(o().mark((function n(){var r,u,i,a,s,f,d,p,m;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w(P.number,O.number,F.number,(null===U||void 0===U?void 0:U.number)||0,e);case 2:r=n.sent,u=r.error,i=r.data,u?t({error:!0}):(a=g(null===i||void 0===i?void 0:i.now),s=g(null===i||void 0===i?void 0:i.oneDayAgo),f=g(null===i||void 0===i?void 0:i.twoDaysAgo),d=g(null===i||void 0===i?void 0:i.oneWeekAgo),p=g(null===i||void 0===i?void 0:i.twoWeeksAgo),m=e.reduce((function(e,n){var r=a[n],t=s[n],o=f[n],u=d[n],i=p[n],m=b((0,c.T)(null===r||void 0===r?void 0:r.volumeUSD,null===t||void 0===t?void 0:t.volumeUSD,null===o||void 0===o?void 0:o.volumeUSD),2),h=m[0],y=m[1],k=b((0,c.T)(null===r||void 0===r?void 0:r.volumeUSD,null===u||void 0===u?void 0:u.volumeUSD,null===i||void 0===i?void 0:i.volumeUSD),2),w=k[0],g=k[1],S=r?r.reserveUSD:0,D=(0,v.Y)(null===r||void 0===r?void 0:r.reserveUSD,null===t||void 0===t?void 0:t.reserveUSD),P=r?r.reserve0:0,O=r?r.reserve1:0,F=(0,l.z)(h,w,S),U=F.totalFees24h,x=F.totalFees7d,j=F.lpFees24h,A=F.lpFees7d,E=F.lpApr7d;return r&&(e[n]={address:n,token0:{address:r.token0.id,name:r.token0.name,symbol:r.token0.symbol},token1:{address:r.token1.id,name:r.token1.name,symbol:r.token1.symbol},token0Price:r.token0Price,token1Price:r.token1Price,volumeUSD:h,volumeUSDChange:y,volumeUSDWeek:w,volumeUSDChangeWeek:g,totalFees24h:U,totalFees7d:x,lpFees24h:j,lpFees7d:A,lpApr7d:E,liquidityUSD:S,liquidityUSDChange:D,liquidityToken0:P,liquidityToken1:O}),e}),{}),t({data:m,error:!1}));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),r=(null===P||void 0===P?void 0:P.number)&&(null===O||void 0===O?void 0:O.number)&&(null===F||void 0===F?void 0:F.number);e.length>0&&r&&!S&&n()}),[e,P,O,F,U,S]),r}},17134:function(e,n,r){r.d(n,{d:function(){return u}});var t=r(92077),o=r.n(t),u=function(e,n){var r=n||{notation:"compact"},t=r.notation,u=void 0===t?"compact":t,i=r.displayThreshold,a=r.tokenPrecision,c=r.isInteger;if(0===e)return c?"0":"0.00";if(!e)return"-";if(i&&e<i)return"<".concat(i);if(e<1&&!a)return e.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/)[0];var l=2;a&&(l=e<1?3:2);var s="0.".concat("0".repeat(l),"a");"standard"===u&&(s="0,0.".concat("0".repeat(l))),c&&e<1e3&&(s="0");var f=parseFloat(e.toFixed(l));return o()(f).format(s).toUpperCase()}},51039:function(e,n,r){r.d(n,{z:function(){return p}});var t=r(34051),o=r.n(t),u=r(75472),i=r.n(u),a=r(28687),c=r(9364),l=r(4034);function s(e,n,r,t,o,u,i){try{var a=e[u](i),c=a.value}catch(l){return void r(l)}a.done?n(c):Promise.resolve(c).then(t,o)}function f(){var e,n,r=(e=["query blocks {\n    ","\n  }"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return f=function(){return r},r}var v=function(e){return e.map((function(e){return"t".concat(e,":blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ").concat(e,", timestamp_lt: ").concat(e+600," }) {\n      number\n    }")}))},d=function(e){return(0,a.gql)(f(),e)},p=function(){var e,n=(e=o().mark((function e(n){var r,t,u,a,s,f,p,m,h,b,y=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=y.length>1&&void 0!==y[1]?y[1]:"desc",t=y.length>2&&void 0!==y[2]?y[2]:500,0!==(null===n||void 0===n?void 0:n.length)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,(0,c.L)(d,v(n),l.I0,t);case 5:if(u=e.sent,a=[],!u){e.next=26;break}for(s=!0,f=!1,p=void 0,e.prev=9,m=Object.keys(u)[Symbol.iterator]();!(s=(h=m.next()).done);s=!0)b=h.value,u[b].length>0&&a.push({timestamp:b.split("t")[1],number:parseInt(u[b][0].number,10)});e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),f=!0,p=e.t0;case 17:e.prev=17,e.prev=18,s||null==m.return||m.return();case 20:if(e.prev=20,!f){e.next=23;break}throw p;case 23:return e.finish(20);case 24:return e.finish(17);case 25:return e.abrupt("return",i()(a,(function(e){return e.number}),r));case 26:return e.abrupt("return",a);case 27:case"end":return e.stop()}}),e,null,[[9,13,17,25],[18,,20,24]])})),function(){var n=this,r=arguments;return new Promise((function(t,o){var u=e.apply(n,r);function i(e){s(u,t,o,i,a,"next",e)}function a(e){s(u,t,o,i,a,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}()},58145:function(e,n,r){r.d(n,{T:function(){return o}});var t=r(81135),o=function(e,n,r){var o=(0,t.D)(e,n),u=(0,t.D)(n,r);return[o,(0,t.Y)(o,u)]}},87534:function(e,n,r){r.d(n,{z:function(){return a}});var t=r(99982),o=r(18717),u=r(7069),i=r(77982),a=function(){var e=1e3*(0,t.Z)(new Date);return[(0,t.Z)((0,o.Z)((0,u.default)(e,1))),(0,t.Z)((0,o.Z)((0,u.default)(e,2))),(0,t.Z)((0,o.Z)((0,i.default)(e,1))),(0,t.Z)((0,o.Z)((0,i.default)(e,2)))]}},68567:function(e,n,r){r.d(n,{z:function(){return o}});var t=r(80685),o=function(e,n,r){var o=e*t.om,u=n*t.om,i=e*t.BY,a=n*t.BY,c=r>0?n*t.BY*t.MV*100/r:0;return{totalFees24h:o,totalFees7d:u,lpFees24h:i,lpFees7d:a,lpApr7d:c!==1/0?c:0}}},27429:function(e,n,r){r.d(n,{dQ:function(){return a},vA:function(){return i}});var t=r(4034),o=r(28687),u=r(34155),i=function(e){if(e===t.JY)return{"X-Sf":u.env.NEXT_PUBLIC_SF_HEADER||window.sfHeader}},a=new o.GraphQLClient(t.JY,{headers:i(t.JY)});new o.GraphQLClient(t.JY,{headers:{"X-Sf":u.env.SF_HEADER},timeout:5e3}),new o.GraphQLClient("https://graphql.bitquery.io",{headers:{"X-API-KEY":u.env.BIT_QUERY_HEADER},timeout:5e3})},94224:function(e,n){n.Z=function(e,n,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e4;return Promise.race([r?e.request(n,r):e.request(n),new Promise((function(e,n){setTimeout((function(){n(new Error("Request timed out after ".concat(t," milliseconds")))}),t)}))])}},48229:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(34051),o=r.n(t),u=r(67294),i=r(51039);function a(e,n,r,t,o,u,i){try{var a=e[u](i),c=a.value}catch(l){return void r(l)}a.done?n(c):Promise.resolve(c).then(t,o)}function c(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var u=e.apply(n,r);function i(e){a(u,t,o,i,c,"next",e)}function c(e){a(u,t,o,i,c,"throw",e)}i(void 0)}))}}var l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,t=(0,u.useState)(),a=t[0],l=t[1],s=(0,u.useState)(!1),f=s[0],v=s[1],d=JSON.stringify(e),p=a?JSON.stringify(a):void 0;return(0,u.useEffect)((function(){var e=function(){var e=c(o().mark((function e(){var t,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(d),e.next=3,(0,i.z)(t,n,r);case 3:0===(u=e.sent).length?v(!0):l(u);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(p?JSON.parse(p):void 0)||f||e()}),[p,f,r,n,d]),{blocks:a,error:f}}},81135:function(e,n,r){r.d(n,{D:function(){return t},Y:function(){return o}});var t=function(e,n){return e&&n?e-n:e||0},o=function(e,n){return e&&n?(e-n)/n*100:0}},9364:function(e,n,r){r.d(n,{L:function(){return f}});var t=r(34051),o=r.n(t),u=r(28687),i=r(27429),a=r(94224);function c(e,n,r,t,o,u,i){try{var a=e[u](i),c=a.value}catch(l){return void r(l)}a.done?n(c):Promise.resolve(c).then(t,o)}function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){l(e,n,r[n])}))}return e}var f=function(){var e,n=(e=o().mark((function e(n,r,t){var c,l,f,v,d,p,m,h,b=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=b.length>3&&void 0!==b[3]?b[3]:1e3,l={},f=!1,v=0,d=new u.GraphQLClient(t,{headers:(0,i.vA)(t)}),e.prev=5;case 6:if(f){e.next=18;break}return p=r.length,v+c<r.length&&(p=v+c),m=r.slice(v,p),e.next=12,(0,a.Z)(d,n(m));case 12:h=e.sent,l=s({},l,h),f=Object.keys(h).length<c||v+c>r.length,v+=c,e.next=6;break;case 18:return e.abrupt("return",l);case 21:return e.prev=21,e.t0=e.catch(5),console.error("Failed to fetch info data",e.t0),e.abrupt("return",null);case 25:case"end":return e.stop()}}),e,null,[[5,21]])})),function(){var n=this,r=arguments;return new Promise((function(t,o){var u=e.apply(n,r);function i(e){c(u,t,o,i,a,"next",e)}function a(e){c(u,t,o,i,a,"throw",e)}i(void 0)}))});return function(e,r,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=1249-1d34b5da0d9d1af0.js.map