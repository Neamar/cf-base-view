var jsdom = require('jsdom').jsdom

global.window = jsdom('<html><body></body></html>').createWindow()

global.window.$ = window.jQuery = global.jQuery = global.$ = require('jquery-latest').create(global.window)
global.document = window.document
global.window._ = global._ = require('lodash')
global.document = global.window.document
global.window.Backbone = global.Backbone = require('backbone')
global.window.Backbone.$ = global.window.jQuery
global.window.Backbone._ = global.window._
global.navigator = { userAgent: 'node.js' }

global.addEventListener = window.addEventListener
global.addEventListener = global.window.addEventListener