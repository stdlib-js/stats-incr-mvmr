// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=p.call(i,w,"$1e"),i=p.call(i,y,"e"),i=p.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=p.call(i,g,"e+0$1"),i=p.call(i,d,"e-0$1"),e.alternate&&(i=p.call(i,h,"$1."),i=p.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):u.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function N(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var E=String.fromCharCode,S=isNaN,k=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,i,a,o,l,u,f,p;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",u=1,f=0;f<e.length;f++)if(s(i=e[f]))l+=i;else{if(r=void 0!==i.precision,!(i=x(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,S(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=N(i.arg,i.width,i.padRight)),l+=i.arg||"",u+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,i,n;for(t=[],n=0,i=T.exec(e);i;)(r=e.slice(n,T.lastIndex-i[0].length)).length&&t.push(r),t.push(I(i)),n=T.lastIndex,i=T.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function O(e){return"string"==typeof e}function F(e){var r,t,i;if(!O(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=V(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return j.apply(null,t)}var A=Object.prototype,P=A.toString,$=A.__defineGetter__,C=A.__defineSetter__,R=A.__lookupGetter__,G=A.__lookupSetter__,Z=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(R.call(e,r)||G.call(e,r)?(i=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(e,r,t.get),o&&C&&C.call(e,r,t.set),e};function M(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"number"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return L&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",B=U()?function(e){var r,t,i,n,a;if(null==e)return X.call(e);t=e[q],a=q,r=null!=(n=e)&&Y.call(n,a);try{e[q]=void 0}catch(r){return X.call(e)}return i=X.call(e),r?e[q]=t:delete e[q],i}:function(e){return X.call(e)},D=Number,H=D.prototype.toString,J=U();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===B(e)))}function Q(e){return W(e)||K(e)}M(Q,"isPrimitive",W),M(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=D.NEGATIVE_INFINITY,te=Math.floor;function ie(e){return e<ee&&e>re&&te(r=e)===r;var r}function ne(e){return W(e)&&ie(e)}function ae(e){return K(e)&&ie(e.valueOf())}function oe(e){return ne(e)||ae(e)}function ce(e){return ne(e)&&e>0}function se(e){return ae(e)&&e.valueOf()>0}function le(e){return ce(e)||se(e)}function ue(e){return e!=e}return M(oe,"isPrimitive",ne),M(oe,"isObject",ae),M(le,"isPrimitive",ce),M(le,"isObject",se),function(e,r){var t,i,n,a,o,c,s,l;if(!ce(e))throw new TypeError(F("invalid argument. Must provide a positive integer. Value: `%s`.",e));if(i=new Array(e),s=e-1,a=0,l=-1,c=0,arguments.length>1){if(!W(r))throw new TypeError(F("invalid argument. Must provide a number. Value: `%s`.",r));return o=r,f}return o=0,u;function u(r){var u,f;if(0===arguments.length)return 0===c?null:1===c?ue(a)?NaN:0/o:c<e?a/(c-1)/o:a/s/o;if(l=(l+1)%e,ue(r))c=e,o=NaN,a=NaN;else{if(c<e)return i[l]=r,a+=(t=r-o)*(r-(o+=t/(c+=1))),1===c?0/o:a/(c-1)/o;if(1===c)return(a=0)/(o=r);if(ue(i[l])){for(c=1,o=r,a=0,u=0;u<e;u++)if(u!==l){if(ue(f=i[u])){c=e,o=NaN,a=NaN;break}a+=(t=f-o)*(f-(o+=t/(c+=1)))}}else!1===ue(a)&&(n=i[l],a+=(t=r-n)*(n-o+(r-(o+=t/e))))}return i[l]=r,a/s/o}function f(r){var s;if(0===arguments.length)return 0===c?null:c<e?a/c/o:a/e/o;if(l=(l+1)%e,ue(r))c=e,a=NaN;else{if(c<e)return i[l]=r,(a+=(t=r-o)*t)/(c+=1)/o;if(ue(i[l])){for(a=0,s=0;s<e;s++)if(s!==l){if(ue(i[s])){c=e,a=NaN;break}t=i[s]-o,a+=t*t}}else!1===ue(a)&&(n=i[l],a+=(r-n)*(r-o+n-o))}return i[l]=r,a/e/o}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmvmr=r();
//# sourceMappingURL=browser.js.map
