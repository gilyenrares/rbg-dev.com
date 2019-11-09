<?php session_start();?>
<header class="header">
<div class="container">
  <div class="row">
    <div class="col">
      <div class="header_content d-flex flex-row align-items-center justify-content-start trans_400">
      <a href="index.php"><div class="logo d-flex flex-row align-items-center justify-content-start"><img src="images/logo.png" alt=""><div>RBG<span>Dev</span></div></div></a>
      <nav class="main_nav">
      <?php
        $text=$_SERVER['PHP_SELF'];
        $rest = substr("$text", 1);
        switch ($rest) {
          case 'index.php':
          echo '<ul class="d-flex flex-row align-items-center justify-content-start">
                    <li class="active"><a href="index.php">Home</a></li>
                    <li><a href="about.php">About us</a></li>
                    <li><a href="services.php">Services</a></li>
                    <li><a href="projects.php">Projects</a></li>
                    <li><a href="contact.php">Contact</a></li>
                  </ul>';
          break;
          case 'projects.php':
          echo '<ul class="d-flex flex-row align-items-center justify-content-start">
                  <li><a href="index.php">Home</a></li>
                  <li><a href="about.php">About us</a></li>
                  <li><a href="services.php">Services</a></li>
                  <li class="active"><a href="projects.php">Projects</a></li>
                  <li><a href="contact.php">Contact</a></li>
                </ul>';
          break;
          case 'services.php':
          echo '<ul class="d-flex flex-row align-items-center justify-content-start">
              <li><a href="index.php">Home</a></li>
             <li><a href="about.php">About us</a></li>
             <li class="active"><a href="services.php">Services</a></li>
             <li><a href="projects.php">Projects</a></li>
             <li><a href="contact.php">Contact</a></li>
            </ul>';
          break;
          case 'about.php':
          echo '<ul class="d-flex flex-row align-items-center justify-content-start">
                  <li><a href="index.php">Home</a></li>
                  <li class="active"><a href="about.php">About us</a></li>
                  <li><a href="services.php">Services</a></li>
                  <li><a href="projects.php">Projects</a></li>
                   <li><a href="contact.php">Contact</a></li>
                </ul>';
          break;
          case 'contact.php':
          echo '<ul class="d-flex flex-row align-items-center justify-content-start">
                  <li><a href="index.php">Home</a></li>
                  <li><a href="about.php">About us</a></li>
                  <li><a href="services.php">Services</a></li>
                  <li><a href="projects.php">Projects</a></li>
                  <li class="active"><a href="contact.php">Contact</a></li>
                </ul>';
          break;
          case 'signup.php':
          echo '<ul class="d-flex flex-row align-items-center justify-content-start">
                 <li class="active"><a href="index.php">Home</a></li>
                 <li><a href="about.php">About us</a></li>
                 <li><a href="services.php">Services</a></li>
                 <li><a href="projects.php">Projects</a></li>
                 <li><a href="contact.php">Contact</a></li>
                </ul>';
          break;
          default:
          echo '<ul class="d-flex flex-row align-items-center justify-content-start">
                  <li class="active"><a href="index.php">Home</a></li>
                  <li><a href="about.php">About us</a></li>
                  <li><a href="services.php">Services</a></li>
                  <li><a href="projects.php">Projects</a></li>
                  <li><a href="contact.php">Contact</a></li>
                </ul>';
          break;
      }?>
      </nav>
      <?php
        if (isset($_SESSION['userId'])) {
          echo '<button class="header_button" type="button" data-toggle="modal" data-target="#my-account">My Account</button>';
        }
        else {
          echo '<button class="header_button"  type="button" data-toggle="modal" data-target="#login">Login</button>';
        }?>
      </div>
    </div>
  </div>
</div>
</header>
