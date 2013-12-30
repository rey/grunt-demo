module.exports = function(grunt) {

  grunt.config('imagemin', {
    app: {
      files: [
        {
          cwd: 'source/',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: '_build',
          expand: true,
        }
      ]
    },
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');

};
