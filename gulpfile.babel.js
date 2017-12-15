'use strict'
import gulp from 'gulp' // call gulp.
// Utility Package.
import gutil from 'gulp-util' // gulp-util plugin.
import changed from 'gulp-changed' // only change file watch plugin.
import plumber from 'gulp-plumber' // case, error task. don't stop watch plugin.
import rename from 'gulp-rename' // File Rename PlugIn.
import del from 'del' // File Delete, Not Gulp PlugIn.
// For JS.
import jsmin from 'gulp-uglify' // JS File Compression.
// For Sass & CSS.
import sass from 'gulp-sass' // sass file compile plugin.
import sassGlob from 'gulp-sass-glob' // sass glob plugin.
import postCss from 'gulp-postcss' // postcss plugin.
import autoprefixer from 'autoprefixer' // add vendor prefix in CSS automatically.
import flexbug from 'postcss-flexbugs-fixes' // for flexbox bug.
import cssComb from 'gulp-csscomb' // code formatting for CSS.
import cssmin from 'gulp-cssmin' // CSS File Compression.
// For Images.
import sourcemaps from 'gulp-sourcemaps' // write sourcemaps.
import imageMin from 'gulp-imagemin' // images compression plugin.
import pngImageMin from 'imagemin-pngquant' // png images compression plugin.
import svgMin from 'gulp-svgmin' // svg compression plugin,
// For Images.
import ftp from 'vinyl-ftp' // ftp plugin.
import sftp from 'gulp-sftp' // sftp plugin.
// For BrowserSync.
import using_PHP_LocalServerConnect from 'gulp-connect-php' // using php local server connect plugin.
import browserSync from 'browser-sync' // local browser sync plugin.
// Setting.
const autoprefixerSet = ['last 2 version', 'ie >= 10', 'iOS >= 8', 'Android >= 4.4'] // setting of autoprefixer.
const postCssPlugIn = [autoprefixer({
  browsers: autoprefixerSet
}), flexbug] // PostCSS plugin.
const addImgDir = (['noCompressionImages/*.jpg', 'noCompressionImages/*.jpeg', 'noCompressionImages/*.png', 'noCompressionImages/*.gif', 'noCompressionImages/*.svg']) // added image fold,
const dstImgDir = 'images/' // compression image fold,
const upLoadFileWrite = (['index.php', '*.html', 'css/*.css', 'css/**/*', 'css/*.css.map', 'sass/*.scss', 'js/*.js', 'images/*', 'font/*', 'maps/*']) // upload file write.
const notUpLoadFileWrite = (['!**/.DS_Store', '!node_modules/**/*', '!main/', '!colorOfLife/', '!gulpfile.js', '!privatePortfolio/', '!README.md', '!sass/config.rb', '!sass/sass.command', '!studySpace/', '!work/!', '!jsSample/', '!base/']) // don't upload file write.
const upLoadFile = upLoadFileWrite.concat(notUpLoadFileWrite) //ftp upload file. variable upLoadFileWrite concatenate variable notUpLoadFileWrite.

// JS File Compression.
gulp.task('jsmin', () => {
  return gulp.src(['js/allTheSmallThings.js'])
    .pipe(jsmin({
      output: {
        comments: /^!/
      }
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('js/'));
});

// Sass compile & use PostCSS plugIn.
gulp.task('sass', () => {
  return gulp.src('sass/*.scss')
    .pipe(plumber({
      errorHander: error => {
        console.log(error.message)
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(postCss(postCssPlugIn))
    .pipe(sourcemaps.write('../maps'))
    .pipe(cssComb())
    .pipe(gulp.dest('css/'))
})

// CSS File Compression.
gulp.task('cssmin', () => {
  return gulp.src('css/allTheSmallThings.css')
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css/'));
});

// compression images.
gulp.task('imgMin', () => {
  return gulp.src(addImgDir + '(.jpg|.jpeg|.png|.gif)')
    .pipe(plumber())
    .pipe(changed(addImgDir))
    .pipe(imageMin({
      use: [pngImageMin({
        quality: '60-80',
        speed: 4
      })]
    }))
    .pipe(gulp.dest(dstImgDir))
})

// svg file compression.
gulp.task('svgMin', () => {
  return gulp.src(addImgDir + '.svg')
    .pipe(plumber())
    .pipe(changed(addImgDir))
    .pipe(svgMin())
    .pipe(gulp.dest(dstImgDir))
})

// HTML File Rename PHP File. Setting at The Work Start.
gulp.task('rename', () => {
  return gulp.src('index.html')
    .pipe(rename({
      extname: '.php'
    }))
    .pipe(gulp.dest('.'));
});

// HTML File & .DS_Store Delete. Setting at The Work Start.
gulp.task('delete', cb => {
  return del(['index.html', '**/.DS_Store'], cb);
});

// local browser connect & sync.
gulp.task('browserSync', () => {
  return using_PHP_LocalServerConnect.server({
    port: 8080,
    bin: '/Applications/MAMP/bin/php/php5.6.10/bin/php', // PHP pass.
    ini: '/Applications/MAMP/bin/php/php5.6.10/conf/php.ini' // PHP.ini pass.
  }, () => {
    return browserSync({
      proxy: 'localhost:8080',
      notify: false,
      browser: 'google chrome'
    });
  });
});

// file save's local browser reload.
gulp.task('localBrowserReload', () => {
  return browserSync.reload();
});

// ftp upload.
gulp.task('ftpUpLoad', () => {
  const ftpConnect = ftp.create({
    host: '***',
    user: '***',
    password: '***',
    parallel: 7,
    log: gutil.log
  });
  gulp.src(upLoadFile, {
      base: '.',
      buffer: false
    })
    .pipe(ftpConnect.newer('/'))
    .pipe(ftpConnect.dest('/'));
});

// gulp default task, terminal command 'gulp'.
gulp.task('default', ['browserSync'], () => { // first task, local server connect & local browser sync.
  gulp.watch(['js/allTheSmallThings.js'], ['jsmin']); // watching change's JS flie, File Compression.
  gulp.watch('sass/*.scss', ['sass']); // watching sass file save's auto compile.
  gulp.watch('css/*.css', ['cssmin']); // watching change's CSS flie, File Compression.
  gulp.watch(addImgDir, ['imgMin', 'svgMin']) // watching Img Dir compression.
  //gulp.watch('**/*', ['rename']); // watching change's HTML flie. Rename PHP file.
  //gulp.watch('**/*', ['delete']); // watching rename PHP file. delet HTML file.
  gulp.watch(upLoadFile, ['ftpUpLoad']); // watching file save's auto ftp upload.
  gulp.watch(upLoadFile, ['localBrowserReload']); // watching file save's local browser reload.
});