<!DOCTYPE html>
<html lang="en">
<head>
<title>Contact</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="RGB Website Development">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
<link href="plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
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
<?php include 'sections/header.php'?>
<!-- Hamburger -->
<?php include 'sections/hamburger.php'?>
<!-- Menu -->
<?php include 'sections/menu.php'?>
<!-- Login Form-->
<?php include 'modals/modal-login.php'?>
<!-- Home -->
<div class="container-fluid contact-img">
<div class="overlay"></div>
<div class="container padding-top">
	<div class="container">
		<h1><div class="white-title">Contact</div></h1>
		<h2><div class="white-subtitle">Contact us for more details</div></h2>
	</div>
</div>
</div>
<!-- Contact -->
<div class="contact">
	<div class="container">
		<div class="row shadow-lg p-3 mb-5 bg-white rounded">
		<!-- Contact Content -->
			<div class="col-lg-4">
				<div class="contact_logo">
				<div class="logo d-flex flex-row align-items-center justify-content-start"><img src="images/logo.png" alt=""><div>RGB<span>DEV</span></div></div>
				</div>
				<div class="mt-5">
					<p>Contact RBG Development for any questions, requests or any type of inquiry.</p>
				</div>
				<div class="contact_list">
					<ul>
						<li class="d-flex flex-row align-items-start justify-content-start">
							<div><div>A:</div></div>
							<div><a href="#address">Queensbury, London, United Kingdom, NW99</a></div>
						</li>
						<li class="d-flex flex-row align-items-start justify-content-start">
							<div><div>P:</div></div>
							<div><a href="tel:+4474 925 65888">+4474 925 65888</a></div>
						</li>
						<li class="d-flex flex-row align-items-start justify-content-start">
							<div><div>E:</div></div>
							<div><a href = "mailto: gilyenrares@gmail.com">gilyenrares@gmail.com</a></div>
						</li>
					</ul>
				</div>
			</div>
		<!-- Contact Form -->
			<div class="col-lg-8 contact_col">
			<h2 class="text-dark">Contact Form</h2>
				<div class="container">
				<form action="includes/contact.inc.php" method="post" id="contact_form" class="contact_form">
					<div class="row">
						<div class="col-lg-6">
						<div class="input_item"><input type="text" name="fn" class="contact_input trans_200" placeholder="First Name" value="<?php if (isset($_SESSION['fn'])) {echo $_SESSION['fn'];} ?>" required="required"></div>
						</div>
						<div class="col-lg-6">
						<div class="input_item"><input type="text" name="ln" class="contact_input trans_200" placeholder="Last Name" value="<?php if (isset($_SESSION['ln'])) {echo $_SESSION['ln'];} ?>" required="required"></div>
						</div>
					</div>
					<div class="input_item"><input type="email" name="email" class="contact_input trans_200" placeholder="E-mail" value="<?php if (isset($_SESSION['userEmail'])) {echo $_SESSION['userEmail'];} ?>" required="required"></div>
						<div class="input_item">
						<textarea type="text" name="message" class="contact_input contact_textarea trans_200" placeholder="Message" required="required"></textarea>
						</div>
					<button type="submit" name="contact-submit">Send<span></span></button>
				</form>
				</div>
			</div>
		</div>
		<div class="row google_map_row" id="address">
			<div class="col">
			<!-- Contact Map -->
				<div class="contact_map">
				<!-- Google Map -->
					<div class="map">
						<div id="google_map" class="google_map">
							<div class="map_container">
								<div id="map"><script >
									function initMap() 
									{
									// The location of RBG
										var uluru = {lat: 51.594417, lng: -0.275742};
									// The map, centered at 
										var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: uluru});
									// The marker, positioned at Uluru
										var marker = new google.maps.Marker({position: uluru, map: map});
									}</script>
									<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDt_-OQTqONgw4mhhl6d0G8uo3RZPOzcgw&callback=initMap"></script>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

 <!-- Scripts -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="plugins/greensock/TweenMax.min.js"></script>
<script src="plugins/greensock/TimelineMax.min.js"></script>
<script src="plugins/scrollmagic/ScrollMagic.min.js"></script>
<script src="plugins/greensock/animation.gsap.min.js"></script>
<script src="plugins/greensock/ScrollToPlugin.min.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="js/contact.js"></script>
</body>
<!-- Footer -->
 <?php include 'sections/footer.php'?>
</html>
