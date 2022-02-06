<?php
ob_start();
?>
<div class="row justify-content-center player">
    <div class="align-self-end players">
        <p id="<?= $player ?>Name" class="playerName text-center my-1">
            <?= $player ?>
        </p>
    </div>
    <div class="align-self-start">
        <p id="<?= $player ?>Global" class="score text-danger text-center">
            <?= random_int(0, 100); ?>
        </p>
    </div>
    <div class="row col-4 col-lg-8 align-self-start px-0 px-lg-1">
        <div class="col bg-round text-center" id="<?= $player ?>RoundBackground">
            <p class="current mb-0"> 
                CURRENT
            </p>
            <p id="<?= $player ?>Round" class="text-light my-1 holdScore">
                <?= random_int(0, 30); ?>            
            </p>
        </div>
    </div>
</div>
<?php
$contentPlayer = ob_get_clean();