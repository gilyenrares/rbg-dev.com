<!-- Modal -->
<div class="modal fade" id="my-account" tabindex="-1" role="dialog" aria-labelledby="My Account Title" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title black-title" id="My Account Title">My Account</h5>
        <span type="button" class="close" data-dismiss="modal" aria-label="Close"
           aria-hidden="true">&times;</span>
      </div>
      <div class="modal-body border-bottom border-warning">
				<form action="includes/logout.inc.php" method="post" id="myAccountForm">
				 <div class="imgcontainer">
					 <img src="images/img_user.png" alt="Avatar" class="avatar">
				 </div>
				 <div class="container">
           <label for="email" class="text_highlight"><b>Email:</b></label>
           <div class="red-subtitle"><?php if(isset($_SESSION['userEmail'])) { echo $_SESSION['userEmail'];} ?></div>
           <label for="name" class="text_highlight"><b>Full Name:</b></label>
           <div class="red-subtitle"><?php if(isset($_SESSION['fn']) && isset($_SESSION['ln'])) { echo $_SESSION['fn'].' '.$_SESSION['ln'];} ?></div>
           <label for="phone" class="text_highlight"><b>Tel No:</b></label>
           <div class="red-subtitle"><?php if(isset($_SESSION['tel'])) { echo $_SESSION['tel'];} ?></div>
           <label for="account" class="text_highlight"><b>Account Type:</b></label>
           <div class="red-subtitle"><?php if(isset($_SESSION['accType'])) {  echo $_SESSION['accType'];} ?></div>
           <label for="address" class="text_highlight"><b>Address:</b></label>
           <div class="red-subtitle"><?php if(isset($_SESSION['str']) && isset($_SESSION['city']) && isset($_SESSION['pcd'])) {  echo $_SESSION['str'].'</br>'. $_SESSION['city']. '</br>'. $_SESSION['pcd'];} ?></div>
          </div>
			 </form>
      </div>
      <div>
				<div class="row d-flex justify-content-around">
					<div class="col-xs-6 d-flex justify-content-center">
						<button type="button" data-toggle="modal" data-target="#logout" form="myAccountForm">Logout</button>
					</div>
					<div class="col-xs-6 d-flex justify-content-center">
						<button type="button" data-dismiss="modal">Close</button>
					</div>
				</div>
      </div>
    </div>
  </div>
</div>
</div>
<?php include 'modal-logout.php'; ?>
