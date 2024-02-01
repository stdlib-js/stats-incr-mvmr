// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s,n){var a,f,l,m,o,u,d,v;if(!e(s))throw new TypeError(t("invalid argument. Must provide a positive integer. Value: `%s`.",s));if(f=new Array(s),d=s-1,m=0,v=-1,u=0,arguments.length>1){if(!r(n))throw new TypeError(t("invalid argument. Must provide a number. Value: `%s`.",n));return o=n,h}return o=0,p;function p(e){var r,t;if(0===arguments.length)return 0===u?null:1===u?i(m)?NaN:0/o:u<s?m/(u-1)/o:m/d/o;if(v=(v+1)%s,i(e))u=s,o=NaN,m=NaN;else{if(u<s)return f[v]=e,m+=(a=e-o)*(e-(o+=a/(u+=1))),1===u?0/o:m/(u-1)/o;if(1===u)return(m=0)/(o=e);if(i(f[v])){for(u=1,o=e,m=0,r=0;r<s;r++)if(r!==v){if(t=f[r],i(t)){u=s,o=NaN,m=NaN;break}m+=(a=t-o)*(t-(o+=a/(u+=1)))}}else!1===i(m)&&(l=f[v],m+=(a=e-l)*(l-o+(e-(o+=a/s))))}return f[v]=e,m/d/o}function h(e){var r;if(0===arguments.length)return 0===u?null:u<s?m/u/o:m/s/o;if(v=(v+1)%s,i(e))u=s,m=NaN;else{if(u<s)return f[v]=e,(m+=(a=e-o)*a)/(u+=1)/o;if(i(f[v])){for(m=0,r=0;r<s;r++)if(r!==v){if(i(f[r])){u=s,m=NaN;break}a=f[r]-o,m+=a*a}}else!1===i(m)&&(l=f[v],m+=(e-l)*(e-o+l-o))}return f[v]=e,m/s/o}}export{s as default};
//# sourceMappingURL=index.mjs.map
