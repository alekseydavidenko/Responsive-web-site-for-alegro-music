const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch('styleGulp.css', ['styles']);
});
