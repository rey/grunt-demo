module.exports = function(grunt) {

  grunt.config('jshint', {
    files: ['assets/javascripts/app/**/*.js'],
    options: {
      globals: {
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};
