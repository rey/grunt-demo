module.exports = function(grunt) {

  grunt.config('watch', {
    compass: {
      files: ['<%= compass.dev.src %>'],
      tasks: ['compass:dev'],
    },
    jshint: {
      files: ['<%= jshint.dev.src %>'],
      tasks: ['jshint:dev'],
    },
    concat: {
      files: ['<%= concat.dev.src %>'],
      tasks: ['concat:dev'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
