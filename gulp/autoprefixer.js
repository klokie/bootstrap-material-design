"use strict";

/**
 * A module to add a gulp task which executes the autoprefixer task.
 * @exports tasks/autoprefixerTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function autoprefixerTasks(gulp) {
  /**
   * A gulp build task to run the autoprefixer tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} autoprefixer
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('autoprefixer', function(cb) {
    return gulp
      .src(paths.css + 'bootstrap-material-design.css', {
        cwd: bases.src
      })
      .pipe(gulp.dest(paths.css + 'bootstrap-material-design.css', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('autoprefixer', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.css + 'ripples.css', {
        cwd: bases.src
      })
      .pipe(gulp.dest(paths.css + 'ripples.css', {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('autoprefixer', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'css/src/docs.css');
  });

  // @FIXME
  gulp.task('autoprefixer', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src('**/*.css')
      .pipe(gulp.dest(paths.examples, {
        cwd: bases.dest
      }));
  });
};
