<!DOCTYPE html>
<html lang="en">
<head>
<title>RBG Reset Password</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="RGB Website Development">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
<link rel="stylesheet" type="text/css" href="styles/bootstrap-4.1.2/bootstrap.min.css">
<link href="plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="plugins/colorbox/colorbox.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="styles/main.css">
<link rel="stylesheet" type="text/css" href="styles/responsive.css">
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-149412340-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-149412340-1');
</script>
</head>
<body>

<div class="super_container">

	<!-- Header -->
<?php
include 'sections/header.php';
 ?>

	<!-- Hamburger -->
<?php
include 'sections/hamburger.php';
 ?>

	<!-- Menu -->
<?php
include 'sections/menu.php';
 ?>
 

	<!-- Form -->
	<div class="about">
		<div class="container about_container">
			<div class="row">
				<div class="col-lg-6">
					<div class="about_content">
						<div class="section_title_container">
							<h2><div class="section_subtitle">Welcome to RBG Development</div></h2>
						</div>
						<div class="text_highlight">Enter your new password bellow.</div>
						<div class="about_text">

							 <!-- php code  -->
						 <?php 
						 $selector = $_GET["selector"];
						 $validator = $_GET["validator"];

						 if (empty($selector) || empty($validator)) {
						 	echo "Could not validate your request";
						 }else{
						 	if (ctype_xdigit($selector)!== false && ctype_xdigit($validator)!== false) {
						 		?>
						 		<form action="includes/reset-password.inc.php" method="post">
						 			<input type="hidden" name="selector" value="<?php echo $selector ?>">
									<input type="hidden" name="validator" value="<?php echo $validator ?>">
									<input type="password" name="pwd" class="login_input trans_200" placeholder="Enter a new password.." required="required">
									<input type="password" name="pwd-repeat" class="login_input trans_200"  placeholder="Repeat a new password.." required="required">
									<button class="login_button button" type="submit" name="reset-password-submit">Reset Password</button>
								</form></br></br></br>
						 		<?php 
						 	}
						 }
						  ?>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>

	<!-- Footer -->
  <?php
include 'sections/footer.php';
   ?>

</div>
<script src="js/jquery-3.2.1.min.js"></script>
<script src="styles/bootstrap-4.1.2/popper.js"></script>
<script src="styles/bootstrap-4.1.2/bootstrap.min.js"></script>
<script src="plugins/greensock/TweenMax.min.js"></script>
<script src="plugins/greensock/TimelineMax.min.js"></script>
<script src="plugins/scrollmagic/ScrollMagic.min.js"></script>
<script src="plugins/greensock/animation.gsap.min.js"></script>
<script src="plugins/greensock/ScrollToPlugin.min.js"></script>
<script src="plugins/easing/easing.js"></script>
<script src="plugins/progressbar/progressbar.min.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="plugins/colorbox/jquery.colorbox-min.js"></script>
<script src="js/custom.js"></script>
</body>
</html>
