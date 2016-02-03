"use strict";

/**
 * A module to add a gulp task which executes the sass task.
 * @exports tasks/sassTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function sassTasks(gulp) {
  /**
   * A gulp build task to run the sass tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} sass
   * @param {Function} cb - callback
   */
  gulp.task("sass", function(cb) {
    /* @TODO
    */
  });

  gulp.task("sass-compile", function(cb) {
    /* @TODO
    */
  });

};
