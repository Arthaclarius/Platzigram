const
gulp = require('gulp'),
sass = require('gulp-sass'),
rename = require('gulp-rename')

//Tareas de Gulp

/* SASS */
gulp.task('styles', function(){
  //Obtenemos el archivo a procesar
  gulp.src('Sass/index.scss')
  //Aplicar el preprocesador Sass
  .pipe(sass())
  //Renombrar
  .pipe(rename('app.css'))
  //Generar archivo final
  .pipe(gulp.dest('public/assets/css'))
})

//Indicamos las tareas a procesar
gulp.task('default', ['styles'])
