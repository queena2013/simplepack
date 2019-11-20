(function(modules){
        function require(filename) {
          var fn = modules[filename];
          var module = { exports: {} };

          fn(require, module, module.exports);
          return module.exports;
        }

        require('/Users/jxl/Desktop/webpack/simplepack/src/index.js')
      })({ '/Users/jxl/Desktop/webpack/simplepack/src/index.js': function(require, module, exports) { "use strict";

var _hello = require("./hello.js");

document.write((0, _hello.Hello)('jxl')); }, './hello.js': function(require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hello = Hello;

function Hello(name) {
  return 'hello' + name;
} },  })