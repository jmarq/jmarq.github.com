module.exports = function(grunt) {

grunt.initConfig({
  watch: {
    scss: {
      files: ['scss/*.scss'],
      tasks: ['sass'],
      options: {
        // Start a live reload server on the default port 35729
      //  livereload: true,
      },
    },
     build:{
	  files:['css/*.css','js/*.js','_layouts/*.html','*.html','_posts/*.md','_posts/*.markdown', '_posts/*.html'],
	  tasks: ["shell:jekyllBuild"]
    },
    site_css:{
	  files:['_site/css/*.css'],
	  options:{
	  },
	  tasks:['shell:echo']
    },

  
    htmls:{
        files:['_site/*.html'],
	    options:{livereload:true}	
	}},
  sass:{
	dist:{
		src:['scss/*.scss'],
		dest:'css/index.css'
	}


},

	connect:{
		dist:{
		  options:{
		  keepalive:true,
	          hostname:'0.0.0.0',
		  port:8080,
		  base:'./_site'
		  }
		}
	}
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
  }


});
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-shell');
grunt.registerTask('serverWatch', ['connect:dist','watch']);
};

