module.exports = function(grunt) {
  grunt.config('watch', {
    compass: {
      files: ['assets/stylesheets/sass/**/*.sass'],
      tasks: ['compass'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
