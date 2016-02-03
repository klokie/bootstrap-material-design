"use strict";

/**
 * A module to add a gulp task which executes the csslint task.
 * @exports tasks/csslintTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function csslintTasks(gulp) {
  /**
   * A gulp build task to run the csslint tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} csslint
   * @param {Function} cb - callback
   */
  // @FIXME
  gulp.task('csslint', function(cb) {
    return gulp
      .src([paths.css + 'bootstrap-material-design.css', paths.css + 'ripples.css'], {
        cwd: bases.src
      })
      .pipe(gulp.dest(paths.css, {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('csslint', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src([paths.css + 'bootstrap-material-design.min.css', paths.css + 'ripples.min.css'], {
        cwd: bases.src
      })
      .pipe(gulp.dest(paths.css, {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('csslint', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.examples + '**/*.css')
      .pipe(gulp.dest(paths.examples, {
        cwd: bases.dest
      }));
  });

  // @FIXME
  gulp.task('csslint', function(cb) { // WARNING: potential duplicate task
    return gulp
      .src(paths.docs + 'css/src/docs.css');
  });

};
