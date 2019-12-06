//const gulp = require('gulp')
import gulp from 'gulp'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import jsmin from 'gulp-jsmin'
import imagemin from 'gulp-imagemin'
import imageminWebp from 'imagemin-webp'

//Métodos de gulp
/*
  gulp.task('tarea', () => {}) - define una tarea
  gulp.src('archivo origen') - define el origen
  gulp.dest('archivo origen') - define el destino
  gulp.pipe() - utilizar un plugin o funcionalidad para gulp
  gulp.watch('archivo origen') - vigilar u observar tareas o archivos y directorios
*/

const reload = browserSync.reload,
  reloadFiles = [
    './app.js',
    './main.css',
    './**/*.php'
  ], proxyOptions = {
    proxy: 'localhost:8080/_boilerplate/',
    notify: false
  }, imageminOptions = {
    progressive: true,
    optimizationLevel: 5, // 0-7 low-high
    interlaced: true,
    svgoPlugins: [{ removeViewBox: false }]
  }

//Tarea levanta el servidor !!
gulp.task('server', () => browserSync.init(reloadFiles, proxyOptions))

//Procesamiento del código Sass !!
gulp.task('css', () => {
  gulp.src('./css/main.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 5 versions'] }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./css/'))
    .pipe(gulp.dest('./'))
    .pipe(reload({ stream: true }))
})


//Transpilación del código Javascript ES6 a código Javascript entendible por todos los navegadores. 
gulp.task('js', () => {
  browserify('./js/app.js')
    .transform(babelify)
    .bundle()
    .on('error', err => console.log(err.message))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./js/'))
    .pipe(jsmin())
    .pipe(gulp.dest('./'))
    .pipe(reload({ stream: true }))
})

//Optimiza las imagenes, menor peso.
gulp.task('img', () => {
  gulp.src('./assets/img/**/**')
    .pipe(imagemin(imageminOptions))
    .pipe(gulp.dest('./img'))
})

gulp.task('default', ['server', 'css', 'js'], () => {
  gulp.watch('./css/**/*.+(scss|css)', ['css'])
  gulp.watch('./js/**/*.+(js|json)', ['js'])
})
