"use strict";

/**
 * A module to add a gulp task which executes the jasmine task.
 * @exports tasks/jasmineTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function jasmineTasks(gulp) {
  /**
   * A gulp build task to run the jasmine tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} jasmine
   * @param {Function} cb - callback
   */
  gulp.task("jasmine", function(cb) {
    /* @TODO
    */
  });
};
