var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");
var babel = require("babelify");
var browserSync = require("browser-sync").create();

var bundler = browserify("./src/js/main.js", { debug: true })
    .transform(babel.configure({
        presets: ["es2015", "react"]
    }));

gulp.task("browserify", function () {
    return bundler.bundle()
        .pipe(source("main.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("copy", function () {
    gulp.src("./src/index.html")
        .pipe(gulp.dest("dist"));
    gulp.src("./src/css/*.*")
        .pipe(gulp.dest("dist/css"));
})

// Reloading task
gulp.task("src-watch", ["browserify", "copy"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("default", ["browserify", "copy"], function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    return gulp.watch(["./src/**/index.html", "./src/**/*.js", "./src/**/*.css"], ["src-watch"]);
});
