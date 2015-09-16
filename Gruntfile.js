module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/release',
          src: ['*.css', '!*.min.css'],
          dest: 'css/minified',
          ext: '.min.css'
        }]
      }
    },
    concat_css: {
      options: {

      },
      all: {
        src: ["css/minified/*.min.css"],
        dest: "css/main.min.css"
      },
    },
    connect: {
      codewarrior: {
        port: process.env.PORT || 3000
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-connect');
  // Default task(s).
  grunt.registerTask('heroku', ['cssmin','concat_css','connect:codewarrior']);

};