<!-- logout Form-->
<div id="logoutForm" class="modal">
  <form class="modal-content animate" action="includes/logout.inc.php" method="post">
    <div class="imgcontainer">
      <img src="images/img_user.png" alt="Avatar" class="avatar">
    </div>
    <div class="login_container extra_text">
      <label for="logout_form"><b><b>You have been successfully Logged Out.</b></b></label>
      <button class="login_button button" type="submit">Ok</button>
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('logoutForm');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
