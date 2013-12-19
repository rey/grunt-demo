module.exports = function(grunt) {
  grunt.config('compass', {
    dev: {
      options: {
        config: 'config.rb',
        force: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
};
