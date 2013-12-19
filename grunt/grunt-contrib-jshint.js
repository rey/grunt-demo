module.exports = function(grunt) {

  grunt.config('jshint', {
    app: {
      src: ['assets/javascripts/app/**/*.js'],
      options: {},
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};
