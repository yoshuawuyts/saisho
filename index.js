var css = require('sheetify')
var choo = require('choo')
var store = require('./stores/clicks')

css('tachyons')

css`
  *::selection {
    color: #000;
    background: #fff;
  }

  *::-moz-selection {
    color: #000;
    background: #fff;
  }
`

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')('./sw.js'))
}

app.use(store)

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

if (!module.parent) app.mount('body')
else module.exports = app
