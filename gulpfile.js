//prettier-ignore
const gulp = require('gulp'), // основной модуль
      sass = require('gulp-sass')(require('sass')), // модуль препроцессора
      del = require('del'), // модуль очистки
      autoprefixer = require('gulp-autoprefixer'), // автопрефиксер
      csso = require('gulp-csso'), // css мнификатор
      babel = require('gulp-babel'),
      uglify = require('gulp-uglify'),
      fileinclude = require('gulp-file-include'),
      sourcemaps = require('gulp-sourcemaps'),
      image = require('gulp-tinypng-compress'),
      browsersync = require('browser-sync').create(),
      img2webp = require('gulp-webp'),
      newer = require('gulp-newer'),
      sftp = require('gulp-sftp'),
      svgmin = require('gulp-svgmin'),
	  webp = require('gulp-webp')

// пути
const path = {
	// пути стилей
	styles: {
		src: 'src/styles/scss/*.scss',
		dest: 'dist/css/',
	},
	// пути скриптов
	scripts: {
		src: 'src/scripts/**/*.js',
		dest: 'dist/scripts/',
	},
	// пути HTML
	html: {
		src: 'src/**/*.html',
		dest: 'dist/',
	},
	// пути к картинкам
	img: {
		src: 'src/assets/images/*.{png,jpg,jpeg,webp,gif}',
		dest: 'dist/assets/images/',
	},
	// пути к шрифтам
	fonts: {
		src: 'src/assets/fonts/*',
		dest: 'dist/assets/fonts/',
	},
	// путь к svg
	svg: {
		src: 'src/assets/images/svg/*.svg',
		dest: 'dist/assets/images/svg/',
	},
};

// ================ стили ===========
function clean() {
	return del(['dist/*', '!dist/assets/images']);
}

function stylesProd() {
	//prettier-ignore
	return gulp.src(path.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(csso({
        restructure: true,
        sourceMap: true,
        debug: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.styles.dest));
}

function stylesDev() {
	//prettier-ignore
	return gulp.src(path.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.styles.dest))
    .pipe(browsersync.stream());
}

// ================ скрипты ===========

function scripts() {
	return gulp
		.src(path.scripts.src, {
			sourcemaps: true,
		})
		.pipe(sourcemaps.init())
		.pipe(
			babel({
				presets: ['@babel/env'],
			})
		)
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.scripts.dest))
		.pipe(browsersync.stream());
}

// ================ html ===========

function html() {
	//prettier-ignore
	return gulp.src([path.html.src, '!src/components/html/**/*.html'])
    .pipe(fileinclude())
    .pipe(gulp.dest(path.html.dest))
    .pipe(browsersync.stream());
}

// ================= изображения ==============

function img() {
	//prettier-ignore
	return gulp.src(path.img.src)
    .pipe(newer(path.img.dest))
	.pipe(webp())
    .pipe(image({
        key: 'fPv2DXfQrCWJSzLR8wbSW3CfNmhNTYVg',
        sigFile: 'images/.tinypng-sigs',
        log: true
    }))
    .pipe(gulp.dest(path.img.dest))
}

function svg() {
	//prettier-ignore
	return gulp.src(path.svg.src)
    .pipe(svgmin())
    .pipe(gulp.dest(path.svg.dest))
}

function favicon() {
	return gulp.src('src/assets/favicon/*')
		.pipe(gulp.dest('dist/assets/favicon/'))
}

// =============== шрифты =============

function fonts() {
	return gulp.src(path.fonts.src)
		.pipe(gulp.dest(path.fonts.dest))
}

// ================ sftp

function sftprun() {
	//prettier-ignore
	return gulp.src('dist/**/*')
    .pipe(sftp({
        host: 'website.com',
        user: 'me',
        pass: '1234'
    }));
}

//=========================================================================

function watch() {
	browsersync.init({
		server: {
			baseDir: './dist/',
		},
	});
	gulp.watch(path.styles.src, stylesDev);
	gulp.watch(path.scripts.src, scripts);
	gulp.watch(path.html.src, html);
	gulp.watch('src/components/scss/*.scss', stylesDev);
	gulp.watch('src/components/js/*.js', scripts);
	gulp.watch('src/components/html/*.html', html);
	gulp.watch(path.img.src, img);
	gulp.watch(path.svg.src, svg);
}

// dev и prod
exports.prod = gulp.series(
	clean,
	gulp.parallel(scripts, stylesProd, fonts, html, img, svg, favicon)
);
exports.dev = gulp.series(
	clean,
	gulp.parallel(scripts, stylesDev, fonts, html, img, svg, favicon),
	watch
);
module.exports.default = this.dev;
exports.sftp = sftprun;
exports.fonts = fonts;
