<footer>
	<nav class="footer_nav">
		<ul class="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-center">
			<li><a href="index.php">Home</a></li>
			<li><a href="about.php">About us</a></li>
			<li><a href="services.php">Services</a></li>
			<li><a href="projects.php">Projects</a></li>
			<li><a href="contact.php">Contact</a></li>
		</ul>
	</nav>
	<div class="container mt-5">
		<div class="row">
			<div class="col-lg-8 offset-lg-2">
				<div class="container">
					<div class="footer_content">	
					<div class="footer_image text-center"><img src="images/footer.png" alt=""></div>									
					<div class="text-white position-absolute" style="bottom: 0;right: 0;">Copyright &copy; <img src="images/logo.png" height="19" width="38" alt=""> RBG-Development 2019-<script>document.write(new Date().getFullYear());</script></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php 
		include 'modals/modal-login.php';
		include 'modals/modal-my-account.php';
		 ?>
</footer>
