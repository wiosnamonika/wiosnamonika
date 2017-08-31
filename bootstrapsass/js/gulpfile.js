var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function(){
    return gulp.src('scss/main.scss')
            .pipe(sass())
            .pipe(gulp.dest('css'))
    
})
gulp.task('watch', function(){
    gulp.watch('scss/*.scss',['sass']);
    
})

gulp.task('kawa', function(){
    console.log('parz kawe');
});

//komplacja plikow sass do scss

