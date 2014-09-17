module.exports = function(grunt) {

  grunt.initConfig({

	  less: 
	  {
	      development: 
	      {
	        options: 
	        {
	          compress: true,
	          yuicompress: true,
	          optimization: 2
	        },
	        files: 
	        [{
	  				expand: true,
	  				cwd: "bower_components/bootstrap/less",
	  				src: "**/bootstrap.less",
	  				dest: "www/css/",
	  				ext: ".css"
	        }]
	      }
	  },
	  concat:
	  {
	  	package:{
	  		src:['www/js/ie-emulation-modes-warning.js','www/js/knockout.js','www/js/bootstrap.min.js', 'www/js/ie10-viewport-bug-workaround.js'],
	  		dest:'www/js/libs.js'
	  	}  	
	  },
      //jshint:
      // {
      // 	validate:{
      // 		{'www/js/lib.min.js':['www/js/libs.js']
      // 	}
      // }
      uglify: 
	{

	 // dist: {
	    files: {
	      'www/js/libs.min.js': ['www/js/lib.js']
	    }
	  //}
	},
      jshint:
     {
	  // define the files to lint
	  files: ['Gruntfile.js', 'www/js/libs.min.js',],
	  // configure JSHint (documented at http://www.jshint.com/docs/)
	  options: { 
            force: true,
	      // more options here if you want to override JSHint defaults
	    globals: {
	      jQuery: true,
	      console: true,
	      module: true
	    }
	  }
	}



  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  // This will automatically load any grunt plugin you install, such as grunt-contrib-less.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  require('load-grunt-tasks')(grunt);
  grunt.registerTask('package', 'concat');
  grunt.registerTask('validate', 'jshint');
  grunt.registerTask('default', ['less','concat','uglify','jshint']);	
  grunt.registerTask('build-all', ['less','concat','uglify','jshint']);

};