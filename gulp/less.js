"use strict";

/**
 * A module to add a gulp task which executes the less task.
 * @exports tasks/lessTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function lessTasks(gulp) {
  /**
   * A gulp build task to run the less tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} less
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('less', function(cb) {
    return gulp
      .src('less/bootstrap-material-design.less')
      .pipe(gulp.dest(paths.css + 'bootstrap-material-design.css', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('less', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('less/ripples.less')
      .pipe(gulp.dest(paths.css + 'ripples.css', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('less', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'css/src/docs.less')
      .pipe(gulp.dest(paths.docs + 'css/src/docs.css', {
        cwd: bases.dest
      }));
  });
};
