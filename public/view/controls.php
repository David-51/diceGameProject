<?php
ob_start();
?>
<div class="row col-12 d-flex justify-content-center">    
    <button id="newGame" class="btn btn-outline-success player fs-3 text-dark" data-bs-toggle="modal" data-bs-target="#formModal" type="button">
        <i class="fas fa-plus-circle"></i>&ensp;New Game
    </button>
    
</div>
<div class="row d-flex justify-content-center">
    <div class="result">
        Résultat du lancé
    </div>
</div>
<div class="row d-flex justify-content-center">
    <button id="rollDice" class="btn btn-outline-light text-dark" type="button">
        <i class="fas fa-sync-alt"></i>&ensp;Roll Dice
    </button>
    
</div>
<div class="row d-flex justify-content-center">
    <button class="btn btn-outline-success text-dark" type="button" id="hold">
        Hold
    </button>
</div>

<?php
$controlsContent = ob_get_clean();