var tableView;
var data = [];
var template = {
 rowHeight:50,
 layout:[
   {type:'text', fontSize:22, fontWeight:'bold', left:10, top:10, width:290, height:40, color:'#222', name:'title'}
]};

function displayHaves(haves) {
    for (i in haves) {
        try {
            data.push({'title':haves[i].title});
        } catch(e) {}
    }
    var win;
    tableView = Titanium.UI.createTableView({
        template:template, 
        data:data
        }, function(eventObject) {
            win = Titanium.UI.createWindow({url:'/category_feed.html', title:eventObject.rowData.title});
            win.open({animated:true});
        });
    Titanium.UI.currentWindow.addView(tableView);
    Titanium.UI.currentWindow.showView(tableView);
}

function retrieveHaves() {
    Item.haves(displayHaves);
}

window.onload = function(){
	document.getElementById("loading").style.display = "block";
	if(Titanium.Platform.name == 'android') {
		activityIndicator = Titanium.UI.createActivityIndicator();
		activityIndicator.setMessage('Loading...');
    activityIndicator.setLocation(Titanium.UI.ActivityIndicator.DIALOG);
    activityIndicator.setType(Titanium.UI.ActivityIndicator.INDETERMINANT);
	} else {
		activityIndicator = Titanium.UI.createActivityIndicator({id:'loading', style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG});
	}
	activityIndicator.show();
	retrieveHaves();
};
