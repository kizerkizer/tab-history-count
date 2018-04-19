const gulp = require('gulp'),
      ts = require('gulp-typescript');

const project = ts.createProject('tsconfig.json');

gulp.task('default', () => {
  gulp.src('src/manifest.json')
    .pipe(gulp.dest('dist'));
  project.src()
    .pipe(project())
    .js.pipe(gulp.dest('dist'));
});
