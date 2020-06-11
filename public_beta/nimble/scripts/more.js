(function()
{
    var twitchPresets = [
        {name: "MagicLobster", channel: "magiccrawdad"},
        {name: "DNAd", channel: "dnacious"},
        {name: "Daikunus", channel: "daikunus"},
        {name: "Corpsmanup", channel: "xerostoo"},
        {name: "Herrasmies", channel: "herrasmies"},
        {name: "Bartleburg", channel: "bartleburg"},
        {name: "Lambrizzle", channel: "lambrizzle"},
        {name: "New Game Plus", channel: "new_game_plus"},
        {name: "Maskedmartyr", channel: "hashburger420"}
    ];
    
    function twitchListPopulate()
    {
        $.each(twitchPresets, function(i, object)
        {
            $("#more").append('<li><a id="' + object.channel + '" href="video/twitch.php?channel=' + object.channel + '" target="video">' + object.name + '</a></li>');
        });
    }
    window.twitchListPopulate = twitchListPopulate;
    
    function subIndicatorUpdate()
    {
        var live = false;
        var requests = [];
        
        $.each(twitchPresets, function(i, object)
        {
            requests.push($.ajax({
                type: "GET",
                url: "https://api.twitch.tv/helix/streams/" + object.channel,
                data: { "Client-ID": "e15bugwgbe6pj0mh9fdyo12dfl43gjv" },
                dataType: "json",
               
                success: function(json)
                {
                    if (json.stream != null)
                    {
                        live = true;
                        $("#" + object.channel).addClass("online").attr("title", "Currently playing: " + json.stream.game);
                    }
                    else
                    {
                        $("#" + object.channel).removeClass("online").attr("title", "");
                    }
                },
               
                error: function(jqXHR, txtStatus, errorThrown)
                {
                   console.log("Itz Showtime: Ajax request to Twitch API for channel %s failed", object.channel);
                }
            }));
        });
        
        $.when.apply(undefined, requests).then(function()
        {
            if (live)
            {
                $("#moreLink").addClass("online");
            }
            else
            {
                $("#moreLink").removeClass("online");
            }
        });
    }
    window.subIndicatorUpdate = subIndicatorUpdate;
}());

$(function()
{
    $("#twitchBox").keyup(function(ev)
    {
        $(this).val($(this).val().replace(/[^a-zA-Z0-9_]/g, ""));
        if (ev.keyCode === 13)
        {
            window.frames["content"].frames["video"].location = "video/twitch.php?channel=" + $("input[type=text]").val();
        }
    });
    
    twitchListPopulate();
    subIndicatorUpdate();
    setInterval(subIndicatorUpdate, 30000);
});