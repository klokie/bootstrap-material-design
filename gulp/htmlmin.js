"use strict";

/**
 * A module to add a gulp task which executes the htmlmin task.
 * @exports tasks/htmlminTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function htmlminTasks(gulp) {
  /**
   * A gulp build task to run the htmlmin tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} htmlmin
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('htmlmin', function(cb) {
    return gulp
      .src('**/*.html')
      .pipe(gulp.dest('_gh_pages'));
  });

  // @FIXME
  gulp.task('htmlmin', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('!examples/**/*.html')
      .pipe(gulp.dest('_gh_pages'));
  });
};
