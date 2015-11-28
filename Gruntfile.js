
module.exports = function(grunt) {

  // All upfront config goes in a massive nested object.
  grunt.initConfig({
    distFolder: 'www',
    srcFolder: 'src',
    port: 8080,
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      // Specify some options, usually specific to each plugin.
      options: {
        // Specifies string to be inserted between concatenated files.
        separator: '\n'
      },
      dist: {
        src: ['<%= srcFolder %>/js/lib/*.js', '<%= srcFolder %>/js/states/*.js'],
        dest: '<%= distFolder %>/js/main.js'
      }
    },
    copy: { 
      assets: { 
        files: [{
            expand: true,
            cwd: '<%= srcFolder %>/assets',
            src: ['**'],
            dest: '<%= distFolder %>/assets'
          }]
      },
      index:{
        files: [{
            expand: true,
            cwd: '<%= srcFolder %>',
            src: ['*.html'],
            dest: '<%= distFolder %>'
          }]
      }
    },
    clean: ['<%= distFolder %>/*'],
    connect: {
      client: {
        options: {
          port: '<%= port %>',
          base: '<%= distFolder %>/',
        }
      }
    },
    watch: {
      client: {
        files: ['<%= srcFolder %>/**/*'],
        tasks:['refresh'],
        options:{
          livereload: true
        }
      }
    },
    open : {
      server : {
        path: 'http://localhost:<%= port %>'
      }
    }
  }); // The end of grunt.initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['clean', 'concat', 'copy', 'connect:client', 'watch:client', 'open:server']);
  grunt.registerTask('refresh', ['clean', 'concat', 'copy']);

  // Register our own custom task alias.
  grunt.registerTask('build', ['concat']);
};