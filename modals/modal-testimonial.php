<!-- Modal -->
<div class="modal fade" id="testimonial" tabindex="-1" role="dialog" aria-labelledby="Testimonial Title" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title black-title" id="Testimonial Title">Your Review</h5>
        <span type="button" class="close" data-dismiss="modal" aria-label="Close"
           aria-hidden="true">&times;</span>
      </div>
      <div class="modal-body border-bottom border-warning">
				<form action="includes/testimonial.inc.php" method="post" id="testimonialForm">
				 <div class="imgcontainer">
					 <img src="images/img_user.png" alt="Avatar" class="avatar">
				 </div>
				 <div class="container">
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
             <select class="login_input trans_200" id="rating" name="rating">
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
				 </div>
			 </form>
      </div>
      <div>
				<div class="row d-flex justify-content-around">
					<div class="col-xs-6 d-flex justify-content-center">
						<button type="submit" form="testimonialForm" name="testimonial-submit">Submit Opinion</button>
					</div>
					<div class="col-xs-6 d-flex justify-content-center">
						<button type="button" data-dismiss="modal">Cancel</button>
					</div>
				</div>
      </div>
    </div>
  </div>
</div>
