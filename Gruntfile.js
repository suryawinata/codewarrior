module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'CodeWarrior-Storefront/shared/css/release',
          src: ['*.css', '!*.min.css'],
          dest: 'CodeWarrior-Storefront/shared/css/minified',
          ext: '.min.css'
        }]
      }
    },
    concat_css: {
      options: {

      },
      all: {
        src: ["CodeWarrior-Storefront/shared/css/minified/*.min.css"],
        dest: "CodeWarrior-Storefront/shared/css/main.min.css"
      },
    },
    sprite:{
        all: {
          src: 'CodeWarrior-Storefront/shared/img/raw/*.png',
          dest: 'CodeWarrior-Storefront/shared/img/sprite/spritesheet.png',
          destCss: 'CodeWarrior-Storefront/shared/css/release/sprites.css',
          cssTemplate: 'CodeWarrior-Storefront/shared/handlebars/sprite.handlebars',
          padding: 5
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-spritesmith');
  // Default task(s).
  grunt.registerTask('heroku', ['sprite','cssmin','concat_css',]);

};

// NEED TO RECONFIG THE GRUNT
// module.exports = function(grunt) {
//   // Project configuration.
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),
//     watch: {
//         less: {
//             files: ['web/webroot/WEB-INF/_ui-src/shared/less/variableMapping.less','web/webroot/WEB-INF/_ui-src/shared/less/generatedVariables.less','web/webroot/WEB-INF/_ui-src/**/themes/**/less/variables.less','web/webroot/WEB-INF/_ui-src/**/themes/**/less/style.less','web/webroot/WEB-INF/_ui-src/**/themes/**/less/**.less'],
//             tasks: ['less'],
//         },
//         fonts: {
//             files: ['web/webroot/WEB-INF/_ui-src/**/themes/**/fonts/*'],
//             tasks: ['sync:syncfonts'],
//         },
//         ybasejs: {
//             files: ['web/webroot/WEB-INF/_ui-src/responsive/lib/ybase-0.1.0/js/**/*.js'],
//             tasks: ['sync:syncybase'],
//         },
//         jquery: {
//             files: ['web/webroot/WEB-INF/_ui-src/responsive/lib/jquery*.js'],
//             tasks: ['sync:syncjquery'],
//         },
//         customjs: {
//             files: ['web/webroot/WEB-INF/_ui-src/responsive/lib/customize/*.js'],
//             tasks: ['sync:synccustomjs'],
//         },
//         img:{
//           files: ['web/webroot/WEB-INF/_ui-src/**/themes/**/images/*'],
//             tasks: ['sprite'],
//         },
//     },
//     less: {
//         default: {
//             files: [
//                 {
//                     expand: true,
//                     cwd: 'web/webroot/WEB-INF/_ui-src/',
//                     src: '**/themes/**/less/style.less',
//                     dest: 'web/webroot/_ui/',
//                     ext: '.css',
//                     rename:function(dest,src){
//                        var nsrc = src.replace(new RegExp("/themes/(.*)/less"),"/theme-$1/css");
//                        return dest+nsrc;
//                     }
//                 },
//                 {
//                   expand: true,
//                     cwd: 'web/webroot/WEB-INF/_ui-src/',
//                     src: '**/themes/**/less/IEFix.less',
//                     dest: 'web/webroot/_ui/',
//                     ext: '.css',
//                     rename:function(dest,src){
//                        var nsrc = src.replace(new RegExp("/themes/(.*)/less"),"/theme-$1/css");
//                        return dest+nsrc;
//                     }
//                 },
//                 {
//                   expand: true,
//                     cwd: 'web/webroot/WEB-INF/_ui-src/',
//                     src: '**/themes/**/less/hybrisCmsLiveEdit.less',
//                     dest: 'web/webroot/_ui/',
//                     ext: '.css',
//                     rename:function(dest,src){
//                        var nsrc = src.replace(new RegExp("/themes/(.*)/less"),"/theme-$1/css");
//                        return dest+nsrc;
//                     }
//                 },
//                 {
//                   expand: true,
//                     cwd: 'web/webroot/WEB-INF/_ui-src/',
//                     src: '**/themes/**/less/errorPage.less',
//                     dest: 'web/webroot/_ui/',
//                     ext: '.css',
//                     rename:function(dest,src){
//                        var nsrc = src.replace(new RegExp("/themes/(.*)/less"),"/theme-$1/css");
//                        return dest+nsrc;
//                     }
//                 },
//                 {
//                     expand: true,
//                     cwd: 'web/webroot/WEB-INF/_ui-src/',
//                     src: '**/themes/**/less/parcelpoint.less',
//                     dest: 'web/webroot/_ui/',
//                     ext: '.css',
//                     rename:function(dest,src){
//                        var nsrc = src.replace(new RegExp("/themes/(.*)/less"),"/theme-$1/css");
//                        return dest+nsrc;
//                     }
//                 }

//             ]
//         },
//     },

//     sync : {
//       syncfonts: {
//         files: [{
//                 expand: true,
//           cwd: 'web/webroot/WEB-INF/_ui-src/',
//           src: '**/themes/**/fonts/*',
//           dest: 'web/webroot/_ui/',
//           rename:function(dest,src){
//                   var nsrc = src.replace(new RegExp("/themes/(.*)"),"/theme-$1");
//                   return dest+nsrc;
//              }
//         }]
//       },
//       syncybase: {
//         files: [{
//           cwd: 'web/webroot/WEB-INF/_ui-src/responsive/lib/ybase-0.1.0/js/',
//           src: '**/*.js',
//           dest: 'web/webroot/_ui/responsive/common/js',
//         }]
//       },
//       syncjquery: {
//         files: [{
//           cwd: 'web/webroot/WEB-INF/_ui-src/responsive/lib',
//           src: 'jquery*.js',
//           dest: 'web/webroot/_ui/responsive/common/js',
//         }]
//       },
//       synccustomjs:{
//         files: [{
//           cwd: 'web/webroot/WEB-INF/_ui-src/responsive/lib/customize',
//           src: '*.js',
//           dest: 'web/webroot/_ui/responsive/common/js/customize',
//         }]
//       },
//     },
    
//     sprite:{
//         all: {
//           src: 'web/webroot/WEB-INF/_ui-src/responsive/themes/qantas/images/*.png',
//           dest: 'web/webroot/_ui/responsive/theme-qantas/images/spritesheet.png',
//           destCss: 'web/webroot/_ui/responsive/theme-qantas/css/sprites.css',
//           cssTemplate: 'web/webroot/WEB-INF/_ui-src/responsive/themes/qantas/images/template.handlebars',
//           padding: 5
//         }
//     }
    
// });
 
//   // Plugins
//   grunt.loadNpmTasks('grunt-contrib-watch');
//   grunt.loadNpmTasks('grunt-contrib-less');
//   grunt.loadNpmTasks('grunt-sync');
//   grunt.loadNpmTasks('grunt-spritesmith');


//   // Default task(s).
//   grunt.registerTask('default', ['less', 'sync', 'sprite']);



// };