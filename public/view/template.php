<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./public/css/bootstrap.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    
    <link rel="stylesheet" href="./public/css/style.css">
    <title>Jeu de dé</title>
</head>
<body class="bg-secondary d-flex justify-content-center">
    <div class="container row bg-light my-4 d-flex justify-content-evenly">
        <div class="row col-12 col-lg-4 border border-warning mx-0 my-4 d-flex justify-content-center blockPlayer">    
            <?= $playerOne ?>
        </div>
        <div class="row col-12 col-lg-4 border border-primary mx-0 my-4 d-flex justify-content-center">
            <?= $controls ?>            
        </div> 
        <div class="row col-12 col-lg-4 border border-warning mx-0 my-4 d-flex justify-content-center blockPlayer">
            <?= $playerTwo ?>
        </div>
    </div>
    <?php require './public/view/formModal.php'; ?>
    <?php require './public/view/winnerModal.php'; ?>    
    <script src="./public/js/bootstrap.min.js"></script>
    <script type="module" src="./public/js/script.js"></script>
</body>
</html>