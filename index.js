var duplexify = require('duplexify'),
    escapes = require('escapes'),
    through = require('through2'),
    path = require('path');

module.exports = function (file) {
  var s = through();;
  if ('.ans' !== path.extname(file)) return s;
  return duplexify(escapes(function (canvas) {
    s.end('module.exports=\'' + canvas.toDataURL() + '\';');
  }), s);
};