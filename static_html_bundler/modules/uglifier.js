const uglifyjs = require('uglify-es');
const uglifycss = require('uglifycss');
class uglifire{
	constructor(){
		this.jsOptions = {
			 output: {
				ast: true,
				code: true 
				// optional - faster if false
				},
			ecma:6,
			compress :{
			keep_fnames:false,
			toplevel:false 
			},
			mangle:false,
			toplevel:true
		}
		this.cssOptions = {
			maxLineLen: 500, 
			expandVars: true
		}
	}
	minifyJs(fileContent){
		try{
		var result = uglifyjs.minify(fileContent,this.jsOptions);
			if(result.error){
				console.error("Error minifying: " + result.error);
				return "";
			}
		return result.code;

		}catch(err){
			throw err;
			return "";
		}
	}
	minifyCss(fileContent){
		try{
			return uglifycss.processString(fileContent,this.cssOptions)
		}catch(err){
			throw err
		}
	}
	
}


module.exports = uglifire;