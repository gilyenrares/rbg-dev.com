<!DOCTYPE html>
<html lang="en">
<head>
<title>About RBG Development</title>
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
<!-- Login Form-->
<?php include 'modals/modal-login.php';?>
<!-- Home -->
<div class="container-fluid about-img">
<div class="overlay"></div>
<div class="container pading-top">
	<div class="row">
		<div class="col">
			<div class="container">
			<h1><div class="home_title">About us</div></h1>
			<h2><div class="home_subtitle">Development, responsiveness, vision & more .</div><h2>
			</div>
		</div>
	</div>	
</div>
</div>
<!-- About -->
<div class="container">
	<div class="row shadow-lg p-3 mb-5 bg-white rounded">
		<div class="col-lg-8">
			<div class="container mb-5">
				<div class="container">
				<h2><div class="section_subtitle">Welcome to RBG</div></h2>
				<h3><div class="section_title">About <span>RBG</span></div></h3>
				</div>
				<div class="text_highlight">RBG (Rares Beniamin Gilyen) Development is a one-person team.</div>
				<div class="mt-5">
					<p> On the front end of web development in order to create the overall layout of the website, HTML & CSS are used and combined. Furthermore, JavaScript, more specifically jQuery, is used to animate and smooth out the website design, thus creating a pleasant user experience.</p>
					<p> On the back end of web development, PHP and MySql are used to bring functionality into the website and sort and store relevant information in databases.</p>
				</div>
			</div>
		</div>
		<div class="col-lg-4"><div class="rotate-img"><img src="images/a2.png" alt=""></div></div>
	<!-- Boxes -->
		<div class="col-lg-12">
			<!-- 1st row of boxes -->
				<div class="row">
					<div class="col">
						<div class="container d-flex flex-lg-row flex-column align-items-start justify-content-start">

							<!-- Box -->
							<div class="box d-flex flex-column align-items-center justify-content-center">
								<?php 
								include 'modals/modal-html.php';
								 ?>
	   	                    	<h3>HTML 5</h3>
	                   			<div class="box_icon"><img src="images/badge-html5.png" alt=""></div>
	                   			<button onclick="document.getElementById('modalHtml').style.display='block'">Find out more</button>
	                		</div>
	              

							<!-- Box -->
	            			<div class="box d-flex flex-column align-items-center justify-content-center">
	            				<?php 
	            				include 'modals/modal-css.php';
	            				 ?>
	                    		<h3>CSS 3</h3>
	                    		<div class="box_icon"><img src="images/badge-css3.png" alt=""></div>
								<button onclick="document.getElementById('modalCss').style.display='block'">Find out more</button>
	                  		</div>

	            			<!-- Box -->
	            			<div class="box d-flex flex-column align-items-center justify-content-center">
	            				<?php 
	            				include 'modals/modal-php.php';
	            				 ?>
	                    		<h3>PHP</h3>
	                    		<div class="box_icon"><img src="images/badge-php.png" alt=""></div>
	                    		<button onclick="document.getElementById('modalPhp').style.display='block'">Find out more</button>
	                  		</div>
	                  
						</div>
					</div>
				</div>

				<!-- 2nd row of boxes -->
	      		<div class="row">
					<div class="col">
						<div class="container d-flex flex-lg-row flex-column align-items-start justify-content-start">

							<!-- Box -->
	            			<div class="box d-flex flex-column align-items-center justify-content-center">
	            				<?php 
	            				include 'modals/modal-jquery.php';
	            				 ?>
	                    		<h3>JQuery</h3>
	                    		<div class="box_icon"><img src="images/badge-jquery.png" alt=""></div>
	                    		<button onclick="document.getElementById('modaljQuery').style.display='block'">Find out more</button>
	                  		</div>

	            			<!-- Box -->
	            			<div class="box d-flex flex-column align-items-center justify-content-center">
	            				<?php 
	            				include 'modals/modal-wordpress.php';
	            				 ?>
	                    		<h3>Word Press</h3>
	                    		<div class="box_icon"><img src="images/badge-wordpress.png" alt=""></div>
	                    		<button onclick="document.getElementById('modalWordPress').style.display='block'">Find out more</button>
	                  		</div>

				            <!-- Box -->
				            <div class="box d-flex flex-column align-items-center justify-content-center">
				            	<?php 
	            				include 'modals/modal-javascript.php';
	            				 ?>
				                <h3>Java Script</h3>
				                <div class="box_icon"><img src="images/badge-javascript.png" alt=""></div>
				                <button onclick="document.getElementById('modalJavaScript').style.display='block'">Find out more</button>
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
	            				include 'modals/modal-sql.php';
	            				 ?>
	                    		<h3>SQL</h3>
	                    		<div class="box_icon"><img src="images/badge-sql.png" alt=""></div>
	                    		<button onclick="document.getElementById('modalSql').style.display='block'">Find out more</button>
	                  		</div>
	            			<!-- Box -->
	            			<div class="box d-flex flex-column align-items-center justify-content-center">
	            				<?php 
	            				include 'modals/modal-bootstrap.php';
	            				 ?>
	                    		<h3>Bootstrap</h3>
	                    		<div class="box_icon"><img src="images/badge-bootstrap.png" alt=""></div>
	                    		<button onclick="document.getElementById('modalBootstrap').style.display='block'">Find out more</button>
	                  		</div>
	                  		<!-- Box -->
	            			<div class="box d-flex flex-column align-items-center justify-content-center">
	            				
	                    		<h3>RGB Development</h3>
	                    		<div class="box_icon"><img src="images/img_admin.png" alt=""></div>
	                    		<button>Coming soon</button>
	                  		</div>
	                	</div>
	              	</div>
	            </div>
		</div>
	</div>
</div>
<!-- Slope overlay -->
<div class="slope-overlay"></div>
<!-- Team -->
<div class="team">
<div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/dark_grey.jpg" data-speed="0.8"></div>
	<div class="container">
		<div class="row">
			<div class="col-lg-6">
				<div class="container">
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
<?php include 'sections/footer.php'?>
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
<script src="js/about.js"></script>
</body>
</html>
