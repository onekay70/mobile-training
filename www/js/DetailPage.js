currentPage={};

currentPage.init = function() {
	console.log("DetailPage :: init")
};

currentPage.back = function() {
	console.log("DetailPage :: back");
	$("body").load(path + "pages/ListPage.html", function() {
		$.getScript(path + "js/ListPage.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}	
		});
	});
};