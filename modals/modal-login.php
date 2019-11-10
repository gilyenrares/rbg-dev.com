<!-- Modal -->
<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="Login Title" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title black-title" id="Login Title">Login</h5>
        <span type="button" class="close" data-dismiss="modal" aria-label="Close"
           aria-hidden="true">&times;</span>
      </div>
      <div class="modal-body border-bottom border-warning">
				<form action="includes/login.inc.php" method="post" id="loginForm">
				 <div class="imgcontainer">
					 <img src="images/img_user.png" alt="Avatar" class="avatar">
				 </div>
				 <div class="container">
					 <label for="email"><b>Your Email</b></label>
					 <div class="input_item">
						 <input type="email" name="email" class="login_input trans_200" placeholder="E-mail" required="required">
					 </div>
					 <label for="psw"><b>Password</b></label>
					 <div class="input_item">
						 <input type="password" name="pwd" class="login_input trans_200" placeholder="Password" required="required">
					 </div>
					 <label for="remember"></label>
						 <input type="checkbox" checked="checked" name="remember"> Remember me
					 <span type="button" data-toggle="modal" data-target="#reset-password">Forgot <a href="#reset-password" >password?</a></span>
				 </div>
			 </form>
      </div>
		<div class="row d-flex justify-content-around">
			<div class="col-xs-4 d-flex justify-content-center"><button type="submit" form="loginForm" name="login-submit">Login</button></div>
			<div class="col-xs-4 d-flex justify-content-center"><button type="button" data-dismiss="modal">Close</button></div>
			<div class="col-xs-4 d-flex justify-content-center"><button type="button" data-toggle="modal" data-target="#sign-up">Create New Account</button></div>
		</div>
    </div>
  </div>
</div>
<?php
include 'modal-sign-up.php';
include 'modal-reset-password.php';
 ?>