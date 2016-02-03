"use strict";

/**
 * A module to add a gulp task which executes the docs task.
 * @exports tasks/docsTasks
 * @param {Gulp} gulp - The gulp module
 */
module.exports = function docsTasks(gulp) {
  /**
   * A gulp build task to run the docs tasks.
   * The following tasks are executed in sequence: ["test"]
   * The sequence works by piping each task to the next.
   * @member {Gulp} docs
   * @param {Function} cb - callback
   */
  gulp.task("docs", function docsTask(cb) {
    /* @TODO
gulp.task('build-icons-data', function () { generateIconsData.call(this, grunt); });
gulp.task('docs', ["docs-css", "lint-docs-css", "docs-js", "lint-docs-js", "clean:docs", "copy:docs", "build-icons-data"]);
gulp.task('docs-css', ["less:docs", "autoprefixer:docs", "autoprefixer:examples", "cssmin:docs"]);
gulp.task('docs-js', ["uglify:docsJs", "uglify:customize"]);
gulp.task('lint-docs-css', ["csslint:docs", "csslint:examples"]);
gulp.task('lint-docs-js', ["jshint:assets", "jscs:assets"]);
    */
  });
};
