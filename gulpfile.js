gulp = require("gulp");
var sass = require("gulp-sass");
bourbon = require('node-bourbon');

function style() {
    return (
        gulp
        .src("src/scss/*.scss")
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        .on("error", sass.logError)
        .pipe(gulp.dest("dist/css/"))
    );
}

function watch() {
    gulp.watch('src/scss/**/*.scss', style)

}

exports.watch = watch;
exports.style = style;