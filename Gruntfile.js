module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'CodeWarrior-Storefront/shared/css/release/build/',
          src: ['*.css', '!*.min.css'],
          dest: 'CodeWarrior-Storefront/shared/css/minified',
          ext: '.min.css'
        }]
      }
    },
    concat_css: {
      all: {
        src: [
          //All internal CSS
          "CodeWarrior-Storefront/shared/css/release/*.css",
        ],
        dest: "CodeWarrior-Storefront/shared/css/release/build/main.css"
      }
    },
    sprite:{
        all: {
          src: 'CodeWarrior-Storefront/shared/img/raw/*.png',
          dest: 'CodeWarrior-Storefront/shared/img/sprite/spritesheet.png',
          destCss: 'CodeWarrior-Storefront/shared/css/release/sprites.css',
          cssTemplate: 'CodeWarrior-Storefront/shared/handlebars/sprite.handlebars',
          padding: 5
        }
    },
    autoprefixer: {
        options: {
          browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        single_file: {
          src: 'CodeWarrior-Storefront/shared/css/release/build/main.css',
          dest: 'CodeWarrior-Storefront/shared/css/release/build/main.css'
        },
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          //All external JS 
          'CodeWarrior-Storefront/shared/js/external.min.js':[
            'bower_components/jquery/dist/jquery.min.js', 
            'bower_components/angular/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/slicknav/dist/jquery.slicknav.js',
            'bower_components/angular-animate/angular-animate.js'
          ],
          //All internal JS including custom JS
          'CodeWarrior-Storefront/shared/js/internal.min.js':[
            'CodeWarrior-Storefront/app.js', 
            'CodeWarrior-Storefront/controller/**/*.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s).
  grunt.registerTask('default', ['sprite','concat_css','autoprefixer','cssmin','uglify']);

};