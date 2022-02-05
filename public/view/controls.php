<?php
ob_start();
?>
<div class="align-self-end">
    <button id="newGamebutton" class="btn btn-outline-success controls mb-1 col-12" data-bs-toggle="modal" data-bs-target="#formModal" type="button"> <!-- class player -->
            <i class="bi bi-plus-circle text-danger"></i>&ensp;NEW GAME
    </button>
</div>
<canvas id="dice"></canvas>
<div>
    <button id="rollDice" class="btn btn-outline-success controls my-1 col-12" type="button" disabled>
        <i class="bi bi-arrow-repeat text-danger"></i>&ensp;
        ROLL DICE
    </button>
    <button class="btn btn-outline-success controls col-12" type="button" id="hold" disabled>        
        <i class="bi bi-box-arrow-in-down text-danger"></i>&ensp;HOLD
    </button>
</div>

<?php
$controlsContent = ob_get_clean();