<!-- Testimonial Form-->
<div id="testimonialForm" class="modal">
  <form class="modal-content animate" action="includes/testimonial.inc.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('testimonialForm').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="images/img_user.png" alt="Avatar" class="avatar">
    </div>

    <div class="login_container">
      <label for="first_name"><b>First Name</b></label>
      <div class="input_item">
        <input type="text" id="first_name" name="fn" class="login_input trans_200" placeholder="First Name" value="<?php if (isset($_SESSION['fn'])) {echo $_SESSION['fn'];} ?>" required="required">
      </div>
      <label for="last_name"><b>Last Name</b></label>
      <div class="input_item">
        <input type="text" id="last_name" name="ln" class="login_input trans_200" placeholder="Last Name" value="<?php if (isset($_SESSION['ln'])) {echo $_SESSION['ln'];} ?>" required="required">
      </div>
      <label for="email"><b>Email</b></label>
      <div class="input_item">
        <input type="email" id="email" name="email" class="login_input trans_200" placeholder="Email" value="<?php if (isset($_SESSION['userEmail'])) {echo $_SESSION['userEmail'];} ?>" required="required">
      </div>
      <label for="rating"><b>Rate Us</b></label>
        <select id="rating" name="rating">
          <option value="rating_5">5 Stars Rating</option>
          <option value="rating_4">4 Stars Rating</option>
          <option value="rating_3">3 Stars Rating</option>
          <option value="rating_2">2 Stars Rating</option>
          <option value="rating_1">1 Star Rating</option>
        </select>
      <label for="opinion"><b>Enter your opinion below</b></label>
      <div class="input_item"> 
        <textarea name="opinion" class="contact_input contact_textarea trans_200" placeholder="Message" required="required"></textarea>
      </div>
      <button type="submit" name="testimonial-submit" class="login_button button">Submit Opinion</button>
    </div>
    <div class="login_container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('testimonialForm').style.display='none'" class="contact_button button">Cancel</button>
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('testimonialForm');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
