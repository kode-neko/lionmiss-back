/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require("gulp");
const del = require("del");
// const sass = require("gulp-sass")(require('node-sass'))
// const clean = require("gulp-dest-clean")
const paths = {
  source: "./src/lib",
  destination: "./dist",
};

gulp.task("del", () => {
  return del(['dist/**', '!dist'], {force:true});
})

gulp.task("css", () => {
  return gulp
    .src([paths.source + "/**/*.scss"])
    //.pipe(sass())
    .pipe(gulp.dest(paths.destination));
});
