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

gulp.task('default', gulp.series( 'clean', function(done) {
    spawn('./node_modules/.bin/ngc',['-p src/tsconfig.app.json'],{shell: true});
    done();
}));
