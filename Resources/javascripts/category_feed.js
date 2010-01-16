var tableView;
var data = [];
var template = {
 rowHeight:50,
 layout:[
   {type:'text', fontSize:18, fontWeight:'bold', left:10, top:12, width:290, height:40, color:'#222', name:'title'}
]};

function buildData(post, index) {
	data.push({title:item.title});
}

function displayCategories(categories) {
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


function retrieveCategories() {
    Item.categories(displayCategories);
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
	retrieveCategories();
};
