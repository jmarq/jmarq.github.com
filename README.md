<h2><a href="http://jmarq.github.io/basketball_charts">See it here</a></h2>
<h1>What is all of this?</h1>
<p>well, there is a jekyll blog setup (so you'll need ruby installed and the jekyll gem) 
	<ul>
		<li>/_posts</li>
		<li>/_layouts</li>
		<li>css</li>
		<li>index.html</li>
		<li>/images</li>
		<li>_config.yml</li>
	</ul>
as well as the node modules (/node_modules) and gruntfile (Gruntfile.js) necessary for some development machine automation. new.py is a script for easily generating a new post file.<p>
<p><h2>Grunt what?</h2>
grunt is a task running framework written in node.js.
to use the grunt automation in this repository you will need to have
node.js installed as well as the npm node package manager. Additionally you need to install grunt-cli globally with npm.  This allows you to run grunt tasks from the command line.  
<h3>Tasks?</h3>
Yeah, things like automatically running sass on some scss files when they change and running a livereload server that lets you see changes in the browser right after they occur in the files, without hitting refresh.  Jekyll blogs need to be rebuilt when their content changes.  This grunt setup does that automatically when any of the input files change. When the output files change, the livereload server can refresh your testing browser automatically.  When this is all triggered by a pre-compilation .scss file being changed and saved, the results can be satisfying.
</p> 
