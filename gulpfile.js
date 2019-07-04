gulp = require("gulp");
var sass = require("gulp-sass");

function style() {
    return (
        gulp
        .src("src/scss/*.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest("dist/css/"))
    );
}

function watch() {
    gulp.watch('src/scss/*.scss', style)
}

exports.watch = watch;
exports.style = style;