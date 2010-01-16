ItemDisplay = {
    showList: function(results) {
        alert(results);
    },
    
    categoryList: function(results) {
        alert(results);
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
};