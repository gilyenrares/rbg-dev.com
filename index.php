<!DOCTYPE html>
<html lang="en">
<head>
<title>RBG Development</title>
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
 
<!-- Home -->
	<div class="home">
		<div class="background_image" style="background-image:url(images/index.jpg)"></div>
		<div class="overlay"></div>
		<div class="home_container">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="home_content text-center">
              <h1><div class="home_title">RGB Development</div></h1>
							<h2><div class="home_subtitle">HTML, CSS, PHP, SQL & More</div></h2>
              <div class="button home_button ml-auto mr-auto"><a href="#signup" onclick="document.getElementById('signUpForm').style.display='block'">Join Now</a></div><br><br>
							<div class="video_link">
								<a class="vimeo video_button d-flex flex-column align-items-center justify-content-center" href="#">
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
	</div>

	

	<!-- About -->

	<div class="about">
		<div class="container about_container">
			<div class="row">
				<div class="col-lg-6">
					<div class="about_content">
						<div class="section_title_container">
							<h2><div class="section_subtitle">Welcome to RBG Development</div></h2>
							<h3><div class="section_title">About <span>RBG</span></div></h3>
						</div>
						<div class="text_highlight">Development of fully working websites.</div>
						<div class="about_text">
							<p>	On the front end of web development in order to create the overall layout of the website, 
								HTML & CSS are used and combined. Furthermore, JavaScript more specifically jQuery, is used to animate and 
								smooth out the website design, thus creating a pleasant user experience.</p>
							<p>On the back end of web development, PHP and MySql are used to bring functionality 
								into the website and sort and store relevant information in databases.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="about_background">
			<div class="container fill_height">
				<div class="row fill_height">
					<div class="col-lg-6 offset-lg-6 fill_height">
						<div class="about_image"><img src="images/a1.png" alt=""></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Testimonials -->

	<div class="testimonials">
		<div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/testimonials.jpg" data-speed="0.8"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="section_title_container">
						<h3><div class="section_subtitle">About RBG from users</div></h3>
						<h2><div class="section_title">Testimonials</div></h2>
					</div>

					<!-- Testimonial -->
					<div class="test test_1 d-flex flex-row align-items-start justify-content-start">
						<div><div class="test_image"><img src="images/img_user.png" alt=""></div></div>
						<div class="test_content">
							<div class="test_name"><a href="#">Diane Smith</a></div>
							<div class="test_email">client</div>
							<div class="test_text">
								<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
							</div>
							<div class="rating rating_4 test_rating"><i></i><i></i><i></i><i></i><i></i></div>
						</div>
					</div>
				</div>
				<div class="col-lg-6">

					<!-- Testimonial -->
					<div class="test d-flex flex-row align-items-start justify-content-start">
						<div><div class="test_image"><img src="images/img_user.png" alt=""></div></div>
						<div class="test_content">
							<div class="test_name"><a href="#">Diane Smith</a></div>
							<div class="test_email">client</div>
							<div class="test_text">
								<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
							</div>
							<div class="rating rating_4 test_rating"><i></i><i></i><i></i><i></i><i></i></div>
						</div>
					</div>

					<!-- Testimonial -->
					<div class="test d-flex flex-row align-items-start justify-content-start">
						<div><div class="test_image"><img src="images/img_user.png" alt=""></div></div>
						<div class="test_content">
							<div class="test_name"><a href="#">Diane Smith</a></div>
							<div class="test_email">client</div>
							<div class="test_text">
								<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
							</div>
							<div class="rating rating_5 test_rating"><i></i><i></i><i></i><i></i><i></i></div>
						</div>
					</div>

				</div>
			</div>
				<!-- Testimonials Form -->
			<?php 
				include 'modals/modal-testimonial.php'
			 ?>
			<div class="row test_button_row">
				<div class="col text-center">
					<div class="button test_button">
						<a href="#testimonial" onclick="document.getElementById('testimonialForm').style.display='block'">Enter your opinion</a>
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
