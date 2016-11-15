'use strict';

require('ace-css/css/ace.css');
require('font-awesome/css/font-awesome.css');

// Require index.html so it gets copied to dist
require('./index.html');

var Elm = require('./Main.elm');

var recursive = require('recursive-readdir');

recursive('.', function (err, files) {
  files.forEach(function (f) {
    console.error(f);
    if (/\w\.elm$/.test(f)) {
      var a = require(f);
    }
  });
});


var mountNode = document.getElementById('main');

// .embed() can take an optional second argument. This would be an object describing the data we need to start a program, i.e. a userID or some token
var app = Elm.Main.embed(mountNode);