//Gruntfile.js in general has the form:
// module.exports=function(grunt){
//	grunt.initConfig({config object});
//      	the config object is generally of the form:
//			{ task1:{option object for task1}, anotherTask:{option object for anotherTask}}
//	otherSetupFunctions like grunt.loadNpmTasks, grunt.registerTask
//  }

module.exports = function(grunt) {

grunt.initConfig({
  watch: {

      options:{livereload:true},

    scss: {
      files: ['scss/*.scss'],
      tasks: ['sass:dist'],
    },
     build:{
	  files:['css/*.css','js/*.js','_layouts/*.html','*.html','_posts/*.md','_posts/*.markdown', '_posts/*.html'],
	  tasks: ["shell:jekyllBuild"]
    },

  
    simplyReload:{
        files:['_site/*/*'],
	}
},//end of watch task config
  sass:{
	dist:{
		src:['scss/*.scss'],
		dest:'css/index.css'
	}


},//end of sass config

	connect:{
		site:{
		  options:{
		  keepalive:true,
	          hostname:'0.0.0.0',
		  port:9090,
		  base:'./_site'
		  }
		}
	}//end of connect config
,
  shell:{
    jekyllBuild:{
       command: "jekyll build -s . -d ./_site" 
     },
    echo:{
      command: "echo 'hi there'",
      options:{
        stdout:true
      }
    }
  }//end of shell config


});
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-shell');
};

