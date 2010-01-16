var xhr = Titanium.Network.createHTTPClient();
var tableView;
var data = [];
var template = {
 rowHeight:50,
 layout:[
   {type:'text', fontSize:22, fontWeight:'bold', left:10, top:10, width:290, height:40, color:'#222', name:'title'}
]};

function buildData(post, index) {
	data.push({title:item.title});
}

function retrieveCategories() {
  data.push({title: 'Construction', hasChild:true});
  data.push({title: 'Food', hasChild:true});
  data.push({title: 'Medical', hasChild:true});
  data.push({title: 'Recovery', hasChild:true});
  data.push({title: 'Transportation', hasChild:true});
  // Titanium.API.info(requestUrl);
  //   xhr.open('GET',requestUrl);
  //   xhr.onreadystatechange = function() {
  //  try {
  //      if (this.readyState == 4) {   
  //      if (this.status == 200) {
  //        try {
  //          var results = eval('('+this.responseText+')');
  //          for(var index in results) {
  //            buildData(results[index], index);
  //          }
  //          if(tableView == null) {
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
  //          }           
  //          activityIndicator.hide();
  //          Titanium.UI.currentWindow.repaint();
  //        } catch(ex) {
  //          Titanium.API.error(ex);
  //          var alert = Titanium.UI.createAlertDialog();
  //          alert.setMessage('There was a problem retrieving this list of wants.  Please try again later.');
  //          alert.show();
  //        }     
  //      } else {
  //        activityIndicator.hide();
  //      }
  //    }   
  //  } catch(excep) {
  //    activityIndicator.hide();
  //  }
  //   };
  // xhr.send();
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
