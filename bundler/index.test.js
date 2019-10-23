const fs = require("fs");
const staticHtmlBundler = require("./index");
const fileManager = new (require('./modules/fileManager'))();
const pageParser = new (require('./modules/pageParser'));
const uglifire = new (require('./modules/uglifier'));

describe('static html bundler',() => {
	const options ={
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
	
	const MOCK = {
		output : {
            html : "dist/index.html",
            css: "dist/css/css-bundle-1.css",
            js: "dist/js/js-bundles-1.js"
		},
		CSS : "<!-- css bundle 1 start--><link rel='stylesheet' href='css/css-bundle-1.css' /><!-- css bundle 1 end-->",
		JS : "<!-- js bundle 1 start--><script src='js/js-bundles-1.js' ></script><!-- js bundle 1 end-->"
	}
	
	test('dist hrml file exist', async() =>{
		await staticHtmlBundler.bundle(options);
		expect(fs.existsSync(MOCK.output.html)).toBe(true);
    })
    
    test("html file contains css bundle link", () =>{
        const htmlData = fileManager.readFile(MOCK.output.html);
        expect(htmlData.includes(MOCK.CSS)).toBe(true);
    })

    test("html file contains js bundle script", () =>{
        const htmlData = fileManager.readFile(MOCK.output.html);
        expect(htmlData.includes(MOCK.JS)).toBe(true);
    })
    test("dist css bundled file exist", () =>{
        expect(fs.existsSync(MOCK.output.css)).toBe(true);
    })
    test("dist js bundled file exist", () =>{
        expect(fs.existsSync(MOCK.output.js)).toBe(true);
    })
    
	
});