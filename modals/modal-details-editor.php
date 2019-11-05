<!-- Details editor Form-->
<div id="detailsEditorForm" class="modal">
  <form class="modal-content animate" action="includes/signup.inc.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('detailsEditorForm').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="images/img_avatar2.png" alt="Avatar" class="avatar">
    </div>

    <div class="login_container">
      <label for="first_name"><b>First Name</b></label>
      <div class="input_item">
        <input type="text" name="fn" class="login_input trans_200" placeholder="First Name" required="required">
      </div>
      <label for="last_name"><b>Last Name</b></label>
      <div class="input_item">
        <input type="text" name="ln" class="login_input trans_200" placeholder="Last Name" required="required">
      </div>
      <label for="address_street"><b>Street Name</b></label>
      <div class="input_item">
        <input type="address" name="strn" class="login_input trans_200" placeholder="Street Name" required="required">
      </div>
      <label for="address_city"><b>City</b></label>
      <div class="input_item">
        <input type="address" name="city" class="login_input trans_200" placeholder="City" required="required">
      </div>
      <label for="postcode"><b>Postcode</b></label>
      <div class="input_item">
        <input type="Postcode" name="pcd" class="login_input trans_200" placeholder="Postcode" required="required">
      </div>
      <label for="phone_number"><b>Phone Number</b></label>
      <div class="input_item">
        <input type="number" name="phno" class="login_input trans_200" placeholder="Phone Number" required="required">
      </div>
      <label for="email"><b>Email</b></label>
      <div class="input_item">
        <input type="email" name="email" class="login_input trans_200" placeholder="Email" required="required">
      </div>
      <label for="password">Please enter your <b>Password</b>in order to <b>Confirm</b> the changes.</label>
      <div class="input_item">
        <input type="password" name="pwd" class="login_input trans_200" placeholder="Password" required="required">
      </div>
      <button type="submit" name="editDetails-submit" class="login_button button">Save Changes</button>
      <label class="box_text">
        <input type="checkbox" name="remember"> I Accept the <a href="#">Terms and Conditions</a>
      </label>
    </div>

    <div class="login_container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('detailsEditorForm').style.display='none'" class="contact_button button">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('detailsEditorForm');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
