module.exports = function(grunt) {
  grunt.config('compass', {
    dist: {
      options: {
        config: 'config.rb',
        force: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
};
