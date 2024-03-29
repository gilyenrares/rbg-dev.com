<!-- Modal -->
<div class="modal fade" id="sign-up" tabindex="-1" role="dialog" aria-labelledby="Sign Up Title" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title black-title" id="Sign Up Title">Sign Up</h5>
        <span type="button" class="close" data-dismiss="modal" aria-label="Close"
           aria-hidden="true">&times;</span>
      </div>
      <div class="modal-body border-bottom border-warning">
				<form action="includes/signup.inc.php" method="post" id="signUpForm">
				 <div class="imgcontainer">
					 <img src="images/img_user.png" alt="Avatar" class="avatar">
				 </div>
				 <div class="container">
            <label for="first_name"><b>First Name</b></label>
            <div class="input_item">
              <input type="text" name="fn" value="<?php if (isset($_GET['fn'])) {echo $_GET['fn'];} ?>" class="login_input trans_200" placeholder="First Name" required="required">
            </div>
            <label for="last_name"><b>Last Name</b></label>
            <div class="input_item">
              <input type="text" name="ln" value="<?php if (isset($_GET['ln'])) {echo $_GET['ln'];} ?>" class="login_input trans_200" placeholder="Last Name" required="required">
            </div>
            <label for="address_street"><b>Street Name</b></label>
            <div class="input_item">
              <input type="address" name="strn" value="<?php if (isset($_GET['strn'])) {echo $_GET['strn'];} ?>" class="login_input trans_200" placeholder="Street Name" required="required">
            </div>
            <label for="address_city"><b>City</b></label>
            <div class="input_item">
              <input type="address" name="city" value="<?php if (isset($_GET['city'])) {echo $_GET['city'];} ?>" class="login_input trans_200" placeholder="City" required="required">
            </div>
            <label for="postcode"><b>Postcode</b></label>
            <div class="input_item">
              <input type="Postcode" name="pcd" value="<?php if (isset($_GET['postcode'])) {echo $_GET['postcode'];} ?>" class="login_input trans_200" placeholder="Postcode" required="required">
            </div>
            <label for="phone_number"><b>Phone Number</b></label>
            <div class="input_item">
              <input type="number" name="phno" value="<?php if (isset($_GET['phoneNumber'])) {echo $_GET['phoneNumber'];} ?>" class="login_input trans_200" placeholder="Phone Number" required="required">
            </div>
            <label for="email"><b>Email</b></label>
            <div class="input_item">
              <input type="email" name="email" value="<?php if (isset($_GET['email'])) {echo $_GET['email'];} ?>" class="login_input trans_200" placeholder="Email" required="required">
            </div>
            <label for="password"><b>Password</b></label>
            <div class="input_item">
              <input type="password" name="pwd" class="login_input trans_200" placeholder="Password" required="required">
            </div>
            <label for="repeat_password"><b>Repeat Password</b></label>
            <div class="input_item">
              <input type="password" name="pwd-repeat" class="login_input trans_200" placeholder="Repeat Password" required="required">
            </div>
            <label class="box_text">
              <input type="checkbox" name="remember" required="required"> I Accept the <a href="#">Terms and Conditions</a>
            </label>
          </div>
			 </form>
      </div>
				<div class="row d-flex justify-content-around">
					<div class="col-xs-6 d-flex justify-content-center">
						<button type="submit" form="signUpForm" name="signup-submit">Sign Up</button>
					</div>
					<div class="col-xs-6 d-flex justify-content-center">
						<button type="button" data-dismiss="modal">Close</button>
					</div>
				</div>
    </div>
  </div>
</div>