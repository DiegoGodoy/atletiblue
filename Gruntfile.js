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
            src: "app/scripts/**/*.js",
            dest: "app/scripts/juntos.js"
          }
        },
        uglify:
        {
          js:
          {
            src: "app/scripts/juntos.js",
            dest: "app/scripts/juntosComprimidos.js"
            
          },
          css:
          {
            src: ["app/views/noticias/noticia1.html","app/views/noticias/noticia1.html","app/views/noticias/noticia1.html","app/views/noticias/noticia1.html",
                  "app/views/noticias/noticia1.html","app/views/noticias/noticia1.html","app/views/noticias/noticia1.html","app/views/noticias/noticia1.html",
                  "app/views/noticias/noticia1.html","app/views/noticias/noticia1.html","app/views/noticias/noticia1.html"],
            dest: "app/scripts/juntosComprimidos.js"
          },
          html:
          {
            src: "app/scripts/juntos.js",
            dest: "app/scripts/juntosComprimidos.js"
          }
        }
});

grunt.loadNpmTasks("grunt-contrib-concat");
grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask('default', [
    'concat',
    'uglify'
  ]);
};
