var tabs = Titanium.UI.getTabs();

window.onload = function() {
  Titanium.UI.currentWindow.addEventListener('focused',function(e) {
		setTimeout(function() {
			if((Titanium.App.Properties.getString("username") == null || Titanium.App.Properties.getString("password") == null)) {
    		Titanium.UI.setActiveTab(tabs[1]);
			}
		},400);
	});
};