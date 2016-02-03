"use strict";

/**
 * A module to add a gulp task which executes the jshint task.
 * @exports tasks/jshintTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function jshintTasks(gulp) {
  var jshint = require('gulp-jshint');

  /**
   * A gulp build task to run the jshint tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} jshint
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('jshint', function(cb) {
    return gulp
      .src('Gruntfile.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  // @FIXME
  gulp.task('jshint', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('package.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  // @FIXME
  gulp.task('jshint', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('js/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  // @FIXME
  gulp.task('jshint', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('test/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  // @FIXME
  gulp.task('jshint', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/src/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  gulp.task('jshint', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  // @FIXME
  gulp.task('jshint', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('!docs/assets/js/*.min.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });
};
