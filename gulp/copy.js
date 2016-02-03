"use strict";

/**
 * A module to add a gulp task which executes the copy task.
 * @exports tasks/copyTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function copyTasks(gulp) {
  /**
   * A gulp build task to run the copy tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} copy
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('copy-material', function(cb) {
    return gulp
      .src(paths.js + 'material.js')
      .pipe(gulp.dest(paths.js + 'material.js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('copy-ripples', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.js + 'ripples.js')
      .pipe(gulp.dest(paths.js + 'ripples.js', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('copy-fonts', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('**')
      .pipe(gulp.dest(paths.fonts, {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('copy-docs', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('**/*')
      .pipe(gulp.dest(paths.docs, {
        cwd: bases.dest
      }));
  });
};
