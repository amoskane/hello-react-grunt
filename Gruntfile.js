module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [['babelify', {presets: ['react', 'es2015']}]]
        },
        src: ['src/main.jsx'],
        dest: 'dist/main.js',
      }
    },
    cssmin: {
      dist: {
        src: 'src/style.css',
        dest: 'dist/style.min.css',
      }
    },
    watch: {
      scripts: {
        files: ['src/*.jsx', 'src/style.css'],
        tasks: ["browserify", "cssmin"],
        options: {
          livereload: true,
          spawn: false,
        },
      },
    },
  });
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["browserify", "cssmin"]);
};
