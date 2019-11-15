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
<div class="container-fluid projects-img">
<div class="overlay"></div>
<div class="container padding-top">
	<div class="row">
		<div class="col">
			<div class="container">
			<h1><div class="white-title">Latest Projects</div></h1>
			<h2><div class="white-subtitle">View the latest projects carried on by RBG Development.</div></h2>
			</div>
		</div>
	</div>
</div>
</div>
<!-- Projects -->
<div class="container pt-5">
	<div class="row shadow-lg p-3 mb-5 bg-white rounded">
		<div class="col mb-5">
			<div class="section_title_container">
			<h2><div class="red-subtitle">welcome to RGB projects</div></h2>
			<h3><div class="black-title px-3">Projects List</div></h3>
			</div>
		</div>
		<!-- Boxes -->
		<div class="col-lg-12 mb-5">
		<!-- 1st row of boxes -->
			<div class="row">
				<div class="col">
					<div class="boxes_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
					<!-- Box -->
						<div class="box d-flex flex-column align-items-center justify-content-center">
	   	                    <h3>ESEURIBAC.RO</h3>
	                   		<div class="box_icon"><img src="images/logo-eseuribac.ro.png" alt=""></div>
	                   		<button data-toggle="collapse" href="#esb" role="button" aria-expanded="false" aria-controls="esb">Load Project</button>
	                	</div>
						<!-- Box -->
	            		<div class="box d-flex flex-column align-items-center justify-content-center">
	                    	<h3>RBG-DEV.COM</h3>
	                    	<div class="box_icon"><img src="images/logo-lg.png" style="padding-top: 60px;" alt=""></div>
	                    	<button data-toggle="collapse" href="#rbg" role="button" aria-expanded="false" aria-controls="rbg">Load Project</button>
	                  	</div>	                 
					</div>
				</div>
			</div>
		</div>
	<!-- Box hidden content -->
		<div class="col-lg-12 mb-5">
			<div class="row">
			    <div class="collapse multi-collapse" id="esb">
			    	<div class="card card-body">       		
			  			<?php include 'sections/esb.sec.php'?>	
					</div>
			     </div>
			</div>
			<div class="row">
			    <div class="collapse multi-collapse" id="rbg">
			      <div class="card card-body">
			        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
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
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="plugins/colorbox/jquery.colorbox-min.js"></script>
<script src="js/projects.js"></script>
</body>
</html>