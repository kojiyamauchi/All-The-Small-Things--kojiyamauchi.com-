var gulp = require("gulp"), // call gulp.
  plumber = require("gulp-plumber"), // case, error task. don't stop watch plugin.
  compass = require("gulp-compass"), // sass compass pulgin.
  gutil = require("gulp-util"), // gulp-util plugin.
  imageMin = require("gulp-imagemin"), // images compression plugin.
  pngImageMin = require("imagemin-pngquant"), // png images compression plugin.
  changed = require("gulp-changed"), // only change file watch plugin.
  noCompressionImagesFold = (["noCompressionImages/*.jpg", "noCompressionImages/*.jpeg", "noCompressionImages/*.png", "noCompressionImages/*.gif", "noCompressionImages/*.svg"]), // no compression images fold.
  compressionImageFold = "images/", // finish compression images fold.
  ftp = require("vinyl-ftp"), // ftp plugin.
  sftp = require("gulp-sftp"), // sftp plugin.
  using_PHP_LocalServerConnect = require("gulp-connect-php"), // using php local server connect plugin.
  browserSync = require("browser-sync"), // local browser sync plugin.
  upLoadFileWrite = (["index.php", "**/index.php", "*.html", "**/*.html", "css/*.css", "css/**/*", "css/*.css.map", "sass/*.scss", "js/*.js", "images/*", "font/*"]), // upload file write.
  notUpLoadFileWrite = (["!css/ie.css", "!css/print.css", "!css/screen.css", "!css/ie.css.map", "!css/print.css.map", "!css/screen.css.map", "!sass/ie.scss", "!sass/print.scss", "!sass/screen.scss"]), // don't upload file write.
  upLoadFile = upLoadFileWrite.concat(notUpLoadFileWrite); //ftp upload file. variable upLoadFileWrite concatenate variable notUpLoadFileWrite.

// sass compass.
gulp.task("compass", function () {
  gulp.src("sass/*.scss")
    .pipe(plumber()) // case, sass compile error. don't stop watch.
    .pipe(compass({
      config_file: "sass/config.rb",
      comments: false,
      sass: "sass/",
      css: "css/"
    }));
});

// compression images.
gulp.task("compressionImages", function () {
  gulp.src(noCompressionImagesFold)
    .pipe(plumber())
    .pipe(changed(compressionImageFold))
    .pipe(imageMin({
      use: [pngImageMin({
        quality: "60-80",
        speed: 4
      })]
    }))
    .pipe(gulp.dest(compressionImageFold));
});

// local browser connect & sync.
gulp.task("browserSync", function () {
  using_PHP_LocalServerConnect.server({
    port: 8080,
    bin: "/Applications/MAMP/bin/php/php5.6.10/bin/php", // PHP pass.
    ini: "/Applications/MAMP/bin/php/php5.6.10/conf/php.ini" // PHP.ini pass.
  }, function () {
    browserSync({
      proxy: "localhost:8080",
      notify: false,
      browser: "google chrome"
    });
  });
});

// file save's local browser reload.
gulp.task("localBrowserReload", function () {
  browserSync.reload();
});

// ftp upload.
gulp.task("ftpUpLoad", function () {
  var ftpConnect = ftp.create({
    host: "***",
    user: "***",
    password: "***",
    parallel: 7,
    log: gutil.log
  });
  gulp.src(upLoadFile, {
      base: ".",
      buffer: false
    })
    .pipe(ftpConnect.newer("/"))
    .pipe(ftpConnect.dest("/"));
});

// gulp default task, terminal command "gulp".
gulp.task("default", ["browserSync"], function () { // first task, local server connect & local browser sync.
  gulp.watch(noCompressionImagesFold, ["compressionImages"]); // watching case, noCompressionImages fold changed images, compression images.
  gulp.watch("sass/*.scss", ["compass"]); // watching sass file save's auto compile, using compass.
  gulp.watch(upLoadFile, ["ftpUpLoad"]); //watching file save's auto ftp upload.
  gulp.watch(upLoadFile, ["localBrowserReload"]); // watching file save's local browser reload.
});