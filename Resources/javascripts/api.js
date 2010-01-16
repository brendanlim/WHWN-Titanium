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

    // the displayCallback function will be passed the fetched and parsed JSON object
    Item.create({
        title: 'Example Title',
        type: 'Type',
        content: 'Content',
        category: 'Transportation'.
        location: 'Northwest Port-Au-Prince',
        datetime_start: '11-25-2010 11:00:45 +0200',
        contact_name: 'Gabriel'
    }, displayCallback);
    
    Item.haves(displayCallback); 
    Item.needs(displayCallback);
    Item.type("haves", displayCallback);
    Item.type("needs", displayCallback);
    
    Item.categories(displayCallback);
    Item.category("transport", displayCallback);
    
*/

/*** Debug helpers for testing in-browser ***/
// ENDPOINT_DOMAIN = "http://eleventy6.com:8000"
// ItemDisplay.request = function(method, url) {
//     alert("Would be doing a " + method + " to url: " + url);
// };

Item = {
    format: "json",
    
    create: function(fields, callback) {
        if (!fields) fields = {};
        return Item.post("/post", fields, callback);
    },
    
    haves: function(callback) {return this.type("haves", callback);},
    needs: function(callback) {return this.type("needs", callback);},
    
    type: function(type, callback) {
        if (type != "haves" && type != "needs")
            return null;
        return Item.get("/" + type, {}, callback);
    },

    category: function(category, type, callback) {
        var typePath = "";
        if (type) typePath = "/" + type;
        
        return Item.get("/" + category + typePath, {}, callback);
    },
    
    categories: function(callback) {
        return Item.get("/categories", {}, callback);
    }

    url: function(path, args) {
        var queryString = $.param(args, true);
        if (queryString) queryString = "?" + queryString;
        
        return ENDPOINT_DOMAIN + path + "." + this.format + queryString;
    },

    get: function(path, args, callback) {
        return this.request('GET', this.url(path, args), this.format, callback);
    },

    post: function(path, args, callback) {
        return this.request('POST', this.url(path, args), this.format, callback);
    },
    
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
                            ItemDisplay.displayError(ex);
                        }
                    } else {
                        ItemDisplay.httpError(this.status);
                        
                        activityIndicator.hide();
                    }
                }   
            } catch(excep) {
                activityIndicator.hide();
            }
            xhr.send(); 
        }
    }
}