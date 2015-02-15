var page_getProperties = function() {	
	var selectedEl = $0;
	var retval;
	for (var i = 0; i < selectedEl.attributes.length; i++) {
		var attrib = selectedEl.attributes[i];
		retval = retval + ":::" + attrib.name + " = " + attrib.value;
	}
    return selectedEl;
}


var obj_getProperties = function() {
	retval = '';	
	var selectedEl = $0;
	var retval;
	for (var i = 0; i < selectedEl.attributes.length; i++) {
		var attrib = selectedEl.attributes[i];
		retval = retval + ":::" + attrib.name + " = " + attrib.value;
	}
    return retval;
}

chrome.devtools.panels.create("Objects Collection",
"16_16.png",
"panel.html",
function(panel) {
	panel.onShown.addListener(function(win) {	
	chrome.devtools.inspectedWindow.eval(
           "(" + obj_getProperties.toString() + ")()",
           function(result, isException) {
			 var table = win.document.getElementById("objtbl");
			 var row = table.insertRow(1);
			 var cell1 = row.insertCell(0);
			 cell1.innerHTML = "<input type='checkbox'>";			 
			 var cell2 = row.insertCell(1);
			 cell2.innerHTML = result;             
           }
      );
		
	});
});

chrome.devtools.panels.elements.createSidebarPane(
    "Object Properties",
    function(sidebar) {
  function updateElementProperties() {
    sidebar.setExpression("(" + page_getProperties.toString() + ")()");	
  }
  updateElementProperties();
  chrome.devtools.panels.elements.onSelectionChanged.addListener(
      updateElementProperties);
});