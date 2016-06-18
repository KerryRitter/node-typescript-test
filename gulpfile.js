/// <binding ProjectOpened='default' />

var gulp = require("gulp");
var less = require("gulp-less");
var ts = require("gulp-typescript");
var minifyCss = require("gulp-minify-css");
var concatCss = require("gulp-concat-css");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var merge = require("merge-stream");
var tslint = require("gulp-tslint");
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

var scriptConfig = {
    server: {
        base: "./dist/",
        input: "./server/**/*.ts",
    },
    project: ts.createProject("./tsconfig.json")
};

gulp.task("copy:ejs", function() {
    gulp.src(['./server/views/**/*']).pipe(gulp.dest('./dist/views/'));
});

gulp.task("lint:ts", function () {
    return gulp
        .src(scriptConfig.server.input)
        .pipe(tslint())
        .pipe(tslint.report("verbose", {
            emitError: true
        }));
});

gulp.task("compile:ts", ["lint:ts"], function () {
    return scriptConfig.project.src()
	    .pipe(ts(scriptConfig.project))
        .js
        .pipe(gulp.dest(scriptConfig.server.base))
        .pipe(livereload());
});

gulp.task("watch:ts", function () {
    livereload.listen();
    gulp.watch(scriptConfig.server.input, ["compile:ts"]);
});

gulp.task("serve", ["watch:ts"], function () {
    nodemon({
        script: "dist/server.js",
        ext: "js",
    }).on('restart', function () {
        setTimeout(function () {
            livereload.changed();
        }, 500);
    });
});