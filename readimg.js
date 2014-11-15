 $(document).on("pageinit", function(){ 
	$("button").click(function() {
		navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 1});
	});

	function captureSuccess(mediaFiles) {
		$("#myimg").attr("src",mediaFiles[0].fullPath);    
	}

	function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
	}	
	
});