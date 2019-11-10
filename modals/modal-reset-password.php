<!-- Modal -->
<div class="modal fade" id="reset-password" tabindex="-1" role="dialog" aria-labelledby="Reset Password Title" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title black-title" id="Reset Password Title">Reset Password</h5>
        <span type="button" class="close" data-dismiss="modal" aria-label="Close"
           aria-hidden="true">&times;</span>
      </div>
      <div class="modal-body border-bottom border-warning">
				<form action="includes/reset-request.inc.php" method="post" id="resetPasswordForm">
				 <div class="imgcontainer">
					 <img src="images/img_user.png" alt="Avatar" class="avatar">
				 </div>
				 <div class="container">
           <label for="email"><b>An e-mail will be sent to you with the instructions on how to reset your password.</b></label>
            <div class="input_item">
              <input type="email" name="email" class="login_input trans_200" placeholder="Email" required="required">
            </div>
				 </div>
			 </form>
      </div>
      <div>
				<div class="row d-flex justify-content-around">
					<div class="col-xs-4 d-flex justify-content-center">
						<button type="submit" data-toggle="modal" data-target="#reset-complete" form="resetPasswordForm" name="reset-request-submit">Reset Password</button>
					</div>
					<div class="col-xs-4 d-flex justify-content-center">
						<button type="button" data-dismiss="modal">Cancel</button>
					</div>
				</div>
      </div>
    </div>
  </div>
</div>
<?php include 'modal-reset-complete.php'; ?>
