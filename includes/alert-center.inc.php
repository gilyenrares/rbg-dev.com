<?php 
if (isset($_GET['error'])) {
	switch ($_GET['error']) {
		case 'emptyfields':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Empty Field(s)!</h4><p>One or more fields are EMPTY. All fields are required.</p><hr><p class="mb-0">Please make sure that all fields are correctly filled.</p></div>';
		break;

		case 'noUserFound':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error No User Found!</h4><p>The account that you have tried to connect to DOES NOT EXIST in our database or the email address provided contains a typing mistake.  You can <label data-toggle="modal" data-target="#sign-up"><a href="#sign-up">create a new acount</a></label></p><hr><p class="mb-0">Please double-check the email address and make sure it is the correct one.</p></div>';
		break;

		case 'invalidFirstName':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Invalid First Name!</h4><p>The first name that you have entered is invalid or contains typos.</p><hr><p class="mb-0">Please double-check the First Name field and make sure it contains ONLY LETERS.</p></div>';
			break;

		case 'invalidLastName':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Invalid Last Name!</h4><p>The last name that you have entered is invalid or contains typos.</p><hr><p class="mb-0">Please double-check the Last Name field and make sure it contains ONLY LETERS.</p></div>';
			break;

		case 'invalidStreetName':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Invalid Street Name!</h4><p>The street name that you have entered is invalid or contains typos.</p><hr><p class="mb-0">Please double-check the Last Name field and make sure it contains ONLY LETERS & NUMBERS.</p></div>';
			break;

		case 'invalidCityName':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Invalid City Name!</h4><p>The city name that you have entered is invalid or contains typos.</p><hr><p class="mb-0">Please double-check the Last Name field and make sure it contains ONLY LETERS.</p></div>';
			break;

		case 'invalidPostcode':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Invalid Postcode or Zipcode!</h4><p>The postcode or zipcode that you have entered is invalid or contains typos.</p><hr><p class="mb-0">Please double-check the Postcode field and make sure it contains ONLY LETERS & NUMBERS.</p></div>';
			break;

		case 'invalidPhoneNumber':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Invalid Phone Number!</h4><p>The phone number that you have entered is invalid or contains typos.</p><hr><p class="mb-0">Please double-check the Phone Number field and make sure it contains ONLY NUMBERS and AVOID using (+447...), INSTEAD USE (0044...) when adding your country prefix.</p></div>';
			break;

		case 'invalidEmail':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Invalid Email!</h4><p>The email address that you have entered is invalid or contains typos.</p><hr><p class="mb-0">Please double-check the email address and make sure it is the correct one.</p></div>';
			break;

		case 'invalidTextBox':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Invalid Text Box!</h4><p>The text that you have entered contains FORBIDDEN characters. List of allowed characters: . , ! ?</p><hr><p class="mb-0">Please double-check the text and make sure it contains only allowed characters .</p></div>';
			break;

		case 'passwordcheck':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Password Do Not Macth!</h4><p>The passwords that you have entered DO NOT MATCH.</p><hr><p class="mb-0">Please pay attention when typing your passwords, also check the status of the CapsLock button.</p></div>';
			break;

		case 'sqlError':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Database Connection!</h4><p>This is a tehnical error and is ususaly fixed by refereshing (Ctrl + R) the page.</p><hr><p class="mb-0">Please do not hesitate to <a href="contact.php">Contact Us</a>about this issue if the problem persists.</p></div>';
			break;

		case 'emailAlreadyTaken':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Email Already Taken!</h4><p>The email that you provided is already BEING USED by another account. Recover your account by <label data-toggle="modal" data-target="#reset-password"><a href="#reset-password" >reseting your password</a></label>.</p><hr><p class="mb-0">Please do not hesitate to <a href="contact.php">Contact Us</a> if you think someone else used your details on this website.</p></div>';
			break;

		case 'wrongPassword':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Wrong Password!</h4><p>The password that you provided DOES NOT MATCH with the password of the account in which you want to login. Be AWARE passwords are CASE SENSITIVE.</p><hr><p class="mb-0">Please pay attention when typing your passwords, also check the status of the CapsLock button.</p></div>';
			break;

		case 'sqlUploadError':
			echo '<div class="col-md-8 ml-auto mr-auto alert alert-danger" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Error Data Upload Failed!</h4><p>This is a tehnical error and is ususaly fixed by refereshing (Ctrl + R) the page and resubmiting the request you just made. </p><hr><p class="mb-0">Please do not hesitate to <a href="contact.php">Contact Us</a> about this issue if the problem persists.</p></div>';
			break;

		default:
			# code...
			break;
	}
} elseif(isset($_GET['contact-submit'])) {
	if ($_GET['contact-submit']==='success') {
		echo '<div class="col-md-8 ml-auto mr-auto alert alert-success" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Contact Message Submitted Successfully!</h4><p>Thank you, '.$_POST["fn"].' '.$_POST["ln"].' for contacting us. Your message will be reviewed, answered, and dealt with accordingly.</p><hr><p class="mb-0">We apreciate your opinion and involvement. </br>Thanks, RBG Development</p></div>';
	}
}elseif(isset($_GET['login'])) {
	if ($_GET['login']==='success') {
		echo '<div class="col-md-8 ml-auto mr-auto alert alert-success" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Welcome Back '.$_SESSION["fn"].' '.$_SESSION["ln"].' !</h4><p>Welcome back to RBG Development.</p><hr><p class="mb-0">It is great to have you on board.-- <i> RBG Development</i>.</p></div>';
	}
}elseif(isset($_GET['logout'])) {
	if ($_GET['logout']==='success') {
		echo '<div class="col-md-8 ml-auto mr-auto alert alert-success" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Logout Successful!</h4><p>You have been successfully logged out from your account.</p><hr><p class="mb-0">Until next time, have a great day.-- <i> RBG Development</i>.</p></div>';
	}
}elseif(isset($_GET['newpassword'])) {
	if ($_GET['newpassword']==='passwordUpdated') {
		echo '<div class="col-md-8 ml-auto mr-auto alert alert-success" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Password Reset Complete!</h4><p>You have successfully changed your account password.</p><hr><p class="mb-0">Now the changes have been applied, you can <label data-toggle="modal" data-target="#login"><a href="#login">login </a></label>with your new password.</p></div>';
	}
}elseif(isset($_GET['signup'])) {
	if ($_GET['signup']==='success') {
		echo '<div class="col-md-8 ml-auto mr-auto alert alert-success" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Sign Up Successful!</h4><p>Welcome on board '.$_POST["fn"].' '.$_POST["ln"].'.</p><hr><p class="mb-0">Now you can use your new account to <label data-toggle="modal" data-target="#login"><a href="#login">login </a></label> straight away.</p></div>';
	}
}elseif(isset($_GET['reset'])) {
	if ($_GET['reset']==='success') {
		echo '<div class="col-md-8 ml-auto mr-auto alert alert-success" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">Password Reset Requested!</h4><p>Your reset password link has been sent to your email box.</p><hr><p class="mb-0">Check your email for further instructions.</p></div>';
	}
}elseif(isset($_GET['review'])) {
	if ($_GET['review']==='success') {
		echo '<div class="col-md-8 ml-auto mr-auto alert alert-success" role="alert"><span type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</span><h4 class="alert-heading">We Received Your Feedback!</h4><p>Your opinion is important to us. We use your feedback to improve our services and user experience.</p><hr><p class="mb-0">Thank you for your time.--<i> RBG Development</i>.</p></div>';
	}
}
 ?>
