<!DOCTYPE html>
<html lang="en">
<head>
<title>RBG Reset Password</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="RGB Website Development">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
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
<!-- Header -->
<?php include 'sections/header.php';?>
<!-- Hamburger -->
<?php include 'sections/hamburger.php';?>
<!-- Menu -->
<?php include 'sections/menu.php';?>
 <!-- Form -->
<div class="container padding-top">
	<div class="row shadow-lg p-3 mb-5 bg-white rounded">
		<div class="col-lg-6">
		<h2><div class="red-subtitle">Welcome to RBG Development</div></h2>
		<div class="text-dark">Enter your new password bellow.</div>
			<div class="text-body">
		<!-- php pre-checks -->
		<?php 
			$selector = $_GET["selector"];
			$validator = $_GET["validator"];
			if (empty($selector) || empty($validator)) {
				echo "Could not validate your request";
			}elseif (ctype_xdigit($selector)!== false && ctype_xdigit($validator)!== false) {?>
				<form action="includes/reset-password.inc.php" method="post">
					<input type="hidden" name="selector" value="<?php echo $selector ?>">
					<input type="hidden" name="validator" value="<?php echo $validator ?>">
					<input type="password" name="pwd" class="login_input trans_200" placeholder="Enter a new password.." required="required">
					<input type="password" name="pwd-repeat" class="login_input trans_200"  placeholder="Repeat a new password.." required="required">
					<button class="login_button button" type="submit" name="reset-password-submit">Reset Password</button>
				</form></br></br></br>
				<?php }?>
			</div>
		</div>
	</div>
</div>	
<!-- Scripts -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
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
<!-- Footer -->
<?php include 'sections/footer.php';?>
</html>