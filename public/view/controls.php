<?php
ob_start();
?>
<div class="row col-12 d-flex justify-content-center my-1">    
    <button id="newGamebutton" class="btn btn-outline-success text-dark controls" data-bs-toggle="modal" data-bs-target="#formModal" type="button"> <!-- class player -->
            <i class="bi bi-plus-circle text-danger"></i>&ensp;New Game
    </button>
    
</div>
<div class="row d-flex justify-content-center my-1">
    <canvas id="dice"></canvas>
</div>
<div class="row d-flex justify-content-center my-1">
    <button id="rollDice" class="btn btn-outline-success text-dark controls" type="button" disabled>
        <i class="bi bi-arrow-repeat text-danger"></i>&ensp;
        Roll Dice
    </button>
    
</div>
<div class="row d-flex justify-content-center my-1">
    <button class="btn btn-outline-success text-dark controls" type="button" id="hold" disabled>        
    <i class="bi bi-box-arrow-in-down text-danger"></i>&ensp;Hold
    </button>
</div>

<?php
$controlsContent = ob_get_clean();