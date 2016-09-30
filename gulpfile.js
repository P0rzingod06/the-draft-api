var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    env = require('gulp-env');

gulp.task('default', function(){
    nodemon({
        script: 'server.js',
        ext: 'js',
        env: {
            PORT: 12345
        },
        ignore: ['./node_modules/**']
    }).on('restart', function(){
            console.log('Found Changes. Restarting...');
    });
});