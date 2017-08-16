<?php

    $dir    = './blog';
    $scanned_directory = array_diff(scandir($dir), array('..', '.'));
    $scanned_directory = array_merge($scanned_directory);

    $files = array();
    for($i=0; $i < count($scanned_directory); $i++){

        $time = filemtime($dir."/".$scanned_directory[$i]);

        $files[$i] = $time;
    }

    rsort($files);

    echo $files[0];