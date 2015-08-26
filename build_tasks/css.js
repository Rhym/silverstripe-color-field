module.exports = function (grunt) {
  'use strict';

  var config = grunt.config;

  /** =========================================
   * CSS
   ===========================================*/

  /** -----------------------------------------
   * Sass
   * ----------------------------------------*/

  config.set('sass.all', {
    files: [{
      '<%= directories.silverstripeColorField %>/css/colorpicker.css': '<%= directories.silverstripeColorField %>/scss/colorpicker.scss'
    }]
  });

  /** -----------------------------------------
   * Combine Media Queries
   * ----------------------------------------*/

  config.set('cmq.all', {
    options: {
      log: false
    },
    files: [{
      '<%= directories.silverstripeColorField %>/css/': ['<%= directories.silverstripeColorField %>/css/colorpicker.css']
    }]
  });

  /** -----------------------------------------
   * PostCSS
   * ----------------------------------------*/

  config.set('postcss.all', {
    options: {
      map: true,
      processors: [
        require('pixrem')(),
        require('autoprefixer-core')({
          browsers: 'last 3 versions'
        }),
        require('cssnano')()
      ]
    },
    dist: {
      src: '<%= directories.silverstripeColorField %>/css/*.css'
    }
  });

  /** -----------------------------------------
   * CSS Lint
   * ----------------------------------------*/

  config.set('csslint.strict', {
    options: {
      import: 2
    },
    src: ['<%= directories.silverstripeColorField %>/css/colorpicker.css']
  });

  config.set('csslint.lax', {
    options: {
      import: false
    },
    src: ['<%= directories.silverstripeColorField %>/css/colorpicker.css']
  });

  /** =========================================
   * Watch
   ===========================================*/

  config.set('watch', {
    files: ['<%= directories.silverstripeColorField %>/scss/**/*.scss'],
    tasks: ['sass', 'cmq', 'postcss'],
    options: {
      spawn: false
    }
  });

};
