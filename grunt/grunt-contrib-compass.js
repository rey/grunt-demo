module.exports = function(grunt) {

  grunt.config('compass', {
    dev: {
      src: ['source/assets/stylesheets/sass/**/*.sass'],
      options: {
        config: 'config.rb',
        cssDir: 'source/assets/stylesheets/css',
        outputStyle: 'expanded',
        noLineComments: false,
      },
    },
    app: {
      src: ['source/assets/stylesheets/sass/**/*.sass'],
      options: {
        config: 'config.rb',
        cssDir: '_build/assets/css',
        outputStyle: 'compressed',
        noLineComments: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

};
