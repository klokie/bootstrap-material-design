"use strict";

/**
 * A module to add a gulp task which executes the uglify task.
 * @exports tasks/uglifyTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function uglifyTasks(gulp) {
  var rename = require('gulp-rename');
  var uglify = require('gulp-uglify');

  /**
   * A gulp build task to run the uglify tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} uglify
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('uglify-material', function(cb) {
    return gulp
      .src(paths.js + 'material.js', {
        cwd: bases.src
      })
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify-ripples', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.js + 'ripples.js', {
        cwd: bases.src
      })
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/vendor/autoprefixer.js')
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.docs + 'js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/vendor/less.min.js')
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.docs + 'js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/vendor/jszip.min.js')
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.docs + 'js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/vendor/uglify.min.js')
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.docs + 'js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/vendor/Blob.js')
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.docs + 'js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/vendor/FileSaver.js')
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.docs + 'js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/raw-files.min.js')
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.docs + 'js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/src/customizer.js')
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.docs + 'js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify-holder', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/vendor/holder.min.js')
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.docs + 'js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/vendor/ZeroClipboard.min.js')
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.docs + 'js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/vendor/anchor.js')
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.docs + 'js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('uglify', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/src/application.js')
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.docs + 'js', {
        cwd: bases.dest
      }));
  });

};
