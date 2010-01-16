ItemDisplay = {
    showList: function(results) {
        alert(results);
    },
    
    categoryList: function(results) {
    
    },
    
    postCreated: function(results) {
        alert(results);
    },

    displayError: function(ex) {
        Titanium.API.error(ex);
        var alert = Titanium.UI.createAlertDialog();
        alert.setMessage('There was a problem retrieving this list of wants.  Please try again later.');
        alert.show();      
    },
    
    httpError: function(status) {
        alert(status + ": request failed");
    }

    request: function(method, url, callback) {
        if (!method) method = "GET";
        var xhr = Titanium.Network.createHTTPClient();
        xhr.open(method, url);
        
        xhr.onreadystatechange = function() {
            try {
                if (this.readyState == 4) {   
                    if (this.status == 200) {
                        try {
                            var results = eval('('+this.responseText+')');
                            callback(results);
                        } catch(ex) {
                            displayError(ex);
                        }
                    } else {
                        httpError(this.status);
                        
                        activityIndicator.hide();
                    }
                }   
            } catch(excep) {
                activityIndicator.hide();
            }
            xhr.send(); 
        }
    }
};