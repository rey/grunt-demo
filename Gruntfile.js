module.exports = function(grunt) {

  // initialise le config
  grunt.initConfig({
    pkg: require('./package.json'),
  });

  // load per task config from separate files
  grunt.loadTasks('grunt');

  // register alias tasks
  grunt.registerTask('dev', 'Tasks for development, son',
    ['watch']
  );

  grunt.registerTask('build', 'Run this before deploy',
    [
      'compass:build',
      'jshint:build',
      'concat:build',
      'uglify:build',
      'imagemin'
    ]
  );

  grunt.registerTask('default', ['dev']);

};
