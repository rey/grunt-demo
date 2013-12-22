module.exports = function(grunt) {

  grunt.config('watch', {
    compass: {
      files: ['<%= compass.app.src %>'],
      tasks: ['compass:dev'],
    },
    jshint :{
      files: ['<%= jshint.app.src %>'],
      tasks: ['jshint'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
