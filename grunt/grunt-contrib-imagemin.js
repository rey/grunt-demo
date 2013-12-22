module.exports = function(grunt) {

  grunt.config('imagemin', {
    app: {
      files: [
        {
          cwd: 'assets/images/',
          expand: true,
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: 'assets/_build/images'
        }
      ]
    },
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');

};
