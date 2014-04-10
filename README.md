Auto Style Guide
================

A Style Guide with a lot of automatic build features.

## Dependencies

CodeKit 1 or CodeKit 2 (this project uses the .kit methods).

## Install

Put these files in the root of your project:

    /style-guide.kit
    /style-guide.html
    /style-guide/
    
## Set up

When you have put the files and folder in the right place, open the ```style-guide/config.kit``` file. This allows you to put in your project name, and project CSS path.

```
<!-- KIT VARIABLE == ENTER THE NAME OF YOUR PROJECT HERE -->
<!-- $projectName = [Project X] -->

<!-- KIT VARIABLE == ENTER THE DESCRIPTION OF YOUR PROJECT HERE -->
<!-- $projectDescription = [Description of Project X] -->

<!-- KIT VARIABLE == ENTER THE PATH TO YOUR PROJECT'S CSS FILE -->
<!-- $projectCSSPath = /css/style.css -->

<!-- KIT VARIABLE == ENTER A "HOW TO USE" HERE -->
<!-- $sgHowTo = This style guide shows how each of the elements within your website works. Click on "View Source" and you can then find the HTML that will generate the look and feel that you want. -->

```

## Colour config

This is a little trickier, since there are a lot of variables. Set up is mainly done in ```style-guide/colour-config.less```

## Top Menu

The Top Menu will be built automatically from the ````<h2 class="sg-element">````

## HTML Mark-up

Wrap your elements in this:

Wrap snippets in ```<div data-xrayhtml="flip" class="prism zeroclip"><p>Code here</p></div>````

## This ain't done yet

There's more to come: I suggest that you clone the project, and then you'll know when it has been updated.





