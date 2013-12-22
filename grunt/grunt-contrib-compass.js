module.exports = function(grunt) {

  grunt.config('compass', {
    app: {
      src: ['assets/stylesheets/sass/**/*.sass'],
      options: {
        config: 'config.rb',
        force: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

};
