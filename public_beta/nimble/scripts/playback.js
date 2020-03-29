(function()
{
	var videoSources =
	{
		"main":
		{
			"flash":
			{
				"src": "rtmp://live.itzshowti.me/live/main",
				"type": "rtmp/flv"
			},
			"html5":
			{
				"src": "http://live.itzshowti.me/hls/main.m3u8",
				"type": "application/x-mpegURL"
			}
		},

		"movies":
		{
			"flash":
			{
				"src": "rtmp://live.itzshowti.me/live/movies",
				"type": "rtmp/flv"
			},
			"html5":
			{
				"src": "http://live.itzshowti.me/hls/movies.m3u8",
				"type": "application/x-mpegURL"
			}
		},

		"marathon":
		{
			"flash":
			{
				"src": "rtmp://live.itzshowti.me/live/marathon",
				"type": "rtmp/flv"
			},
			"html5":
			{
				"src": "http://live.itzshowti.me/hls/marathon.m3u8",
				"type": "application/x-mpegURL"
			}
		}
	}

	function videoSwitch()
	{
		window.videoSelected = $("input[name=switch]:checked").val();
		Cookies.set("video", window.videoSelected);

		window.videoPlayer.src(videoSources[window.videoChannel][window.videoSelected].src);
	}
	window.videoSwitch = videoSwitch;
}());

$(function()
{
	window.videoChannel = $("#video").attr("name");
	window.videoPlayer = videojs("video");
	window.videoPlayer.play();

	var vid = Cookies.get("video");
	if (vid != undefined)
	{
		window.videoSelected = vid;
		$("input[value=" + window.videoSelected + "]").prop("checked", true);

		videoSwitch();
	}
	else
	{
		window.videoSelected = "flash";
		$("input[value=" + window.videoSelected + "]").prop("checked", true);
	}
});