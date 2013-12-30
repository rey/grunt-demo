module.exports = function(grunt) {

  grunt.config('uglify', {
    app: {
      files: {
        '_build/assets/javascripts/minified.js':
          [
            'source/assets/javascripts/concat.js'
          ]
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};
