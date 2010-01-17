var tableView;
var data = [];
var template = {
 rowHeight:50,
 layout:[
   {type:'text', fontSize:22, fontWeight:'bold', left:10, top:10, width:290, height:40, color:'#222', name:'title'}
]};

function displayPosts(posts) {
    alert("dp");
    for (i in posts) {
        try {
            data.push({'title':posts[i].title});
        } catch(e) {}
    }
    var win;
    tableView = Titanium.UI.createTableView({
        template:template, 
        data:data
        }, function(eventObject) {
            win = Titanium.UI.createWindow({url:'/post_view.html', title:eventObject.rowData.title});
            win.open({animated:true});
        });
    Titanium.UI.currentWindow.addView(tableView);
    Titanium.UI.currentWindow.showView(tableView);
}