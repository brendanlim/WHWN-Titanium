window.onload = function() {
  Titanium.UI.currentWindow.setTitleImage('/images/personify_logo_nav.png');
	var height = (Titanium.Platform.name.indexOf('iPhone') != -1) ? 30: 40;
	var usernameField = Titanium.UI.createTextField({
		id:'usernameField',
		value:(Titanium.App.Properties.getString("username") == null ?  '' : Titanium.App.Properties.getString("username")),
		keyboardType:Titanium.UI.KEYBOARD_ASCII,
		hintText:'Your Username',
		autocorrect:false,
		width:160,
		color:'#222',
		height:height,
		clearOnEdit:false,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE,
		clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_NEVER
	});

	var passwordField = Titanium.UI.createTextField({
		id:'passwordField',
		value:(Titanium.App.Properties.getString("password") == null ?  '' : Titanium.App.Properties.getString("password")),
		keyboardType:Titanium.UI.KEYBOARD_ASCII,
		hintText:'*********',
		autocorrect:false,
		width:160,
		color:'#222',
		height:height,
		clearOnEdit:false,
		passwordMask:true,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE,
		clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_NEVER
	});
	
	var signInButton = Titanium.UI.createButton({
		id:'signIn',
		title:'Save',
		color:'#ffffff',
		backgroundImage:'/images/BUTT_drk_off.png',
		backgroundSelectedImage:'/images/BUTT_drk_on.png',
		backgroundFocusedImage:'/images/BUTT_drk_on.png',
		height:57,
		width:300,
		fontSize:16,
		fontWeight:'bold'
	});
	
	signInButton.addEventListener("click",function(e) {
		Titanium.UI.currentWindow.close();
	});
}