# static-html-bundler
A a node module that creates bundle for html page assets. All stylesheet links and script tags will be bundle and minify to single file according input options.

options object is like below
```javascript
    {
        "sourceFolder":"sampleResource/",
        "distFolder" :"dist/",
        "jsFolder" :"js/",
        "cssFolder":"css/",
        "inputHtmlPath":"./sampleResource/index.html",
        "outputHtmlPath" :"./dist/index.html",
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
```
