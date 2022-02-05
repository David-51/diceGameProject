<!DOCTYPE html>
<html lang="en">
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
<body class="bg-secondary d-flex justify-content-center vh-100">
    <div class="container row row-cols-3 bg-light my-0 my-lg-4 justify-content-evenly">
        <div class="row col-12 col-lg border border-warning justify-content-center order-2 order-lg-1 mx-0 my-1 my-lg-4">
            <?= $playerOne ?>
        </div>
        <div class="row col-12 col-lg border border-primary mx-0 my-1 my-1 my-lg-4 justify-content-center order-1 order-lg-2 controls">
            <?= $controls ?>            
        </div> 
        <div class="row col-12 col-lg border border-warning justify-content-center order-3 order-lg-3 mx-0 my-1 my-lg-4">
            <?= $playerTwo ?>
        </div>
    </div>
    <?php require './public/view/formModal.php'; ?>
    <?php require './public/view/winnerModal.php'; ?>    
    <script src="./public/js/bootstrap.min.js"></script>
    <script type="module" src="./public/js/script.js"></script>
</body>
</html>