

tpl = require('./tpl.hbs')
square = require('./square.coffee')
document.body.innerHTML = tpl(value: square(65))
# alert square(65)
