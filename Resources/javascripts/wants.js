// name
// content
// location
// coords
// request,offer
// contact info
// contact email
// time available (offer)
// time needed (request)
// categories
// rss & json
// anybody can post
// email is optional
// no need to login to make a post or anything
// benefits to logging in to see all the posts that youve done before
// supporting flagging

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

function retrieveResults() {
  data.push({title: 'We need medical supplies', hasChild:true});
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
                  // win = Titanium.UI.createWindow({url:'/detail.html'});
                  // win.open({animated:true});
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
	retrieveResults();
};
