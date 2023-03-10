// var gulp = require('gulp');
import gulp from 'gulp';
// var minifycss = require('gulp-clean-css');
import minifycss from 'gulp-clean-css';
// var uglify = require('gulp-uglify');
import uglify from 'gulp-uglify';
// var htmlmin = require('gulp-htmlmin');
import htmlmin from 'gulp-htmlmin';
// var htmlclean = require('gulp-htmlclean');
import htmlclean from 'gulp-htmlclean';
// var imagemin = require('gulp-imagemin');
import imagemin from 'gulp-imagemin';
// var del = require('del');
import del from 'del';
// var runSequence = require('run-sequence');
import runSequence from 'run-sequence';
// var Hexo = require('hexo');
import Hexo from 'hexo';


gulp.task('clean', function() {
    return del(['public/**/*']);
});

// generate html with 'hexo generate'
var hexo = new Hexo(process.cwd(), {});
gulp.task('generate', function(cb) {
    hexo.init().then(function() {
        return hexo.call('generate', {
            watch: false
        });
    }).then(function() {
        return hexo.exit();
    }).then(function() {
        return cb()
    }).catch(function(err) {
        console.log(err);
        hexo.exit(err);
        return cb(err);
    })
})

var hexo = new Hexo(process.cwd(), {});
gulp.task('hexoclean', function(cb) {
    hexo.init().then(function() {
        return hexo.call('clean', {
            watch: false
        });
    }).then(function() {
        return hexo.exit();
    }).then(function() {
        return cb()
    }).catch(function(err) {
        console.log(err);
        hexo.exit(err);
        return cb(err);
    })
})


gulp.task('deploy', function(cb) {
    hexo.init().then(function() {
        return hexo.call('deploy', {
            watch: false
        });
    }).then(function() {
        return hexo.exit();
    }).then(function() {
        return cb()
    }).catch(function(err) {
        console.log(err);
        hexo.exit(err);
        return cb(err);
    })
})

gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-html', function() {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});

gulp.task('minify-js', function() {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-img', function() {
    return gulp.src('./public/posts/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/posts'))
})

gulp.task('compress', function(cb) {
    runSequence(['minify-html', 'minify-css', 'minify-js', 'minify-img'], cb);
});


//gulp.task('build', ['clean', 'generate', 'compress']);
gulp.task('build', function(cb) {
    runSequence('clean', 'generate', 'compress', 'deploy', 'hexoclean', cb)
});

gulp.task('default', [])