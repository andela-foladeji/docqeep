import gulp from 'gulp';
import childProcess from 'child_process';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';
import gulpLoadPlugins from 'gulp-load-plugins';

const plugins = gulpLoadPlugins();

gulp.task('server', () => {
  childProcess.exec('babel-watch server/index.js');
});

gulp.task('prepareDB', () => {
  childProcess.exec('babel-node setup.js');
  childProcess.exec('babel-node seeders.js');
});

gulp.task('watch', () => {
  // gulp.watch('client/css/*.css')
  gulp.watch('./client/src/**/*.js', ['build']);
  gulp.watch('./client/src/scss/*.scss', ['sass']);
  gulp.watch('./client/build/*.js').on('change', browserSync.reload);
});

gulp.task('sass', () => {
  gulp.src('./client/src/scss/*.scss')
    .pipe(plugins.sass())
    .pipe(gulp.dest('./client/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('build', ['sass'], () => {
  gulp.src('client/src/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('client/build/'));
});

gulp.task('start', ['server'], () => {
  browserSync.init({
    proxy: 'localhost:5000',
  });
});

gulp.task('default', ['watch', 'build', 'start']);
