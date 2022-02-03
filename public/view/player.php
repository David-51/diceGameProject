<?php
ob_start();
?>
<div class="col-12 border border-secondary d-flex justify-content-center">
    <p id="<?= $player ?>Name" class="player fs-1">
        <?= $player ?>
    </p>
</div>
<div class="col-12 border border-secondary d-flex justify-content-center">
    <p id="<?= $player ?>Global" class="score text-danger">
        <?= random_int(0, 100); ?>
    </p>
</div>
<div class="row col-12 border border-secondary d-flex justify-content-center align-items-start">
    <div class="col-8 bg-round text-center d-flex flex-column justify-content-center" id="<?= $player ?>RoundBackground">
        <p class="fs-3"> 
            Current
        </p>
        <p id="<?= $player ?>Round" class="text-light fs-2">
            <?= random_int(0, 30); ?>            
        </p>
    </div>
</div>
<?php
$contentPlayer = ob_get_clean();