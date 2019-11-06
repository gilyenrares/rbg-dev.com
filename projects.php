<!DOCTYPE html>
<html lang="en">
<head>
<title>Projects</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="RGB Website Development">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
<link href="plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="styles/main.css">
<link rel="stylesheet" type="text/css" href="styles/projects_responsive.css">
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
<div class="container-fluid projects-img">
<div class="overlay"></div>
<div class="container pading-top">
	<div class="row">
		<div class="col">
			<div class="container">
			<h1><div class="home_title">Latest Projects</div></h1>
			<h2><div class="home_subtitle">View the latest projects carried on by RBG Development.</div></h2>
			</div>
		</div>
	</div>
</div>
</div>
<!-- projects -->
<div class="container pading-top">
	<div class="row shadow-lg p-3 mb-5 bg-white rounded">
		<div class="col">
			<div class="section_title_container">
			<h2><div class="section_subtitle">welcome to RGB projects</div></h2>
			<h3><div class="section_title">Projects List</div></h3>
			</div>
		</div>
		<div class="card mb-3">	
  		<img src="images/logo-eseuribac.ro.png" class="card-img ml-auto mr-auto" alt="Logo EseurBac.ro">
  			<div class="card-body">
    		<h3><div class="section_title">EseuriBac.ro</div></h3>
    		<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This content is a little bit longer. This content is a little bit longer. This content is a little bit longer. This content is a little bit longer. This content is a little bit longer.</p>
   		 	<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  			</div>
  		<ul class="list-group list-group-flush">

  			<?php 
  					include 'includes/get-task.inc.php';
  				
  					
  					  				
  			?>
  			<div class="card-body"><div class="button ml-auto mr-auto"><a href="#">Visit Website</a></div></div>
  		</ul>
  		
		</div>
	</div>
</div>
<div class="row projects_row">
				<!-- projects Post -->
				<!-- <div class="col-xl-4 col-md-6 projects_col">
					<div class="projects_post">
						<div class="projects_post_image"><img src="images/img_user.png" alt=""></div>
						<div class="projects_post_title"><a href="#"> Pellentesque sit amet tellus blandit</a></div>
						<div class="projects_post_date"><a href="#">june 29, 2018</a></div>
						<div class="projects_post_text">
							<p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Odio vestibulum est mattis effic iturut.</p>
						</div>
						<div class="projects_post_link"><a href="#">Read More</a></div>
					</div>
				</div> -->

				

	</div>
			<div class="row">
				<div class="col">
					<div class="button ml-auto mr-auto"><a href="#">Load More</a></div>
				</div>
			</div>

	<!-- Footer -->
  <?php
include 'sections/footer.php';
   ?>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="plugins/greensock/TweenMax.min.js"></script>
<script src="plugins/greensock/TimelineMax.min.js"></script>
<script src="plugins/scrollmagic/ScrollMagic.min.js"></script>
<script src="plugins/greensock/animation.gsap.min.js"></script>
<script src="plugins/greensock/ScrollToPlugin.min.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="js/projects.js"></script>
</body>
</html>