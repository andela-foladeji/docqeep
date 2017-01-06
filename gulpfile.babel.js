import gulp from 'gulp';
import childProcess from 'child_process';
import browserSync from 'browser-sync'
import webpack from 'webpack-stream';

gulp.task('server', () => {
  childProcess.exec('babel-watch server/index.js');
});

gulp.task('prepareDB', () => {
  childProcess.exec('babel-node setup.js');
  childProcess.exec('babel-node seeders.js');
});

gulp.task('watch', () => {
  // gulp.watch('client/css/*.css')
  gulp.watch('./client/src/**/*', ['build']);
  gulp.watch('./client/js/*.js').on('change', browserSync.reload);
});

gulp.task('build', () => {
  gulp.src('client/src/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('client/js/'));
});

gulp.task('start', ['server'], () => {
  browserSync.init({
    proxy: 'localhost:5000',
  });
});

gulp.task('default', ['watch', 'build', 'start']);
