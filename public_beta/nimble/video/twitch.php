<?php
$channel = filter_input(INPUT_GET, "channel", FILTER_SANITIZE_STRING);
?>
<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="robots" content="noindex,nofollow">
        <title>ITZ VIDYA TIME</title>
        <link rel="shortcut icon" href="../favicon.ico">
        <link rel="stylesheet" href="../styles/font.css">
        <link rel="stylesheet" href="../styles/video.css">
    </head>
    <body>
<?php   if (!empty($channel)): ?>
        <script src="https://player.twitch.tv/js/embed/v1.js"></script>
        <div id="twitchplayer" class="twitch"></div>
        <script type="text/javascript">
            var options = 
            {
                channel: "<?=$channel?>"
            };
            var player = new Twitch.Player("twitchplayer", options);
            player.setVolume(1.0);
        </script>
<?php   else: ?>
        <div class="top">No channel specified</div>
        <img class="icon" src="../images/gundog.gif">
<?php   endif; ?>
    </body>
</html>