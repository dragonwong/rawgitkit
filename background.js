chrome.browserAction.onClicked.addListener(function(){
	//alert(window.location);
	chrome.tabs.query(
	    {
	        currentWindow: true,    // currently focused window
	        active: true            // selected tab
	    },
	    function (tabs) {

    		var url = tabs[0].url,
				url_arr = url.split('/'),
				url_len = url_arr.length,
				hostname = url_arr[2],
				filename = url_arr[url_len-1];

			if(isGithub(hostname)){
				if(isHtml(filename)){
					var rawgit_url = 'https://rawgit.com/' + url_arr[3] + '/' + url_arr[4],
						i = 6;
					while(i < url_len){
						rawgit_url += '/' + url_arr[i];
						i++;
					}
					window.open(rawgit_url, '_blank');

				}else{
					alert('_(:з」∠)_ only html file');
				}
			}else{
				alert('_(:з」∠)_ only github');
			}

	    }
	);

	
	//window.open('http://www.baidu.com', '_blank');
});

function isGithub(hostname){
	return hostname === 'github.com';
}
function isHtml(str){
	return str.slice(-4) === '.htm' || str.slice(-5) === '.html';
}