module.exports = function(grunt) {

  grunt.config('watch', {
    options: {
      //livereload: {
      //  port: 1337,
      //},
    },

    jekyll: {
      files: ['<%= jekyll.dev.source %>'],
      tasks: ['jekyll:dev'],
    },
    compass: {
      files: ['<%= compass.dev.src %>'],
      tasks: ['compass:dev'],
    },
    jshint: {
      files: ['<%= jshint.app.src %>'],
      tasks: ['jshint'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
