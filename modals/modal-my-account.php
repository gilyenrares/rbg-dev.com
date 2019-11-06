<!-- My Acoount -->
<?php require 'modal-logout.php';?>
<div id="modalMyaccount" class="modal">
  <div class="modal-content modal_container animate">
    <div class="imgcontainer">
      <span onclick="document.getElementById('modalMyaccount').style.display='none'" class="close" title="Close">&times;</span>
       <img src="images/img_user.png" alt="Avatar" class="avatar">
      <h1 class="section_title">My account</h1>
    </div> 
    <label for="email" class="text_highlight"><b>Email:</b></label>
    <div class="section_subtitle"><?php if(isset($_SESSION['userEmail'])) { echo $_SESSION['userEmail'];} ?></div>
    <label for="name" class="text_highlight"><b>Full Name:</b></label>
    <div class="section_subtitle"><?php if(isset($_SESSION['fn']) && isset($_SESSION['ln'])) { echo $_SESSION['fn'].' '.$_SESSION['ln'];} ?></div>
    <label for="phone" class="text_highlight"><b>Tel No:</b></label>
    <div class="section_subtitle"><?php if(isset($_SESSION['tel'])) { echo $_SESSION['tel'];} ?></div>
    <label for="account" class="text_highlight"><b>Account Type:</b></label>
    <div class="section_subtitle"><?php if(isset($_SESSION['accType'])) {  echo $_SESSION['accType'];} ?></div>
    <label for="address" class="text_highlight"><b>Address:</b></label>
    <div class="section_subtitle"><?php if(isset($_SESSION['str']) && isset($_SESSION['city']) && isset($_SESSION['pcd'])) {  echo $_SESSION['str'].'</br></br>'. $_SESSION['city']. '</br></br>'. $_SESSION['pcd'];} ?></div>
     <div class="login_container" style="background-color:#f1f1f1">
      <!-- Logout Form-->
      <div class="button ml-auto mr-auto"><a href="#logout" onclick="MtoL()">Logout</a></div>
    </div>
  </div>
</div>

<script>
  //Transition from My account to Logout modal
function MtoL(){
  document.getElementById('modalMyaccount').style.display='none';
  document.getElementById('logoutForm').style.display='block';
}
// Get the modal
var modal = document.getElementById('modalMyaccount');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
