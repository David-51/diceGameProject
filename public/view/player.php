<?php
ob_start();
?>
<div class="col-12 border border-secondary align-self-end players">
    <p id="<?= $player ?>Name" class="player text-center my-1">
        <?= $player ?>
    </p>
</div>
<div class="col-12 border border-secondary align-self-start">
    <p id="<?= $player ?>Global" class="score text-danger text-center">
        <?= random_int(0, 100); ?>
    </p>
</div>
<div class="col-12 border border-secondary justify-content-center align-self-start my-0 p-0">
    <div class="col bg-round text-center d-flex flex-column" id="<?= $player ?>RoundBackground">
        <p class="current mb-0"> 
            Current
        </p>
        <p id="<?= $player ?>Round" class="text-light my-1 holdScore">
            <?= random_int(0, 30); ?>            
        </p>
    </div>
</div>
<?php
$contentPlayer = ob_get_clean();