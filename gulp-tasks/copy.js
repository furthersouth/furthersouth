import gulp from 'gulp';

export default function fonts() {
  return gulp.src('./CNAME')
    .pipe(gulp.dest('./dist'));
}
