"use strict";

/**
 * A module to add a gulp task which executes the lessToSass task.
 * @exports tasks/lessToSassTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function lessToSassTasks(gulp) {
  /**
   * A gulp build task to run the lessToSass tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} lessToSass
   * @param {Function} cb - callback
   */
  gulp.task("lessToSass", function(cb) {
    /* @TODO
    */
  });

  gulp.task("lessToSass-convert", function(cb) {
    /* @TODO
    */
  });

};
