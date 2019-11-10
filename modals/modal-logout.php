<!-- Modal -->
<div class="modal fade" id="logout" tabindex="-1" role="dialog" aria-labelledby="Logout Title" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title black-title" id="Logout Title">Logout</h5>
        <span type="button" class="close" data-dismiss="modal" aria-label="Close"
           aria-hidden="true">&times;</span>
      </div>
      <div class="modal-body border-bottom border-warning">
				<form action="includes/logout.inc.php" method="post" id="logoutForm">
				 <div class="imgcontainer">
					 <img src="images/img_user.png" alt="Avatar" class="avatar">
				 </div>
				 <div class="container">
           <label for="logout_form"><b>You have been successfully Logged Out.</b></label>
				 </div>
			 </form>
      </div>
      <div class=" d-flex justify-content-center">
          <button type="submit" form="logoutForm" name="logout-submit">OK</button>
      </div>
    </div>
  </div>
</div>
