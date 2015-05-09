currentPage={};

currentPage.init = function() {
	console.log("ListPage :: init")
};

currentPage.loadPage = function(pageIndex) {
	console.log("ListPage :: loadPage :: pageIndex: " + pageIndex);
	$("body").load(path + "pages/" + pageIndex + ".html");
	$.getScript(path + "js/" + pageIndex + ".js", function() {
		if (currentPage.init) {
			currentPage.init();
		}
	});
};