<div class="modal fade" tabindex="-1" id="formModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">New Game</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="newGameForm">
            <div class="mb-3">
                <label for="playerOneInput" class="form-label">Player one name ?</label>
                <input class="form-control" type="text" name="playerOneInput" id="playerOneInput">
            </div>
            <div class="mb-3">
                <label for="playerTwoInput" class="form-label">Player two name ?</label>
                <input class="form-control" type="text" name="playerTwoInput" id="playerTwoInput">
            </div>
            <div class="row mx-auto">
                <button type="submit" class="btn btn-success" id="formSubmit">Go !</button>
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>        
      </div>
    </div>
  </div>
</div>