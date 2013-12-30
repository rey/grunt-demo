module.exports = function(grunt) {

  grunt.config('jekyll', {
    dev: {
      source: ['source/**/*.html'],
      options: {
        config: '_config.yml',
        serve: true,
      },
    },
    app: {
      options: {
        config: '_config.yml'
      },
    },
  });

  grunt.loadNpmTasks('grunt-jekyll');

};
