"use strict";

/**
 * A module to add a gulp task which executes the watch task.
 * @exports tasks/watchTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function watchTasks(gulp) {
  /**
   * A gulp build task to run the watch tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} watch
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('watch', function(cb) {
    gulp.watch('index.html', [ /* dependencies */ ]);
  });
  gulp.task('watch', function(cb) {
    gulp.watch('bootstrap-elements.html', [ /* dependencies */ ]);
  });

  gulp.task('watch', function(cb) {
    gulp.watch('testcase.html', [ /* dependencies */ ]);
  });

  gulp.task('watch', function(cb) {
    gulp.watch('<%= jshint.core.src %>', [ /* dependencies */ ]);
  });

  gulp.task('watch', function(cb) {
    gulp.watch('test/**/*.js', [ /* dependencies */ ]);
  });

  gulp.task('watch', function(cb) {
    gulp.watch('less/**/*.less', [ /* dependencies */ ]);
  });

  gulp.task('watch', function(cb) {
    gulp.watch('index.html', [ /* dependencies */ ]);
  });

  gulp.task('watch', function(cb) {
    gulp.watch('bootstrap-elements.html', [ /* dependencies */ ]);
  });

  gulp.task('watch', function(cb) {
    gulp.watch(paths.js + '**/*.js', {
      cwd: bases.src
    }, [ /* dependencies */ ]);
  });

  gulp.task('watch', function(cb) {
    gulp.watch(paths.css + '**/*.css', {
      cwd: bases.src
    }, [ /* dependencies */ ]);
  });

  gulp.task('watch', function(cb) {
    gulp.watch('demo/**/*.{png,jpg,jpeg,gif,webp,svg}', [ /* dependencies */ ]);
  });

};
