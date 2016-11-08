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
    }
  });
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["browserify"]);
};
