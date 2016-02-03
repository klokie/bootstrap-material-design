"use strict";

/**
 * A module to add a gulp task which executes the meteor task.
 * @exports tasks/meteorTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function meteorTasks(gulp) {
  /**
   * A gulp build task to run the meteor tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} meteor
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('meteor', ["meteor-init", "meteor-test", "meteor-publish", "meteor-cleanup"]);
  gulp.task('meteor-publish', ["meteor-init", "meteor-publish", "meteor-cleanup"]);
  gulp.task('meteor-test', ["meteor-init", "meteor-test", "meteor-cleanup"]);

  // @FIXME
  gulp.task('meteor-init', function(cb) {
    return gulp
      .src('[object Object]') // @FIXME
      .pipe(gulp.dest('meteor-init'));
  });

  // @FIXME
  gulp.task('meteor-cleanup', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('[object Object]') // @FIXME
      .pipe(gulp.dest('meteor-cleanup'));
  });

  // @FIXME
  gulp.task('meteor-test', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('[object Object]') // @FIXME
      .pipe(gulp.dest('meteor-test'));
  });

  // @FIXME
  gulp.task('meteor-publish', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('[object Object]') // @FIXME
      .pipe(gulp.dest('meteor-publish'));
  });
  
};
