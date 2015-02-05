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
            src: "app/styles/styles.css",
            dest: "app/styles/stylesComprimido.css"
          },
          html:
          {
            src: ["app/views/noticias/noticia1.html","app/views/noticias/noticia2.html","app/views/noticias/noticia3.html","app/views/noticias/noticia4.html",
                  "app/views/noticias/noticia5.html","app/views/contacto.html","app/views/historia.html","app/views/main.html",
                  "app/views/noticias.html","app/views/plantilla.html","app/views/index.html"],
            dest: ["app/views/Comprimido/noticia1Comprimido.html","app/views/Comprimido/noticia2Comprimido.html","app/views/Comprimido/noticia3Comprimido.html",
                  "app/views/Comprimido/noticia4Comprimido.html","app/views/Comprimido/noticia5Comprimido.html","app/views/Comprimido/contactoComprimido.html",
                  "app/views/Comprimido/historiaComprimido.html","app/views/Comprimido/mainComprimido.html","app/views/Comprimido/noticiasComprimido.html",
                  "app/views/Comprimido/plantillaComprimido.html","app/views/Comprimido/indexComprimido.html"]
          },
        }
});

grunt.loadNpmTasks("grunt-contrib-concat");
grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask('default', [
    'concat',
    'uglify'
  ]);
};
