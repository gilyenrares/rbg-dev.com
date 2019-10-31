<?php 

if (isset($_POST['reset-request-submit'])) {
	// Selector
	$selector = bin2hex(random_bytes(8));
	//	Token
	$token = random_bytes(32);
	// Url for the reset password page
	$url = "https://rbg-dev.com/forgottenpwd/create-new-password.php?selector=". $selector. "&validator=". bin2hex($token);
	// Life of token 600 sec or 10 min
	$expires = date("U") + 600;

	require 'dbh.inc.php';
	$userEmail = $_POST["email"];
	//Sql statement to delete any unused token connected to the current user 
	$sql = "DELETE FROM pwdReset WHERE pwdResetEmail=?";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)) {
		echo "There was an error!";
		exit();
	} else{
		mysqli_stmt_bind_param($stmt, "s", $userEmail);
		mysqli_stmt_execute($stmt);
	}
	// Sql statement that applies a selector, token and expiration date to the user account 
	$sql = "INSERT INTO pwsReset (pwdResetEmail, pwdResetSelector, pwdResetToken, pwdResetExpires) VALUES (?, ?, ?, ?);";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)) {
		echo "There was an error!";
		exit();
	} else{
		$hashedToken = password_hash($token, PASSWORD_DEFAULT);
		mysqli_stmt_bind_param($stmt, "ssss", $userEmail, $selector, $hashedToken, $expires);
		mysqli_stmt_execute($stmt);
	}
	mysqli_stmt_close($stmt);
	mysql_close();

	$to = $userEmail;
	$subject = 'Reset your password for rbg-dev.com';

	$message = '<p>We recieved a password reset request. The link to reset your password is bellow.</p><p>If you did not make this request, you can ignore this email.</p>';
	$message .= '<p>Here is your password reset link: </br>';
	$message .= '<a href="'.$url. '">'.$url.'</a></p>';

	$headers = "From: No-Reply-RBG<no-reply-rbg@rbg-dev.com>\r\n";
	$headers .= "Reply-to: <contact_us@rbg-dev.com>\r\n";
	$headers .= "Content-type: text/html\r\n";

	mail($to, $subject, $message, $headers);
	header("Location: ../index.php?reset=success");
	exit();
}
else {
	header("Location: ../index.php");
	exit();
}