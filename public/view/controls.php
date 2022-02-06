<?php
ob_start();
?>
<div class="d-flex flex-column">
	<div class="justify-content-center px-lg-0">
		<button id="newGamebutton" class="btn controls mb-1 col-12 btn-noborder" data-bs-toggle="modal" data-bs-target="#formModal" type="button"> <!-- class player -->
			<i class="bi bi-plus-circle text-danger"></i>&ensp;NEW GAME
		</button>
	</div>
	<div class="d-flex px-lg-0 flex-grow-1 justify-content-center">
		<canvas id="dice" class="align-self-center"></canvas>
	</div>
	<div class="px-lg-0">
		<button id="rollDice" class="btn controls my-1 col-12 btn-noborder" type="button" disabled>
			<i class="bi bi-arrow-repeat text-danger"></i>&ensp;
					ROLL DICE
		</button>
		<button class="btn controls col-12 btn-noborder" type="button " id="hold" disabled>        
			<i class="bi bi-box-arrow-in-down text-danger"></i>&ensp;HOLD
		</button>
	</div>
</div>

<?php
$controlsContent = ob_get_clean();