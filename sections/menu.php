<div class="menu trans_800">
  <div class="menu_content d-flex flex-column align-items-center justify-content-center text-center">
  <ul>
    <li><a href="index.php">Home</a></li>
    <li><a href="about.php">About us</a></li>
    <li><a href="services.php">Services</a></li>
    <li><a href="projects.php">Projects</a></li>
    <li><a href="contact.php">Contact</a></li>
  </ul>
  </div>
<?php
  $onclick_myAccount = "document.getElementById('modalMyaccount').style.display='block'";
  $onclick_login = "document.getElementById('loginForm').style.display='block'";
 if (isset($_SESSION['userId'])) {
 echo '<button class="header_button ml-auto mr-auto" href="#myAccount" onclick="'.$onclick_myAccount.'">My Account</buton>';
 }
 else {
 echo '<button class="header_button ml-auto mr-auto" href="#login" onclick="'.$onclick_login.'">Login</button>';
 }?>
</div>
