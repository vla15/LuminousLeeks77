const config = require('config')['knex'];

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    eslint: {
      target: ['Gruntfile.js', 'client/**/*.js', 'db/**/*.js', 'server/**/*.js']
    },

    mochaTest: {
      test: {
        options: {
          require: 'babel-register',
          reporter: 'spec'
        },
        src: ['client/test/**/*.js'] 
        // server/test/**/*.js',
        // "test": "mocha --compilers js:babel-core/register -r jsdom-global/register"
      }
    },

    pgcreatedb: {
      default: {
        connection: {
          user: config.connection.user,
          password: config.connection.password,
          host: config.connection.host,
          port: config.connection.port,
          database: 'template1'
        },
        name: config.connection.database
      }
    }

  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-pg');

  grunt.registerTask('default', ['eslint']);
  grunt.registerTask('test', ['mochaTest']);
};
