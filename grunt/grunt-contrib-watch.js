module.exports = function(grunt) {

  grunt.config('watch', {
    compass: {
      files: ['<%= compass.dev.src %>'],
      tasks: ['compass:dev'],
      options: {
        livereload: {
          port: 1337,
        },
      },
    },
    jshint: {
      files: ['<%= jshint.app.src %>'],
      tasks: ['jshint'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
