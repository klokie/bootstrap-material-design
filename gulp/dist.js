"use strict";

/**
 * A module to add a gulp task which executes the dist task.
 * @exports tasks/distTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function distTasks(gulp) {
  /**
   * A gulp build task to run the dist tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} dist
   * @param {Function} cb - callback
   */
  gulp.task('dist', ["clean-dist", "htmllint", "bootlint", "dist-less", "dist-sass", "dist-js", "dist-fonts"], function(cb) {
  });
  
  gulp.task('dist-fonts', ["copy-fonts"], function(cb) {
  });
  
  gulp.task('dist-js', ["jshint", "copy-material", "uglify-material", "copy-ripples", "uglify-ripples"], function(cb) {
  });
  
  gulp.task('dist-sass', ["lessToSass-convert", "sass-compile"], function(cb) {
  });
  
  gulp.task('dist-less', [], function(cb) {
  });

};
