<?php

// Player One
$player = 'playerOne';
include './public/view/player.php';
$playerOne = $contentPlayer;

// Controls
include './public/view/controls.php';
$controls = $controlsContent;

// Player Two
$player = 'playerTwo';
include './public/view/player.php';
$playerTwo = $contentPlayer;

require './public/view/template.php';