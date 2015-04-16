var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var karma = require('karma').server;
var path = require('path');
var child_process = require('child_process');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

/**
* Test task, run test once and exit
*/
gulp.task('test', function(done) {
  karma.start({
      configFile: __dirname + '/tests/my.conf.js',
      singleRun: true,
      autoWatch: true
  }, function() {
      done();
  });


  // gulp.src([__dirname +"./tests/e2e/**/*spec.js"])
  //   .pipe(protractor({
  //       configFile: __dirname + "/tests/protractor.config.js"
  //   }))
  //   .on('error', function(e) { throw e });

});

function getProtractorBinary(binaryName){
    var winExt = /^win/.test(process.platform)? '.cmd' : '';
    var pkgPath = require.resolve('protractor');
    var protractorDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin'));
    return path.join(protractorDir, '/'+binaryName+winExt);
}

gulp.task('protractor-install', function(done){
    child_process.spawn(getProtractorBinary('webdriver-manager'), ['update'], {
        stdio: 'inherit'
    }).once('close', done);
});

gulp.task('protractor-run', function (done) {
    var argv = process.argv.slice(3); // forward args to protractor
    argv.push('tests/protractor.config.js');
    child_process.spawn(getProtractorBinary('protractor'), argv, {
        stdio: 'inherit'
    }).once('close', done);
});