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
    site_css:{
	  files:['_site/css/*.css'],
	  options:{
	  },
	  tasks:['shell:echo']
    },

  
    htmls:{
        files:['_site/*/*'],
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
    },
    post:{
	command: "python jekyllPost.py",
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

