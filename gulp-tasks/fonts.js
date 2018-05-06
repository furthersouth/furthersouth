import gulp from 'gulp';
import merge from 'lodash.merge';
import gulpLoadPlugins from 'gulp-load-plugins';

import paths from './paths';

const packages = merge(
  require('basey/package.json'),
  require('../package.json'),
);

const $ = gulpLoadPlugins({
  config: packages,
});

export default function fonts() {
  return gulp.src(paths.fonts.src)
    .pipe($.changed(paths.fonts.build))
    .pipe(gulp.dest(paths.fonts.build))
    .pipe($.duration('copying fonts'));
}
