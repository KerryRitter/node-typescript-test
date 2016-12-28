/// <binding ProjectOpened="default" />

var source = require('vinyl-source-stream');
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tslint = require("gulp-tslint");
var nodemon = require("gulp-nodemon");

gulp.task("copy:ejs", function() {
    gulp.src(["./src/views/**/*"]).pipe(gulp.dest("./dist/views/"));
});

const tsProject = ts.createProject("tsconfig.json");

gulp.task("compile:ts", function () {
  return gulp.src(["src/**/*.ts", "src/**/*.tsx"])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("./dist"));
});

gulp.task("watch", function () {
    gulp.watch("src/**/*.ts", ["compile:ts"]);
    gulp.watch("src/views/**/*.ejs", ["copy:ejs"]);
});

gulp.task("serve", ["compile:ts", "copy:ejs", "watch"], function () {
    nodemon({
        script: "dist/app.js",
        ext: "js",
    }).on("restart", function () {
        // livereload.changed();
    });
});