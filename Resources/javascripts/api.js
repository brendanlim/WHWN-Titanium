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
    if (!fields) fields = {};
    if (!format) format = "json";
    
    this.endpoint = "http://localhost";
    this.format = format;
    this.fields = fields;
    
    
    this.create = function() {
        return this.post("/post", this.fields, ItemDisplay.postCreated);
    };
    
    this.fetchType = function(type) {
        if (type != "haves" && type != "needs")
            return null;
        return this.get("/" + type, {}, ItemDisplay.showList);
    };
    
    this.fetchCategory = function(category, type) {
        var typePath = "";
        if (type) typePath = "/" + type;
        
        return this.get("/" + category + typePath, {}, ItemDisplay.showList);
    };
    
    this.url = function(path, args) {
        return this.endpoint + path + "." + this.format + "?" + $.param(args, true);
    };
    
    this.get = function(path, args, displayCallback) {
        return ItemDisplay.request('GET', this.url(path, args), format, displayCallback);
    };

    this.post = function(path, args, displayCallback) {
        return ItemDisplay.request('POST', this.url(path, args), format, displayCallback);
    };
}

ItemDisplay.request = function(method, url) {
    alert("Would be doing a " + method + " with url: " + url);
};