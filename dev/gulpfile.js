var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify-es').default,
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');

var jsSources = ['js/*.js'],
    phpFiles = '../**/*.php',
    sassSourcesAll = ['sass/**/*.scss'],
    sassSourceMain = ['sass/style.scss'],
    sassSourcesExtra = ['scss/login.scss'],
    sassLayout = 'scss/layout/*.scss',
    imageSources = 'images/*',
    outputImages = '../images',
    outputJs = '../js',
    outputCss = '../';

// gulp.task('copy', function() {
//   gulp.src(copySources)
//   .pipe(gulp.dest(outputDir))
// });

gulp.task('sass', function() {
  // compress and output the main scss file
  gulp.src(sassSourceMain)
  .pipe(sourcemaps.init())
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
    .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(outputCss))

  // compress and output the login scss files
  gulp.src(sassSourcesExtra)
  .pipe(sourcemaps.init())
  .pipe(sass({style: 'expanded'}))
  .on('error', gutil.log)
  .pipe(autoprefixer({
          browsers: ['last 3 versions'],
          cascade: false
    }))
  .pipe(cssnano())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(outputCss))

}); // end of sass task

gulp.task('js', function() {
  gulp.src(jsSources)
  .pipe(sourcemaps.init())
  .pipe(uglify().on('error', function(e){
          console.log(e);
        }))
  .pipe(concat('script.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(outputJs));
}); // end of js task

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSourcesAll, ['sass']);
  gulp.watch(imageSources, ['imagemin']);
  gulp.watch(phpFiles, browserSync.reload)
});


gulp.task('browser-sync', function() {
    //watch files
    var files = [
    '../**/*.css',
    '../**/*.js',
    '../**/*.php'
    ];

    //initialize browsersync
    browserSync.init(files, {
    //put the mamp server address in here to sync with
    proxy: "http://curtin-grad-show-beyond/",
    notify: false
    });
});

gulp.task('imagemin', function() {
  gulp.src(imageSources)

    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: false},
          {cleanupIDs: false}
        ]
      })
    ]))
  .pipe(gulp.dest(outputImages))
});

gulp.task('default', [ 'js', 'sass', 'imagemin', 'browser-sync', 'watch']);
