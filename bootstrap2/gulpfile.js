var gulp = require('gulp');
var sass = require('gulp-sass');
//var bootstrap = require('bootstrap-sass'); 
gulp.task('sass', function(){
    return gulp.src('scss/bootstrap.scss')  
            .pipe(sass())
            .pipe(gulp.dest('css'))
    
})
gulp.task('watch', function(){
    gulp.watch('scss/*.scss',['sass']);
    
})

gulp.task('kawa', function(){
    console.log('parz kawe');
});

//komplacja plikow sass do scss nie
//jak sprawdzic czy jest ok?dziala..... watcha jak przerywasz i od nowa odpalasz to wychodzi na to samo
// aalle powinien Ci się robić folder CSS//hmm jeszcze chwilke,na zajeciach tworzylismy osobno .scss i tam pisalismy i to wklejalismy jako sciezke w koncu sobei przypomnialam
//masz jeszcze chwile? yhm xd
// tylko jak masz z _ to go nie przerobi na CSSa ale nam mowili zeby dawac z podloga wszystkie nazwy scss..
// bo powinien być jeden np. main.scss, gdzie robisz importy pozostałych . iz waraz tspe . zaraz spr no dobra