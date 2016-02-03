"use strict";

/**
 * A module to add a gulp task which executes the test task.
 * @exports tasks/testTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function testTasks(gulp) {
  /**
   * A gulp build task to run the test tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} test
   * @param {Function} cb - callback
   */
  gulp.task("test", function(cb) {
    /* @TODO
    */
  });
};
