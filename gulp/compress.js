"use strict";

/**
 * A module to add a gulp task which executes the compress task.
 * @exports tasks/compressTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function compressTasks(gulp) {
  /**
   * A gulp build task to run the compress tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} compress
   * @param {Function} cb - callback
   */
  gulp.task("compress", function(cb) {
    /* @TODO
    */
  });
};
