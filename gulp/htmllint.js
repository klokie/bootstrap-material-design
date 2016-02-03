"use strict";

/**
 * A module to add a gulp task which executes the htmllint task.
 * @exports tasks/htmllintTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function htmllintTasks(gulp) {
  /**
   * A gulp build task to run the htmllint tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} htmllint
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('htmllint', function(cb) {
    return gulp
      .src('*.html');
  });

};
