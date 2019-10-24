# static-html-bundler
A node module that creates bundle for html page assets. All stylesheet links and script tags will be bundle and minify to single file according input options.

## Install

`npm install --save static-html-bundler`

## Use

To use, Add below require command
`const staticHtmlBundler = require("./static-html-bundler/bundler");`

Then you will need to call "bundle" method of staticHtmlBundler object with this options object:
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

