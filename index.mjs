// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s,n){var f,o,a,l,m,d,u,h;if(!r(s))throw new TypeError(i("0eZ8T",s));if(o=new Array(s),u=s-1,l=0,h=-1,d=0,arguments.length>1){if(!e(n))throw new TypeError(i("0eZA8",n));return m=n,p}return m=0,N;function N(r){var e,i;if(0===arguments.length)return 0===d?null:1===d?t(l)?NaN:0/m:d<s?l/(d-1)/m:l/u/m;if(h=(h+1)%s,t(r))d=s,m=NaN,l=NaN;else{if(d<s)return o[h]=r,l+=(f=r-m)*(r-(m+=f/(d+=1))),1===d?0/m:l/(d-1)/m;if(1===d)return(l=0)/(m=r);if(t(o[h])){for(d=1,m=r,l=0,e=0;e<s;e++)if(e!==h){if(i=o[e],t(i)){d=s,m=NaN,l=NaN;break}l+=(f=i-m)*(i-(m+=f/(d+=1)))}}else!1===t(l)&&(a=o[h],l+=(f=r-a)*(a-m+(r-(m+=f/s))))}return o[h]=r,l/u/m}function p(r){var e;if(0===arguments.length)return 0===d?null:d<s?l/d/m:l/s/m;if(h=(h+1)%s,t(r))d=s,l=NaN;else{if(d<s)return o[h]=r,(l+=(f=r-m)*f)/(d+=1)/m;if(t(o[h])){for(l=0,e=0;e<s;e++)if(e!==h){if(t(o[e])){d=s,l=NaN;break}f=o[e]-m,l+=f*f}}else!1===t(l)&&(a=o[h],l+=(r-a)*(r-m+a-m))}return o[h]=r,l/s/m}}export{s as default};
//# sourceMappingURL=index.mjs.map