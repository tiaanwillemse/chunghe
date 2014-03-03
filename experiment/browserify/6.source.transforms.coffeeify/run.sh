#!/usr/bin/env  bash
browserify -t coffeeify --debug index.coffee > bundle.js
