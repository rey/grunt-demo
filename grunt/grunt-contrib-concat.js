module.exports = function(grunt) {

  grunt.config('concat', {
    options: {
      separator: ';',
    },
    app: {
      src: ['source/assets/javascripts/app/**/*.js', 'source/assets/javascripts/libs/**/*.js'],
      dest: 'source/assets/javascripts/concat.js',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

};
