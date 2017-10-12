const
//Gulp
gulp        = require('gulp'),
//Permite cambiar el nombre del archivo final
rename      = require('gulp-rename'),
//watchify: Automatizar gulp
watchify       = require('watchify'),
//Sass: preprocesador
sass        = require('gulp-sass'),
//Copilador de javascript
babel       = require('babelify'),
//Elegir el tipo de resultado por Babel
preset     = require('babel-preset-es2015'),
//Package Bundling
browserify  = require('browserify'),
//Transformar el Bundler a javascript
source      = require('vinyl-source-stream')

//Tareas de Gulp

/* SASS */
gulp.task('styles', function(){
  //Obtenemos el archivo a procesar
  gulp.src('sass/index.scss')
  //Aplicar el preprocesador Sass
  .pipe(sass())
  //Renombrar
  .pipe(rename('app.css'))
  //Generar en public
  .pipe(gulp.dest('public/assets/css'))
})

/* Assets */
gulp.task('assets', function () {
  //Obtener las fuentes de los archivos
  gulp.src('assets/*/*')
  //Generarlos en public
  .pipe(gulp.dest(('public/assets')))
})

/* Scripts */
/*
gulp.task('scripts', function(){
  //Cargar browserify en el index
  browserify('./src/index.js')
  //Transformar el javascript a ES2015
  .transform(babel, preset)
  //Generarlo
  .bundle()
  //Transformar el bundle a un JS
  .pipe(source('index.js'))
  //Renombrarlo
  .pipe(rename('app.js'))
  //Generarlo en public
  .pipe(gulp.dest('public/src'))
})
*/



function compile(watch) {
  var bundle =  watchify(browserify('./src/index.js'))

  //Metodo para generar los scripts
  function rebundle(){
    //Utilizamos el bundle del watchify
    bundle
    .transform(babel, preset)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public/src'))
  }

  //Si watch aplica activar las actualizaciones
  if (watch) {
    //
    bundle.on('update', function(){
      console.log('--> Bundling...');
      rebundle();
      console.log('--> Bundled');
    })
  }

  rebundle();
}

//Ejecucion normal del Bundling
gulp.task('build', function () {
  return compile()
})

//Activar el Bundling automatico
gulp.task('watch', function () {
  return compile(true)
})

//Indicamos las tareas a procesar
gulp.task('default', ['styles', 'assets', 'build'])
