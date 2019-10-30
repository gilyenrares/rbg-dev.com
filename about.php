<!DOCTYPE html>
<html lang="en">
<head>
<title>About RBG Development</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="RGB Website Development">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
<link rel="stylesheet" type="text/css" href="styles/bootstrap-4.1.2/bootstrap.min.css">
<link href="plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="plugins/colorbox/colorbox.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="styles/main.css">
<link rel="stylesheet" type="text/css" href="styles/about_responsive.css">
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
include 'header.php';
 ?>

	<!-- Hamburger -->
<?php
include 'hamburger.php';
 ?>

 <!-- Menu -->
<?php
include 'menu.php';
?>

 <!-- Login Form-->
<?php
include 'login_form.php';
  ?>

	<!-- Home -->
	<div class="home_global">
		<div class="background_image" style="background-image:url(images/about_page.jpg)"></div>
		<div class="overlay"></div>
		<div class="home_container">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="home_content">
							<h1><div class="home_title">About us</div></h1>
							<h2><div class="home_subtitle">Development, responsiveness, vision & more .</div><h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- About -->

	<div class="about_specific">
		<div class="container about_container">
			<div class="row">
				<div class="col-lg-8">
					<div class="about_content_specific">
						<div class="section_title_container">
							<h2><div class="section_subtitle">Welcome to RBG</div></h2>
							<h3><div class="section_title">About <span>RBG</span></div></h3>
						</div>
						<div class="text_highlight">RBG (Rares Beniamin Gilyen) Development is a one-person team.</div>
						<div class="about_text">
							<p> On the front end of web development in order to create the overall layout of the website, HTML & CSS are used and combined. Furthermore, JavaScript, more specifically jQuery, is used to animate and smooth out the website design, thus creating a pleasant user experience.</p>
							<p> On the back end of web development, PHP and MySql are used to bring functionality into the website and sort and store relevant information in databases.
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4"><div class="about_image_specific"><img src="images/a2.png" alt=""></div></div>
			</div>
		</div>

		<!-- Boxes -->

		<div class="boxes">
			<div class="container">

				<!-- 1st row of boxes -->
				<div class="row">
					<div class="col">
						<div class="boxes_container d-flex flex-lg-row flex-column align-items-start justify-content-start">

							<!-- Box -->
							<div class="box d-flex flex-column align-items-center justify-content-center">
								<?php 
								include 'modal_html.php';
								 ?>
	   	                    	<div class="box_title">HTML 5</div>
	                   			<div class="box_icon"><img src="images/badge-html5.png" alt=""></div>
	                   			<div class="button test_button">
									<a href="#html" onclick="document.getElementById('modalHtml').style.display='block'">Find out more</a>
								</div>
	                		</div>
	              

							<!-- Box -->
	            			<div class="box d-flex flex-column align-items-center justify-content-center">
	            				<?php 
	            				include 'modal_css.php';
	            				 ?>
	                    		<div class="box_title">CSS 3</div>
	                    		<div class="box_icon"><img src="images/badge-css3.png" alt=""></div>
	                    		<div class="button test_button">
									<a href="#css" onclick="document.getElementById('modalCss').style.display='block'">Find out more</a>
								</div>
	                  		</div>

	            			<!-- Box -->
	            			<div class="box d-flex flex-column align-items-center justify-content-center">
	            				<?php 
	            				include 'modal_php.php';
	            				 ?>
	                    		<div class="box_title">PHP</div>
	                    		<div class="box_icon"><img src="images/badge-php.png" alt=""></div>
	                    		<div class="button test_button">
									<a href="#php" onclick="document.getElementById('modalPhp').style.display='block'">Find out more</a>
								</div>
	                  		</div>
	                  
						</div>
					</div>
				</div>

				<!-- 2nd row of boxes -->
	      		<div class="row">
					<div class="col">
						<div class="boxes_container d-flex flex-lg-row flex-column align-items-start justify-content-start">

							<!-- Box -->
	            			<div class="box d-flex flex-column align-items-center justify-content-center">
	            				<?php 
	            				include 'modal_jquery.php';
	            				 ?>
	                    		<div class="box_title">JQuery</div>
	                    		<div class="box_icon"><img src="images/badge-jquery.png" alt=""></div>
	                    		<div class="button test_button">
									<a href="#jquery" onclick="document.getElementById('modaljQuery').style.display='block'">Find out more</a>
								</div>
	                  		</div>

	            			<!-- Box -->
	            			<div class="box d-flex flex-column align-items-center justify-content-center">
	            				<?php 
	            				include 'modal_wordpress.php';
	            				 ?>
	                    		<div class="box_title">Word Press</div>
	                    		<div class="box_icon"><img src="images/badge-wordpress.png" alt=""></div>
	                    		<div class="button test_button">
									<a href="#wordpress" onclick="document.getElementById('modalWordPress').style.display='block'">Find out more</a>
								</div>
	                  		</div>

				            <!-- Box -->
				            <div class="box d-flex flex-column align-items-center justify-content-center">
				            	<?php 
	            				include 'modal_javascript.php';
	            				 ?>
				                <div class="box_title">Java Script</div>
				                <div class="box_icon"><img src="images/badge-javascript.png" alt=""></div>
				                <div class="button test_button">
									<a href="#javascript" onclick="document.getElementById('modalJavaScript').style.display='block'">Find out more</a>
								</div>
				            </div>
	                  
						</div>
					</div>
				</div>

				<!-- 3rd row of boxes -->
	      		<div class="row">
					<div class="col">
						<div class="boxes_container d-flex flex-lg-row flex-column align-items-start justify-content-start">

							<!-- Box -->
	            			<div class="box d-flex flex-column align-items-center justify-content-center">
	            				<?php 
	            				include 'modal_sql.php';
	            				 ?>
	                    		<div class="box_title">SQL</div>
	                    		<div class="box_icon"><img src="images/badge-sql.png" alt=""></div>
	                    		<div class="button test_button">
									<a href="#sql" onclick="document.getElementById('modalSql').style.display='block'">Find out more</a>
								</div>
	                  		</div>

	            			<!-- Box -->
	            			<div class="box d-flex flex-column align-items-center justify-content-center">
	            				<?php 
	            				include 'modal_bootstrap.php';
	            				 ?>
	                    		<div class="box_title">Bootstrap</div>
	                    		<div class="box_icon"><img src="images/badge-bootstrap.png" alt=""></div>
	                    		<div class="button test_button">
									<a href="#bootstrap" onclick="document.getElementById('modalBootstrap').style.display='block'">Find out more</a>
								</div>
	                  		</div>
	                	</div>
	              	</div>
	            </div>
			</div>
		</div>
		<div class="about_background">	
		</div>
	</div>
	
	<!-- Team -->

	<div class="team">
		<div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/dark_grey.jpg" data-speed="0.8"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="section_title_container">
						<div class="section_subtitle">RBG Development presents</div>
						<div class="section_title">The One-Man Team</div>
					</div>
				</div>
			</div>
			<div class="row team_row">

				<!-- Team Member -->
				<div class="col-lg-4 team_col">
					<div class="team_item">
						<div class="team_image"><img src="images/img_admin.png" alt=""></div>
						<div class="team_panel d-flex flex-column align-items-center justify-content-center text-center">
							<div class="team_name"><a href="#">Rares B.G.</a></div>
							<div class="team_title">Full Stack Web Developer</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>



	<!-- Footer -->
  <?php
include 'footer.php';
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
<script src="js/about.js"></script>
</body>
</html>
