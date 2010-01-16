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
    Item.create({
        title: 'Example Title',
        type: 'Type',
        content: 'Content',
        category: 'Transportation'.
        location: 'Northwest Port-Au-Prince',
        datetime_start: '11-25-2010 11:00:45 +0200',
        contact_name: 'Gabriel'
    });
*/

/*** Debug helpers for testing in-browser ***/
// ENDPOINT_DOMAIN = "http://example.com"
// ItemDisplay.request = function(method, url) {
//     alert("Would be doing a " + method + " with url: " + url);
// };


Item = {
    format: "json",
    
    create: function(fields) {
        if (!fields) fields = {};
        return Item.post("/post", fields, ItemDisplay.postCreated);
    },
    
    haves: function() {return this.type("haves");},
    needs: function() {return this.type("needs");},
    
    type: function(type) {
        if (type != "haves" && type != "needs")
            return null;
        return Item.get("/" + type, {}, ItemDisplay.showList);
    },

    category: function(category, type) {
        var typePath = "";
        if (type) typePath = "/" + type;
        
        return Item.get("/" + category + typePath, {}, ItemDisplay.showList);
    },

    url: function(path, args) {
        var queryString = $.param(args, true);
        if (queryString) queryString = "?" + queryString;
        
        return ENDPOINT_DOMAIN + path + "." + this.format + queryString;
    },

    get: function(path, args, displayCallback) {
        return ItemDisplay.request('GET', this.url(path, args), this.format, displayCallback);
    },

    post: function(path, args, displayCallback) {
        return ItemDisplay.request('POST', this.url(path, args), this.format, displayCallback);
    }
}