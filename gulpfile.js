const gulp = require('gulp');
const { spawn } = require('child_process');
const fs = require('fs');
const rimdir = require('rimraf');

gulp.task('clean', function(done) {
    if (fs.existsSync('compiled')) {
        rimdir('compiled', function handle(error) {
            if (error !== null) {
                console.log('Error in deleting', error);
            }
        });
    }
    done();
});

gulp.task('compile', function(done) {
    spawn('./node_modules/.bin/ngc',['-p src/tsconfig.app.json'],{shell: true})
        .on('close', function() {
            fs.copyFileSync('build/package.json', 'compiled/package.json');
            done();
        });
});

gulp.task('move-npmrc', function(done) {
    // move .npmrc file having your private repo config
    fs.copyFileSync('.npmrc', 'compiled/.npmrc');
    done();
});

gulp.task('package:dev', gulp.series('move-npmrc', function(done) {
    // push to your development/local registry
    spawn('cd compiled && npm publish', {shell: true})
    done();
}));

gulp.task('package', function(done) {
    spawn('cd compiled | npm publish',{shell: true})
    done();
});

gulp.task('remove-package', function(done) {
    spawn('npm unpublish shapize', {shell: true})
        .on("close", function(code, signal) {
            done();
        });
});

gulp.task('default', gulp.series('clean', 'compile', 'package:dev'));
gulp.task('build:package', gulp.series('clean', 'compile', 'package'));
