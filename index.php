<!DOCTYPE html>
<html lang="en">
<head>
<title>RBG Development</title>
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
<?php include 'sections/header.php'?>
<!-- Hamburger -->
<?php include 'sections/hamburger.php'?>
<!-- Menu -->
<?php include 'sections/menu.php'?> 
<!-- Home -->
<div class="container-fluid index-t-img">
<div class="overlay"></div>
	<div class="container padding-top">
		<div class="row">
			<div class="col">
				<div class="container text-center d-flex flex-column align-items-center justify-content-center">
             	<h1><div class="white-title">RGB Development</div></h1>
				<h2><div class="white-subtitle">HTML, CSS, PHP, SQL & More</div></h2>
					<button type="button" data-toggle="modal" data-target="#sign-up">Join Us</button>
					<div class="video_link">
					<a class="vimeo video_button" href="#">
						<div class="video_link_content d-flex flex-row align-items-center justify-content-start">
						<div class="video_icon d-flex flex-column align-items-center justify-content-center"><i class="fa fa-play" aria-hidden="true"></i></div>
						<span class="video_text">Video comming soon</span>
						</div>
					</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- About -->
<div class="container">
	<div class="row shadow-lg p-3 mb-5 bg-white rounded">
		<div class="col-lg-6">
			<div class="container">
			<h2><div class="red-subtitle">Welcome to RBG Development</div></h2>
			<h3><div class="black-title">About <b>RBG</b></div></h3>
			</div>
			<h4 class="text-dark">Development of fully working websites.<h4>
			<p>	On the front end of web development in order to create the overall layout of the website, HTML & CSS are used and combined. Furthermore, JavaScript more specifically jQuery, is used to animate and smooth out the website design, thus creating a pleasant user experience.</p>
			<p>On the back end of web development, PHP and MySql are used to bring functionality into the website and sort and store relevant information in databases.</p>
		</div>
		<div class="col-lg-6">
			<div class="rotate-img"><img src="images/a1.png" alt=""></div>
		</div>
	</div>
</div>
<!-- Slope overlay -->
<div class="slope-overlay"></div>
<!-- Testimonials -->
<div class="container-fluid index-b-img">
	<div class="container padding-top">
		<div class="row">
			<div class="col-lg-6">
				<div class="container">
				<h3><div class="red-subtitle">About RBG from users</div></h3>
				<h2><div class="white-title">Reviews</div></h2>
				</div>
			<!-- Testimonial -->
				<div class="mb-5 pt-5 d-flex flex-row align-items-start justify-content-start">
					<img class="rounded-circle avatar" src="images/img_user.png" alt="">
					<div class="pl-2">
						<div class="test_name"><a href="#">Diane Smith</a></div>
						<div class="test_email">client</div>
						<div class="test_text">
						<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
						</div>
						<div class="rating rating_4 mt-3"><i></i><i></i><i></i><i></i><i></i></div>
					</div>
				</div>
			</div>
				<div class="col-lg-6">
			<!-- Testimonial -->
				<div class="mb-5 d-flex flex-row align-items-start justify-content-start">
					<img class="rounded-circle avatar" src="images/img_user.png" alt="">
					<div class="pl-2">
						<div class="test_name"><a href="#">Diane Smith</a></div>
						<div class="test_email">client</div>
						<div class="test_text">
							<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
						</div>
						<div class="rating rating_4 mt-3"><i></i><i></i><i></i><i></i><i></i></div>
					</div>
				</div>
			<!-- Testimonial -->
				<div class="mb-5 d-flex flex-row align-items-start justify-content-start">
					<img class="rounded-circle avatar" src="images/img_user.png" alt="">
					<div class="pl-2">
						<div class="test_name"><a href="#">Diane Smith</a></div>
						<div class="test_email">client</div>
						<div class="test_text">
							<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
						</div>
						<div class="rating rating_5 mt-3"><i></i><i></i><i></i><i></i><i></i></div>
					</div>
				</div>
				</div>
			</div>
		<!-- Testimonials Form -->
			<div class="d-flex flex-column align-items-center justify-content-center">				
				<button type="button" data-toggle="modal" data-target="#testimonial">Enter Your Opinion</button>
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
<script src="plugins/progressbar/progressbar.min.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="plugins/colorbox/jquery.colorbox-min.js"></script>
<script src="js/custom.js"></script>
</body>
<!-- Footer -->
 <?php 
 include 'sections/footer.php';
 include 'modals/modal-testimonial.php';
  ?>
</html>
