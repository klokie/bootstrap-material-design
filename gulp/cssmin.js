"use strict";

/**
 * A module to add a gulp task which executes the cssmin task.
 * @exports tasks/cssminTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function cssminTasks(gulp) {
  /**
   * A gulp build task to run the cssmin tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} cssmin
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('cssmin', function(cb) {
    return gulp
      .src(paths.css + 'bootstrap-material-design.css', {
        cwd: bases.src
      })
      .pipe(gulp.dest(paths.css + 'bootstrap-material-design.min.css', {
        cwd: bases.src
      }));
  });

  // @FIXME
  gulp.task('cssmin', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.css + 'ripples.css', {
        cwd: bases.src
      })
      .pipe(gulp.dest(paths.css + 'ripples.min.css', {
        cwd: bases.src
      }));
  });

  // @FIXME
  gulp.task('cssmin', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'css/ie10-viewport-bug-workaround.css')
      .pipe(gulp.dest(paths.docs + 'css/docs.min.css', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('cssmin', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'css/src/pygments-manni.css')
      .pipe(gulp.dest(paths.docs + 'css/docs.min.css', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('cssmin', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'css/src/docs.css')
      .pipe(gulp.dest(paths.docs + 'css/docs.min.css', {
        cwd: bases.dest
      }));
  });

};
