<?php
    $raw = file_get_contents("banner.json");
    $json = json_decode($raw);
?>
<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="robots" content="noindex,nofollow">
        <title>ITZ BANNER TIME</title>
        <link rel="shortcut icon" href="../favicon.ico">
        <link rel="stylesheet" href="../styles/font.css">
        <link rel="stylesheet" href="../styles/sub.css">
    </head>
    <body>
        <div>
            <h1>BANNERS</h1>
            <p>The banner submission rules are as follows:</p>
            <ol>
                <li>The default banner dimensions are 630x180 pixels. Only the 180 pixel height is technically required; the width requirement is far more lax (<span title="You're gonna do it now aren't you">just don't make it super huge</span>).</li>
                <li>.PNG or .GIF format. No .JPEGs, please.</li>
                <li>No <a href="https://en.wikipedia.org/wiki/ClearType">ClearType</a> text! Paint uses this to draw text and it looks horrible, so please don't use Paint. If you don't have Photoshop, alternatives are Paint.NET and GIMP.</li>
            </ol>
            <p>Below is a list of all current banners on Itz Showtime and their creators. Any of these can be randomly chosen to appear on the page. Let me know if any of these are misattributed to the wrong creator or you know who created the ones that currently do not have creators.</p>
        </div>
        <div>
            <table>
                <tr>
                    <th>Banner Name</th>
                    <th>Creator(s)</th>
                </tr>
<?php           foreach ($json->banners as $banner): ?>
                <tr>
                    <td><a href="<?=$banner->file?>" target="_blank"><?=$banner->file?></a></td>
                    <td><?=$banner->creator?></td>
                </tr>
<?php           endforeach; ?>
            </table>
        </div>
    </body>
</html>