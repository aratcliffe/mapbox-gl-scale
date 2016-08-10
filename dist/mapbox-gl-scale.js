(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/* global mapboxgl */
if (!mapboxgl) throw new Error('include mapboxgl before mapbox-gl-scale.js');

var extend = require('xtend');

function Scale(options) {
  this.options = extend({}, this.options, options);
}

Scale.prototype = mapboxgl.util.inherit(mapboxgl.Control, {

  options: {
    position: 'top-right',
    zoom: 16,
    flyTo: true
  },


  onAdd: function(map) {
    this.container = this.options.container ?
    typeof this.options.container === 'string' ?
    document.getElementById(this.options.container) :
    this.options.container :
    map.getContainer();

    var el = document.createElement('div');
    el.className = 'mapboxgl-ctrl-scale';
    el.id = 'ruler';

    this.container.appendChild(el);

    _updateScale(map);
    map.on('moveend', function() {
      _updateScale(map);
    });

    return el;
  },

});

function _updateScale(map) {

  var y = map._container.clientHeight / 2;


  var maxMeters = _getDistance( map.unproject([0, y]), map.unproject([100, y]));

  var meters = _getRoundNum(maxMeters);

  var ratio = meters / maxMeters;

  ruler.style.width = 100 * ratio + 'px';
  ruler.innerHTML = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km'; 

}

function _getDistance(latlng1, latlng2) {
  var R = 6371000;

  var rad = Math.PI / 180,
      lat1 = latlng1.lat * rad,
      lat2 = latlng2.lat * rad,
      a = Math.sin(lat1) * Math.sin(lat2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.cos((latlng2.lng - latlng1.lng) * rad);

  var maxMeters = R * Math.acos(Math.min(a, 1));
  return maxMeters;

}

function _getRoundNum(num) {
   var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
        d = num / pow10;

    d = d >= 10 ? 10 :
        d >= 5 ? 5 :
        d >= 3 ? 3 :
        d >= 2 ? 2 : 1;

    return pow10 * d;
}

if (window.mapboxgl) {
  mapboxgl.Scale = Scale;
} else if (typeof module !== 'undefined') {
  module.exports = Scale;
}

},{"xtend":2}],2:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}]},{},[1]);
