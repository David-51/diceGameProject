<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Jouez avec ce fantastiques jeu de dé">
	<link rel="stylesheet" href="./public/css/bootstrap.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	
	<link rel="stylesheet" href="./public/css/style.css">
	<title>Jeu de dé</title>
</head>
<body class="d-flex justify-content-center vh-100">
	<div class="container row bg-light my-0 my-md-4 mx-0 px-0">
		<button type="button" class="" data-bs-toggle="modal" data-bs-target="#rulesModal" id="rulesModalButton">
			<i class="fas fa-info-circle"></i>
		</button>
		<div class="row col mx-0 px-0 mx-lg-4 justify-content-center">
			<div class="row col-12 col-lg justify-content-center order-2 order-lg-1 mx-0 my-1 my-lg-4 px-4">
				<?= $playerOne ?>
			</div>
			<div class="row col-12 col-lg justify-content-center order-1 order-lg-2 mx-0 my-1 my-lg-4 px-lg-0 controls">
				<?= $controls ?>            
			</div> 
			<div class="row col-12 col-lg justify-content-center order-3 order-lg-3 mx-0 my-1 my-lg-4 px-4">
				<?= $playerTwo ?>
			</div>
		</div>        
	</div>
	<?php require './public/view/formModal.php'; ?>
	<?php require './public/view/winnerModal.php'; ?>    
	<?php require './public/view/rulesModal.php'; ?>    
	<script src="./public/js/bootstrap.min.js"></script>
	<script type="module" src="./public/js/script.js"></script>
</body>
</html>