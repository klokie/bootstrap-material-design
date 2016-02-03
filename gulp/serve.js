"use strict";

/**
 * A module to add a gulp task which executes the serve task.
 * @exports tasks/serveTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function serveTasks(gulp) {
  /**
   * A gulp build task to run the serve tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} serve
   * @param {Function} cb - callback
   */
  gulp.task("serve", function(cb) {
    /* @TODO
    */
  });
};
