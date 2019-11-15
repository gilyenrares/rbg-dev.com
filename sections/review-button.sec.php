<?php 
if (isset($_SESSION['userId'])) {
	echo '<!-- Reviews Form --><div class="mb-5 d-flex flex-column align-items-center justify-content-center"><button type="button" data-toggle="modal" data-target="#review">Enter Your Opinion</button></div>';
} else {
	echo '<!-- Reviews Form --><div class="mb-5 d-flex flex-column align-items-center justify-content-center"><div class="alert alert-info" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">You can leave a review if you are logged in!</h4></div><br><button type="button" data-toggle="modal" data-target="#login">Login</button></div>';
}?>