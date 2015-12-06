module.exports = function( grunt ) { // just a node thing

  // Configure tasks
  grunt.initConfig( {
    pkg: grunt.file.readJSON( 'package.json' ),

    // Clean 'non concatenated' assets (e.g. HTML and Images)
    clean: {
      html: [ 'build/**/*.html' ],
      images: [ 'build/images/**/*' ]
    },

    // HTML Tasks
    htmlmin: { // Runs on 'build' task only.
      build: {
        options: {
          removeComments: true,
          removeCommentsFromCDATA: true,
          collaspeWhitespace: true,

          /*
           * Gleaned from:
           *  http://udacity.github.io/frontend-nanodegree-styleguide/index.html
           */
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,

          minifyJS: true,
          minifyCSS: true
        },
        files: [ {
          expand: true, // Enable dynamic expansion
          cwd: 'src/', // Src matches relative to this path.
          src: [ '**/*.html' ],
          dest: 'build/'
        } ]
      },
      dev: {
        files: [ {
          expand: true, // Enable dynamic expansion
          cwd: 'src/', // Src matches relative to this path.
          src: [ '**/*.html' ],
          dest: 'build/'
        } ]
      }
    },

    // CSS Tasks
    csslint: {
      options: {
        "box-sizing": false,
        "universal-selector": false
      },
      src: [ 'src/css/**/*.css', '!src/css/grid.min.css',
        '!src/css/bootstrap.min.css'
      ]
    },
    concat: {
      concat: {
        src: [ 'src/css/**/*.css', '!src/css/grid.min.css',
        '!src/css/bootstrap.min.css'],
        dest: 'build/css/action.min.css' // Not actually minified.
      }
    },
    cssmin: {
      minify: { // Runs on 'build' task only.
        src: 'build/css/action.min.css',
        dest: 'build/css/action.min.css' // Actually minified
      }
    },

    // JS Tasks
    jshint: {
      all: [ 'Gruntfile.js', 'src/js/*.js', '!src/js/jquery.js', '!src/js/bootstrap.min.js' ]
    },
    uglify: {
      build: {
        src: 'src/js/**/*.js',
        dest: 'build/js/action.min.js'
      },
      dev: {
        options: {
          beautify: true,
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
        src: 'src/js/*.js',
        dest: 'build/js/action.min.js'
      }
    },

    /*
     * Images
     * Developer's Note: This may not be wholly necessary when 
     * optimizing from Photoshop, but is
     *  relatively simple to configure, so why not be safe?
     */
    imagemin: {
      dynamic: {
        // Grunt will dynamically search for files and build src-dest file mappings.
        files: [ {
          expand: true, // Enable dynamic expansion
          cwd: 'src/images/', // Src matches relative to this path.
          src: [ '**/*.{png,jpg,gif,svg}' ],
          dest: 'build/images/'
        } ]
      }
    },

    watch: {
      html: {
        files: [ 'src/**/*.html' ],
        tasks: [ 'clean:html', 'htmlmin:dev' ]
      },
      css: {
        files: [ 'src/css/*.css' ],
        tasks: [ 'csslint', 'concat' ]
      },
      js: {
        files: [ 'Gruntfile.js', 'src/js/*.js' ],
        tasks: [ 'jshint', 'uglify:dev' ]
      },
      images: {
        files: [ 'src/images/**/*.{png,jpg,gif,svg}' ],
        tasks: [ 'clean:images', 'imagemin' ]
      }
    }
  } );

  // Load the plugins
  grunt.loadNpmTasks( 'grunt-contrib-htmlmin' );
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-contrib-csslint' );
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Register the task(s).
  grunt.registerTask( 'default', [ 'csslint', 'clean:html', 'clean:images', 'htmlmin:dev', 'concat', 'jshint', 'uglify:dev', 'imagemin'
  ] );

  grunt.registerTask( 'build', [ 'clean:html', 'clean:images', 'htmlmin:build', 'concat', 'cssmin', 'jshint', 'uglify:build', 'imagemin'
  ] );
};