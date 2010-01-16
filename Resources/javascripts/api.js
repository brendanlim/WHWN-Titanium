function get(args, emitter_format) {
    response = this.request('GET', url, args);
    return(response);
}

function post(args, emitter_format) {
    response = this.request('POST', url, args);
    return(response);
}

function request(method='GET', url, args, emitter_format) {
    var xhr = Titanium.Network.createHTTPClient();
    xhr.open(method, url);
}

Item = function(args) {
    this.created_at = args.created_at;
    this.title = args.title;
    this.type = args.type;
    this.location = args.location;
    this.geostamp = args.geostamp;
    this.datetime_start = args.datetime_start;
    this.datetime_end = args.datetime_end;
    this.category = args.category;
    this.contact_name = args.contact_name;
    this.contact_email = args.contact_email;
    this.contact_phone = args.contact_phone;
    this.contact_id = args.contact_id;
    this.content = args.content;
    this.priority = args.priority;
    
    this.get = get;
    this.post = post;
    this.request = request;
}

//example calls
this_post = new Item(title='ddlabjslfd');
this_post.post();