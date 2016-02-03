"use strict";

/**
 * A module to add a gulp task which executes the jscs task.
 * @exports tasks/jscsTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function jscsTasks(gulp) {
  /**
   * A gulp build task to run the jscs tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} jscs
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('jscs', function(cb) {
    return gulp
      .src('<%= jshint.grunt.src %>');
  });

  // @FIXME
  gulp.task('jscs', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('<%= jshint.core.src %>');
  });

  // @FIXME
  gulp.task('jscs', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('<%= jshint.test.src %>');
  });

  // @FIXME
  gulp.task('jscs', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('<%= jshint.assets.src %>');
  });

};
