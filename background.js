chrome.browserAction.onClicked.addListener(function(){
	alert(window.location);
	window.open('http://www.baidu.com', '_blank');
});