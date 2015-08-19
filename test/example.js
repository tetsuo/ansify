var browserify = require('browserify');
    vm = require('vm'),
    test = require('tape'),
    ansify = require('..');

test(function (t) {
  t.plan(1);

  browserify(__dirname + '/example/index.js')
    .transform(ansify)
    .bundle(function (err, src) {
      if (err) throw err;
      var ctx = { console: { log: log } };
      vm.runInNewContext(src, ctx);
      function log (s) {
        t.equal(s.split(',')[0], 'data:image/png;base64');
      };
    });
});