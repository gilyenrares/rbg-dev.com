<!-- Login Form-->
<!-- <button onclick="document.getElementById('loginForm').style.display='block'" class="login_button button">Login</button> -->
<?php
require 'sign_up_form.php';
require 'modals/modal_resetpassword.php';
?>

<div id="loginForm" class="modal">

  <form class="modal-content animate" action="includes/login.inc.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('loginForm').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="images/img_user.png" alt="Avatar" class="avatar">
    </div>

    <div class="login_container">
      <label for="email"><b>Your Email</b></label>
      <div class="input_item">
        <input type="email" name="email" class="login_input trans_200" placeholder="E-mail" required="required">
      </div>
      <label for="psw"><b>Password</b></label>
      <div class="input_item">
        <input type="password" name="pwd" class="login_input trans_200" placeholder="Password" required="required">
      </div>
      <button class="login_button button"type="submit" name="login-submit">Login</button>
      <label class="box_text">
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
      <span class="psw">No Account? <a href="#signup" onclick="LtoS()">Create one</a></span>
    </div>

    <div class="login_container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('loginForm').style.display='none'" class="contact_button button">Cancel</button>
      <span class="psw">Forgot <a href="#forgotPassword" onclick="LtoR()">password?</a></span>
    </div>
  </form>
</div>

<script>
//Transition from login to signup
function LtoS(){
  document.getElementById('loginForm').style.display='none';
  document.getElementById('signUpForm').style.display='block';
}
//Transition from login to reset password
function LtoR(){
  document.getElementById('loginForm').style.display='none';
  document.getElementById('resetPassword').style.display='block';
}
// Get the modal
var modal = document.getElementById('loginForm');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
