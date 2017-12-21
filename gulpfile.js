'use strict';
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    preFixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourceMaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssMin = require('gulp-minify-css'),
    imageMin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimRaf = require('rimraf'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var config = {
    bowerDir: './bower_components'
}

var path = {
    build: {
        html: 'docs/',
        js: 'docs/js/',
        css: 'docs/css/',
        img: 'docs/img/',
        fonts: 'docs/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './docs'
};

gulp.task("webserver", function(){
    browserSync({
        server: {
            baseDir: './docs'
        },
        host: 'localhost',
        port: 3000,
        tunnel: true
    });
});

gulp.task('html:build', function() {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function() {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourceMaps.init())
        .pipe(uglify())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function() {
    gulp.src([path.src.style])
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(preFixer())
        .pipe(cssMin())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function(){
    gulp.src(path.src.img)
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
                .pipe(gulp.dest(path.build.fonts))
})

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'image:build',
    'fonts:build'
]);

gulp.task('watch', function(){
    watch([path.watch.js], function(ev, callback) {
        gulp.start('js:build');
    });
    watch([path.watch.html], function(ev, callback) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(ev, callback) {
        gulp.start('style:build');
    });
    watch([path.watch.img], function(ev, callback) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb){
        gulp.start('fonts:build');
    })
});

gulp.task('clean', function (callback) {
    rimRaf(path.clean, callback);
});

gulp.task('default', ['build', 'webserver', 'watch']);