"use strict";

/**
 * A module to add a gulp task which executes the jekyll task.
 * @exports tasks/jekyllTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function jekyllTasks(gulp) {
  /**
   * A gulp build task to run the jekyll tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} jekyll
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('jekyll', function(cb) {
    return gulp
      .src('[object Object]') // @FIXME
      .pipe(gulp.dest('docs'));
  });

  gulp.task('jekyll', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('[object Object]') // @FIXME
      .pipe(gulp.dest('github'));
  });

};
