var gulp = require("gulp");
var server = require("gulp-webserver");
var concat = require("gulp-concat");

gulp.task("server",function(){
    return gulp.src("./src")
           .pipe(server({
               port:"9898",
               open:true,
               livereload:true
           }))
})