
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		inititialize();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};






console.log('The Waiting Game.')

var globalVars = {
	loadingDivContainer : document.getElementById('loadingDivContainer'),
	loadingDiv : document.getElementById('loadingDiv'),
}

function setDimensions(){
	var thisWidth = window.innerWidth;
	var thisHeight = window.innerHeight;
	var body = 	document.querySelector('body');
	body.style.width = thisWidth+ 'px';
	body.style.height = thisHeight + 'px';

	globalVars.loadingDivContainer.style.width = thisWidth/2 + 'px';
	globalVars.loadingDivContainer.style.height = thisWidth/2 + 'px';



}




var timer = 10000; //ten seconds

function startGifs(){
	var count = 1;
	console.log('start gifs')
	var imageContainer = globalVars.loadingDiv;
	changeImage();
	function changeImage(){
		//alert(count)
		imageContainer.style.content = 'url(./img/' + count + '.svg)';
		setTimeout(function(){
			count++
			console.log('set image')
			 	imageContainer.style.content = 'url(./img/' + count + '.svg)';
				if(count < 8){
					changeImage();
				} else {
					count = 0;
					changeImage();
				}			
		}, timer)
	}


}






function inititialize(){
	// alert('initialize')
	document.getElementsByClassName('app')[0].style.display = 'none';
	
	console.log('initialize')
	setDimensions();
	startGifs();
}













 
