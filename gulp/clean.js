"use strict";

/**
 * A module to add a gulp task which executes the clean task.
 * @exports tasks/cleanTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function cleanTasks(gulp) {
  /**
   * A gulp build task to run the clean tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} clean
   * @param {Function} cb - callback
   */
  gulp.task("clean", function(cb) {
    /* @TODO
    */
  });

  gulp.task("clean-dist", function(cb) {
    /* @TODO
    */
  });

};
