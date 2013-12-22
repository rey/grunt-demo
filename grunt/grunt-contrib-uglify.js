module.exports = function(grunt) {

  grunt.config('uglify', {
    app: {
      files: {
        'assets/_deploy/javascripts/minified.js':
          [
            'assets/javascripts/app/**/*.js',
            'assets/javascripts/libs/**/*.js'
          ]
        },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};