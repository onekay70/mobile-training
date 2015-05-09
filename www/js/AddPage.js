currentPage={};

currentPage.init = function() {
	console.log("AddPage :: init")
};

currentPage.back = function() {
	console.log("AddPage :: back");
	$("body").load(path + "pages/ListPage.html", function() {
		$.getScript(path + "js/ListPage.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}	
		});
	});
};