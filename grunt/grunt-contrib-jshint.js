module.exports = function(grunt) {

  grunt.config('jshint', {
    dev: {
      src: ['source/assets/javascripts/app/**/*.js'],
      options: {},
    },
    build: {
      src: ['source/assets/javascripts/app/**/*.js'],
      options: {},
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};
