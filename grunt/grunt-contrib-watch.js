module.exports = function(grunt) {

  grunt.config('watch', {
    options: {
      livereload: {
        port: 1337,
      },
    },
    compass: {
      files: ['<%= compass.dev.src %>'],
      tasks: ['compass:dev'],
    },
    jshint: {
      files: ['<%= jshint.app.src %>'],
      tasks: ['jshint'],
    },
    concat: {
      files: ['<%= concat.app.src %>'],
      tasks: ['concat'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
