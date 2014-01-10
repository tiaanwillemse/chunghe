
var gulp = require('gulp'); 
var browserify = require('gulp-browserify'); 
var concat = require('gulp-concat'); 
var styl = require('gulp-styl'); 
var gutil = require('gulp-util');
var refresh = require('gulp-livereload'); 
var lr = require('tiny-lr'); 
var http = require('http');
var server = lr();


gulp.task('scripts', function() { 
    gulp.src(['scripts/src/**/*.js'])
        .pipe(browserify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('scripts/build'))
        .pipe(refresh(server))
});

gulp.task('lr-server', function() { 
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
});

gulp.task('default', function() { 
    gulp.run('lr-server', 'scripts');
    gulp.watch('scripts/src/**', function(event) {
        gulp.run('scripts');
    }) 
});
