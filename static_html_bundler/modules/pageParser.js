const SearchTextHelper = require('./searchTextHelper');


class PageParse {
	constructor(searchTextHelper = new SearchTextHelper()){
		 this.searchTextHelper = searchTextHelper;
	}
	findPathesBetween(htmlData, startTag,endTag){
		const textBetween = this.searchTextHelper.findTextBetweenTags(htmlData, startTag, endTag);
		return this.searchTextHelper.findHrefSrcBetweenAll(textBetween);
	}
	findAndReplacePathesBetween(htmlData, startTag, endTag, replaceData){
		const textBetween = this.searchTextHelper.findTextBetweenTags(htmlData, startTag, endTag);
		return htmlData.replace(`${startTag}${textBetween}${endTag}`, replaceData);
	}
}

module.exports = PageParse;