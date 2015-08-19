# ansify

browserify transform to inline ansi graphics as png.

# example

```js
var img = document.createElement('img');
img.src = require('./node.ans');
document.body.appendChild(img);
```

```
browserify example.js -t ansify -o bundle.js
```

# api

```js
var ansify = require('ansify')
```

# var t = ansify(file)

Returns a through stream `t` inlining ansi files (`.ans`) as base64 encoded data uris.

# license

mit