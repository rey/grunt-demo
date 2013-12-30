module.exports = function(grunt) {

  grunt.config('uglify', {
    options: {
      report: true,
    },
    build: {
      files: {
        '_build/assets/javascripts/min.js':
        [
          'source/assets/javascripts/_concat.app.js'
        ]
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};
