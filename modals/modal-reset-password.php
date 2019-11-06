<!--Forgot password-->
<div id="resetPassword" class="modal">
  <form class="modal_container modal-content animate" action="includes/reset-request.inc.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('resetPassword').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="images/img_user.png" alt="Avatar" class="avatar">
      <h2 class="section_title">Forgot Password</h2>
    </div>
      <label for="email"><b>An e-mail will be sent to you with the instructions on how to reset your password.</b></label>
      <div class="input_item">
        <input type="email" name="email" class="login_input trans_200" placeholder="Email" required="required">
      </div>
      <button type="submit" name="reset-request-submit" class="login_button button">Reset Password</button>
    <div class="login_container" style="background-color:#f1f1f1">
      <button onclick="document.getElementById('resetPassword').style.display='none'" class="contact_button button">Cancel</button>
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('resetPassword');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
