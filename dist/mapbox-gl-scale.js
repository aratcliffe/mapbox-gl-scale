!function o(t,r,e){function n(a,i){if(!r[a]){if(!t[a]){var f="function"==typeof require&&require;if(!i&&f)return f(a,!0);if(l)return l(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[a]={exports:{}};t[a][0].call(u.exports,function(o){var r=t[a][1][o];return n(r?r:o)},u,u.exports,o,t,r,e)}return r[a].exports}for(var l="function"==typeof require&&require,a=0;a<e.length;a++)n(e[a]);return n}({1:[function(o,t,r){"use strict";function e(o){var t=156543.034*Math.abs(Math.cos(o.getCenter().lat*(180/Math.PI)))/Math.pow(2,o.getZoom()),r=96*39.37*t,e=n(4*r);console.log("scale1 "+r),console.log("scale2 "+4*r),console.log("scale3 "+e)}function n(o){var t=Math.pow(10,(Math.floor(o)+"").length-1),r=Math.floor(o/t);return t*r}function l(){}if(!mapboxgl)throw new Error("include mapboxgl before mapbox-gl-scale.js");o("xtend");l.prototype=mapboxgl.util.inherit(mapboxgl.Control,{options:{position:"top-left",zoom:16,flyTo:!0},onAdd:function(o){console.log("Hello world"),e(o),o.on("moveend",function(){e(o)})}}),window.mapboxgl?mapboxgl.Scale=l:"undefined"!=typeof t&&(t.exports=l)},{xtend:2}],2:[function(o,t,r){function e(){for(var o={},t=0;t<arguments.length;t++){var r=arguments[t];for(var e in r)n.call(r,e)&&(o[e]=r[e])}return o}t.exports=e;var n=Object.prototype.hasOwnProperty},{}]},{},[1]);