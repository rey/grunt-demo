module.exports = function(grunt) {

  // load all grunt tasks. ALL OF THEM
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['assets/stylesheets/sass/**/*.sass'],
        tasks: ['compass']
      }
    },

    compass: {
      dist: {
        options: {
          // specify the location of the Compass configuration file explicitly
          config: 'config.rb',
          // allows compass to overwrite existing files
          force: true
        }
      }
    }

  });

  grunt.registerTask('default', ['watch']);

}
