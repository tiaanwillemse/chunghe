#!/usr/local/bin/node

var fs = require('fs'),
    jsdom = require('jsdom'),
    exec = require('child_process').exec;

var home;

var child = exec('echo $HOME', function (error, stdout, stderr) {
    home = stdout.replace(/\n/, '');
});

function paddingZero(n) {
    if (n < 10)
        return '0' + n;
    return n;
}
jsdom.env({
  html: 'http://news.ycombinator.com/',
  done: function(errors, window) {
    var content = '<!DOCTYPE html><link rel="stylesheet" type="text/css" href="http://ycombinator.com/news.css">';
    var now = new Date();
    var date_array = [now.getFullYear(), paddingZero(now.getMonth() + 1), paddingZero(now.getDate())];
    var time_array = [paddingZero(now.getHours()), paddingZero(now.getMinutes())];
    content += window.document.body.innerHTML;
    fs.writeFile(home + '/Dropbox/hacker-news/' + date_array.join('') + '_' + time_array.join(':') + '.htm', content, function(err) {
        if (err)
            throw err;
        console.log('saved successuflly!');
    });
  }
});
