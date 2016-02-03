"use strict";

/**
 * A module to add a gulp task which executes the bootlint task.
 * @exports tasks/bootlintTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function bootlintTasks(gulp) {
  /**
   * A gulp build task to run the bootlint tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} bootlint
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('bootlint', function(cb) {
    return gulp
      .src('index.html,bootstrap-elements.html');
  });

};
