"use strict";

/**
 * A module to add a gulp task which executes the connect task.
 * @exports tasks/connectTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function connectTasks(gulp) {
  /**
   * A gulp build task to run the connect tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} connect
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('connect', function(cb) {
    return gulp
      .src('[object Object]') // @FIXME
      .pipe(gulp.dest('livereload'));
  });

  // @FIXME
  gulp.task('connect', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('[object Object]') // @FIXME
      .pipe(gulp.dest('test'));
  });

};
