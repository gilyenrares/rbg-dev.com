<?php
if (isset($_POST['contact-submit'])) {

  require 'dbh.inc.php';

  $firstName = $_POST['fn'];
  $lastName = $_POST['ln'];
  $email = $_POST['email'];
  $msg = $_POST['message'];

//Method that checks empty fields and returns the user to contact with the valid info autofilled
  if (empty($firstName) || empty($lastName) || empty($email) || empty($msg)) {
    header("Location: ../contact.php?error=emptyfields&fn=".$firstName."&ln=".$lastName."&email=".$email);
    exit();
  }

  //Method that checks if the First Name entered is valid and returns the user to contact with the valid info autofilled
  elseif (!preg_match("/^[a-zA-Z\s]*$/",$firstName)) {
    header("Location: ../contact.php?error=invalidFirstName&ln=".$lastName."&email=".$email);
    exit();
  }

  //Method that checks if the Last Name entered is valid and returns the user to contact with the valid info autofilled
  elseif (!preg_match("/^[a-zA-Z\s]*$/",$lastName)) {
    header("Location: ../contact.php?error=invalidLastName&fn=".$firstName."&email=".$email);
    exit();
  }

  //Method that checks if the Email entered is valid and returns the user to contact with the valid info autofilled
  elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../contact.php?error=invalidEmail&fn=".$firstName."&ln=".$lastName);
    exit();
  }

    //Method that checks if the message entered is valid and returns the user to contact with the valid info autofilled
  elseif (!preg_match("/^[a-zA-Z\s]*$/",$msg)) {
    header("Location: ../contact.php?error=invalidLastName&fn=".$firstName."&ln=".$lastName."&email=".$email);
    exit();
  }
  else {
    //SQL variable that runs an SQL statement to insert data into the database
    $sql = "INSERT INTO contact (firstName, lastName, email, message) VALUES(?, ?, ?, ?)";

    //Prepare statement initialization
    $stmt = mysqli_stmt_init($conn);

    //Method that check if the sql statement can run inside the database without error
    if (!mysqli_stmt_prepare($stmt, $sql)) {
      header("Location: ../contact.php?error=sqlUploadError");
       exit();
    }
    //Method that retrieves the input from users and uploads it to the database
    else {
      mysqli_stmt_bind_param($stmt,"ssss", $firstName, $lastName, $email, $msg);
      mysqli_stmt_execute($stmt);
      //Sending an copy of the enquery to the contact-us email
      $to = "contact_us@rbg-dev.com";
      $subject = 'Enquery from: '.$email;
      $message = "Email sent by: \r\n";
      $message .= $firstName;
      $message .= $lastName;
      $message .= "\r\n Email message: \r\n";
      $message .= $msg;
      $headers = "From:".$email."\r\n";
      $headers .= "Reply-to:".$email."\r\n";
      $headers .= "X-Mailer: PHP/".phpversion();
      mail($to, $subject, $message, $headers);
      header("Location: ../contact.php?contact-submit=success");
      exit();
    }
  }
  mysqli_stmt_close($stmt);
  mysqli_close($conn);
}
else {
  header("Location: ../contact.php");
  exit();
}
