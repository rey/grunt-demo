module.exports = function(grunt) {

  grunt.config('compass', {
    dev: {
      src: ['assets/stylesheets/sass/**/*.sass'],
      options: {
        config: 'config.rb',
        cssDir: 'assets/stylesheets/css',
        outputStyle: 'expanded',
        noLineComments: false,
      },
    },
    app: {
      src: ['assets/stylesheets/sass/**/*.sass'],
      options: {
        config: 'config.rb',
        cssDir: 'assets/_build/css',
        outputStyle: 'compressed',
        noLineComments: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

};
