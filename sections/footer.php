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
					<div class="text-white float-right">Copyright &copy; RBG-Development 2019-<script>document.write(new Date().getFullYear());</script></div>
					</div>
				</div>
				<div class="footer_image text-center"><img src="images/footer.png" alt=""></div>
				<div class="footer_logo">
					<a href="#"><div class="logo d-flex flex-row align-items-center justify-content-center"><img src="images/logo.png" alt=""><div>RBG-<b>Dev</b></div></div></a>
				</div>
			</div>
		</div>
	</div>
	<?php 
		include 'modals/modal-login.php';
		include 'modals/modal-my-account.php';
		 ?>
</footer>
