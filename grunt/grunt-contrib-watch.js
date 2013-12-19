module.exports = function(grunt) {
  grunt.config('watch', {
    compass: {
      files: ['assets/stylesheets/sass/**/*.sass'],
      tasks: ['compass'],
    },
    jshint :{
      files: ['<%= jshint.app.src %>'],
      tasks: ['jshint'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
