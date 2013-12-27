module.exports = function(grunt) {

  grunt.config('uglify', {
    app: {
      files: {
        '_build/javascripts/minified.js':
          [
            'source/assets/javascripts/app/**/*.js',
            'source/assets/javascripts/libs/**/*.js'
          ]
        },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};
