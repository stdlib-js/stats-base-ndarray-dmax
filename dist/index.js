"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=v(function(p,a){
var n=require('@stdlib/ndarray-base-numel-dimension/dist'),s=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/stats-strided-dmax/dist').ndarray;function o(e){var r=e[0];return m(n(r,0),d(r),s(r,0),q(r))}a.exports=o
});var x=require("path").join,f=require('@stdlib/utils-try-require/dist'),c=require('@stdlib/assert-is-error/dist'),g=t(),i,u=f(x(__dirname,"./native.js"));c(u)?i=g:i=u;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
