# static-html-bundler
A node module that creates bundle for html page assets. All stylesheet links and script tags will be bundle and minify to single file according input options.

This module read an html file as an entry point. All stylesheets or scripts found between start and end property of tags option, will be bundle and minify into single file. Then bundled content as a new link or script will be write betwean start and end tag in html file.  

## Install

`npm install --save static-html-bundler`

## Use

To use, Add below require command

`const staticHtmlBundler = require("./static-html-bundler/bundler");`

Then you will need to call "bundle" method of staticHtmlBundler object with options object like this:
```javascript
const options = {
    "sourceFolder":"sampleResource/",
    "distFolder" :"dist/",
    "distJsFolder" :"js/",
    "distCssFolder":"css/",
    "inputHtml":"./sampleResource/index.html",
    "outputHtml" :"./dist/index.html",
    "tags" : [
        {
            "start": "<!-- css bundle 1 start-->",
            "end": "<!-- css bundle 1 end-->",
            "type" :"css",
            "name" : "css-bundle-1"
        
        },
        {
            "start": "<!-- js bundle 1 start-->",
            "end": "<!-- js bundle 1 end-->",
            "type" :"js",
            "name" : "js-bundles-1"
        }
        
    ]
    
}
staticHtmlBundler.bundle(options)
```
## options

### `sourceFolder`
Type : `string` 
Source folder name. This option will be used as a root folder to read JS/CSS files path.

### `distFolder`
Type : `string`

Output folder name. This option will be used as a root folder to write bundled and minfied JS/CSS files.

### `distJsFolder`
Type : `string`

Output JS bundled files path. This option will be concat to 'distFolder' option.

### `distCssFolder`
Type : `string`

Output CSS bundles files path. This option will be conact to 'distFolder' option.

### `inputHtml`
Type : `string`

Input html file path.

### `outputHtml`
Type : `string`

Output html file path that contains JS/CSS bundled files.

### `tags`
Type : `Array`

A list of tag objects that determine start and end of section in html file that contain scripts or stylesheet links. Every tag object contains this properties:

#### `start`
Type `string`

Start tag as a starting point to bundle and minify scripts or links.

#### `end`
Type `string`

End tag as ending point to bundle and minify scripts or links.

#### `type`
Type `string`

Type of content between star and end tags. (css or js)


#### `name`
Type `string`

Name of bundled files.


## Methods

### `.bundle`
Param: `Object` 

An option object




