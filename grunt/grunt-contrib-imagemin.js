module.exports = function(grunt) {

  grunt.config('imagemin', {
    app: {
      files: [
        {
          src: ['source/assets/images/**/*.{png,jpg,jpeg,gif}'],
          dest: '_build/images',
          expand: true,
        }
      ]
    },
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');

};
