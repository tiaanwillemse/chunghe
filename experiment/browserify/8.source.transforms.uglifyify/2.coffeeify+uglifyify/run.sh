#!/usr/bin/env  bash
browserify -t coffeeify -t hbsfy -t uglifyify index.coffee --debug> bundle.js
