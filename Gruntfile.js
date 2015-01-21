// Generated on 2015-01-13 using generator-angular 0.9.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {



  // Define the configuration for all the tasks
  grunt.initConfig(
      {
        concat:
        {
          files:
          {
            src: "app/scripts/controllers/*.js",
            dest: "app/scripts/controllers/juntos.js"
          }
        }
});

grunt.loadNpmTasks("grunt-contrib-concat");

  grunt.registerTask('default', [
    'concat'
  ]);
};
