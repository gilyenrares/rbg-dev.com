<!--Reset Password Sent confirmation-->
<div id="resetCompleted" class="modal">
  <form class="modal-content animate">
    <div class="imgcontainer">
      <img src="images/img_user.png" alt="Avatar" class="avatar">
    </div>
    <div class="login_container extra_text">
      <label for="logout_form"><b>An e-mail has been sent to you with the instructions on how to reset your password.</b></label>
      <button class="login_button button" onclick="document.getElementById('resetPassword').style.display='none'">Ok</button>
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('resetCompleted');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
