<?php
$list = new DirectoryIterator("./");
?>
<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>ITZ BETA TIME</title>
        <link rel="shortcut icon" href="favicon.ico">
	<link rel="stylesheet" href="style.css" type="text/css" media="screen">
    </head>
    <body>
        <div>
            <h2>ITZ BETA TIME</h2>
            <p class="center">I will sometimes host changes to the site here ahead of time when I am testing them.</p>
            <p>Currently running betas:</p>
            <ul>
<?php           foreach ($list as $dir): if ($dir->isDir() && substr($dir, 0, 1) != "." && $dir != "cgi-bin"): ?>
                <li><a href="<?=$dir?>"><?=$dir?></a></li>
<?php           endif; endforeach; ?>               
            </ul>
        </div>
    </body>
</html>