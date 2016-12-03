/// <binding ProjectOpened="default" />

var gulp = require("gulp");
var ts = require("gulp-typescript");
var tslint = require("gulp-tslint");
var nodemon = require("gulp-nodemon");
var livereload = require("gulp-livereload");

gulp.task("copy:ejs", function() {
    gulp.src(["./src/views/**/*"]).pipe(gulp.dest("./dist/views/"));
});

const tsProject = ts.createProject("tsconfig.json");

gulp.task("compile:ts", function () {
  return gulp.src("./src/**/*.ts")
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("./dist"))
        .pipe(livereload());
});

gulp.task("watch", function () {
    livereload.listen();
    gulp.watch("./src/**/*.ts", ["compile:ts"]);
    gulp.watch("./src/views/**/*.ejs", ["copy:ejs"]);
});

gulp.task("serve", ["watch"], function () {
    nodemon({
        script: "dist/app.js",
        ext: "js",
    }).on("restart", function () {
        setTimeout(function () {
            livereload.changed();
        }, 500);
    });
});