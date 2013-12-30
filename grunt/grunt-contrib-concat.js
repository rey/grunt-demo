module.exports = function(grunt) {

  grunt.config('concat', {
    options: {
      separator: ';',
    },
    dev: {
      src: [
        'source/assets/javascripts/app/**/*.js',
        'source/assets/javascripts/lib/**/*.js'
      ],
      dest: 'source/assets/javascripts/_concat.dev.js',
    },
    build: {
      src: [
        'source/assets/javascripts/app/**/*.js',
        'source/assets/javascripts/lib/**/*.js'
      ],
      dest: 'source/assets/javascripts/_concat.app.js',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

};
