Mini Project 1
==============

Write a "single-page app" and develop its configuration management.

**Goal**: Gain experience with the following technologies:

[Bootstrap 3](http://getbootstrap.com/), [knockoutjs](http://knockoutjs.com/), [less](http://lesscss.org/), javascript, [grunt](http://gruntjs.com/), [bower](http://bower.io/), [node.js](http://nodejs.org/), [d3](http://d3js.org/), [npm](https://www.npmjs.org/)

**Learning outcome**: Realize that most software engineering projects will require learning many technologies together.  Gain experience in using some technologies, such as grunt and bower, to help bridge the multiple technologies in a single process.

### Getting Started with your Template

Get the project template using git:

1) `git clone https://github.ncsu.edu/CSC510-Fall2014/MiniProject1-Template.git`

2) Run `npm install` to get project dependencies installed (grunt, bower). Npm is installed when you install node.js.

3) Run `bower install` to get web dependencies installed (bootstrap,jquery).

4) Test out grunt by running `grunt less` to run the less task that will compile the bootstrap less file into a css file usable by your site.  Open `www\index.html` in your browser.

### Use [bower](http://bower.io/) to manage components.

Use bower to install additionally install:

* knockoutjs
* d3

Dependencies should be saved in `bower.json` using the `-S` option.

### App content and javascript

* Use [bootstrap 3](http://getbootstrap.com/) to create responsive layout (resilient to mobile screen sizes).
* Use [knockoutjs](http://knockoutjs.com/) to process user input and any dynamic content.
* Use [d3](http://d3js.org/) add a visualization component to the site. See [http://bl.ocks.org/mbostock](http://bl.ocks.org/mbostock) for inspiration (you can directly use any example as well).

### Use [grunt](http://gruntjs.com/) to manage build tasks.

Create a grunt task to:

* Extend current `less` task to compile an additional `local.less` file, containing your custom presentation elements into a css file.
* Create a new grunt task, called `package` to concat all javascript libraries into a single `"www\js\libs.js"` file.  Additionally, minify the content using uglify or an equivalent minifying tool. 
* Create a new grunt task, called `validate` that runs `jshint` on all javascript files in app.
* Create a `build_all` task that runs all the steps needed to build the web app.

### Grading

You will be graded on the configuration management of your app as well as your use of technology in building the app.

* 10% bower setup
* 40% grunt tasks
* 20% app layout and content
* 15% incorporate user input/dynamic content with knockoutjs
* 15% incorporate visualization with d3
