var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var cp = require('child_process');
var scsslint = require('gulp-scss-lint');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn(jekyll, ['build'], { stdio: 'inherit' })
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Compile files from _scss into both css and _includes
 */
gulp.task('sass-main', function () {
    console.log('Compiling SCSS');
    return gulp.src('_scss/main.scss')
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(minifycss())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest('_includes'))
        .pipe(browserSync.reload({ stream: true }));
});
gulp.task('sass-resume', function () {
    return gulp.src('_scss/resume.scss')
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(minifycss())
        .pipe(rename('resume.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest('_includes'))
        .pipe(browserSync.reload({ stream: true }));
});
gulp.task('sass-bio', function () {
    return gulp.src('_scss/bio.scss')
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(minifycss())
        .pipe(rename('bio.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest('_includes'))
        .pipe(browserSync.reload({ stream: true }));
});
gulp.task('sass-post-lists', function () {
    return gulp.src('_scss/post_listings.scss')
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(minifycss())
        .pipe(rename('post_listings.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest('_includes'))
        .pipe(browserSync.reload({ stream: true }));
});
gulp.task('sass-posts', function () {
    return gulp.src('_scss/posts.scss')
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(minifycss())
        .pipe(rename('posts.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest('_includes'))
        .pipe(browserSync.reload({ stream: true }));
});
gulp.task('sass-mediaqueries', function () {
    return gulp.src('_scss/media_queries.scss')
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(minifycss())
        .pipe(rename('media_queries.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest('_includes'))
        .pipe(browserSync.reload({ stream: true }));
});

/**
 * Lint .scss
 */
// gulp.task('scss-lint', function() {
//   gulp.src('_scss/**/*.scss')
//     .pipe(scsslint({
//         'bundleExec': true,
//         'config': 'lint-config.yml'
//     }));
// });

/**
 * Page Speed Insights
 */
// gulp.task('psi-desktop', function (cb) {
//     psi({
//         nokey: 'true',
//         url: site,
//         strategy: 'desktop',
//     }, cb);
// });

// gulp.task('psi-mobile', function (cb) {
//     psi({
//         nokey: 'true',
//         url: site,
//         strategy: 'mobile',
//     }, cb);
// });

/**
 * Wait for jekyll-build, then launch the Server with port 3020
 */

// gulp.task('browser-sync-psi', ['jekyll-build'], function() {
//     browserSync({
//         port: portVal,
//         open: false,
//         server: {
//             baseDir: '_site',
//         }
//     });
// });

// gulp.task('psi-seq', function (cb) {
//  return sequence(
//     'browser-sync-psi',
//     'ngrok-url',
//     'psi-desktop',
//     'psi-mobile',
//     cb
//  );
// });

// gulp.task('psi', ['psi-seq'], function() {
//     console.log('Woohoo! Check out your page speed scores!')
//     process.exit();
// })

/**
 * Watch scss files for changes & recompile AND lint :)
 * Watch html/md files, run jekyll & reload BrowserSync
 * Minify images too
 */
gulp.task('watch', function () {
    gulp.watch('_scss/**/*.scss', ['sass-main', 'sass-resume', 'sass-mediaqueries', 'sass-bio', 'sass-post-lists', 'sass-posts']);
    gulp.watch(['*.html', 'bio.html', '_layouts/*.html', '_includes/*.html', '_posts/**/*'], ['jekyll-rebuild']);
    // gulp.watch(['images/*'], ['imagemin']),
    // gulp.watch(['js/*.js'], ['jekyll-build'])
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);