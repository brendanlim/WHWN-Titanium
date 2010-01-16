/* fields:
    
    * - Required to create
    
    title - string (*)
    type - string (*)
    content = string (*)
    category - string (*)
    location - string (text) (*)
    geostamp - string (coords)
    datetime_start - timestamp (*)
    datetime_end - timestamp
    contact_name - string (*)
    contact_phone - string
    contact_id - integer
    priority - integer
    created_at - timestamp

    // example calls
    item = new Item({
        title: 'Example Title',
        type: 'Type',
        content: 'Content',
        category: 'Transportation'.
        location: 'Northwest Port-Au-Prince',
        datetime_start: '11-25-2010 11:00:45 +0200',
        contact_name: 'Gabriel'
    });
    item.create();
*/

Item = function(fields, format) {
    if (!format) format = "json";
    
    this.endpoint = "http://localhost";
    this.format = format;
    this.fields = fields;
    
    
    this.create = function() {
        return this.post("/post");
    }
    
    this.url = function(path) {
        return this.endpoint + path + "?test";
    }
    
    this.get = function(path) {
        response = this.request('GET', this.url(path), format);
        return(response);
    }

    this.post = function(path) {
        return this.request('POST', this.url(path), format);
    }

    this.request = function(method, url) {
        if (!method) method = "GET";
        alert("Would be doing a " + method + " with url: " + url);
        var xhr = Titanium.Network.createHTTPClient();
        xhr.open(method, url);
        xhr.onreadystatechange = function() {
        try {
            if (this.readyState == 4) {   
                if (this.status == 200) {
                    try {
                        var results = eval('('+this.responseText+')');
                        for(var index in results) {
                            buildData(results[index], index);
                        }
                        if(tableView == null) {
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
                        activityIndicator.hide();
                        Titanium.UI.currentWindow.repaint();
                    } catch(ex) {
                        Titanium.API.error(ex);
                        var alert = Titanium.UI.createAlertDialog();
                        alert.setMessage('There was a problem retrieving this list of wants.  Please try again later.');
                        alert.show();
                    }
                } else {
                    activityIndicator.hide();
                }
            }   
        } catch(excep) {
            activityIndicator.hide();
        }
    };
    xhr.send();
    }