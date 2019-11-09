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
 if (isset($_SESSION['userId'])) {
   echo '<button class="header_button" type="button" data-toggle="modal" data-target="#my-account">My Account</button>';
        }
        else {
          echo '<button class="header_button"  type="button" data-toggle="modal" data-target="#login">Login</button>';
 }?>
</div>
