<?php
if (isset($_POST['review-submit'])) {

  require 'dbh.inc.php';
  session_start();
  $firstName = $_POST['fn'];
  $lastName = $_POST['ln'];
  $email = $_POST['email'];
  $opinion = $_POST['opinion'];
  $rating = $_POST['rating'];
  $accType = $_SESSION['accType'];

//Method that checks empty fields and returns the user to review with the valid info autofilled
  if (empty($firstName) || empty($lastName) || empty($email) || empty($opinion) || empty($rating)) {
    header("Location: ../index.php?error=emptyfields&fn=".$firstName."&ln=".$lastName."&email=".$email."&rating=".$rating);
    exit();
  }

  //Method that checks if the First Name entered is valid and returns the user to review with the valid info autofilled
  elseif (!preg_match("/^[a-zA-Z\s]*$/",$firstName)) {
    header("Location: ../index.php?error=invalidFirstName&ln=".$lastName."&email=".$email."&rating=".$rating);
    exit();
  }

  //Method that checks if the Last Name entered is valid and returns the user to review with the valid info autofilled
  elseif (!preg_match("/^[a-zA-Z\s]*$/",$lastName)) {
    header("Location: ../index.php?error=invalidLastName&fn=".$firstName."&email=".$email."&rating=".$rating);
    exit();
  }

  //Method that checks if the Email entered is valid and returns the user to review with the valid info autofilled
  elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../index.php?error=invalidEmail&fn=".$firstName."&ln=".$lastName."&rating=".$rating);
    exit();
  }

    //Method that checks if the Opinion entered is valid and returns the user to review with the valid info autofilled
  elseif (!preg_match("/^[a-zA-Z0-9\s:().,?!]*$/",$opinion)) {
    header("Location: ../index.php?error=invalidTextBox&fn=".$firstName."&ln=".$lastName."&email=".$email."&rating=".$rating);
    exit();
  }


  //Method that checks if the email exists in the database
  else {
    //SQL variable that runs an SQL statement to insert data into the database
    $sql = "INSERT INTO reviews (firstName, lastName, accType, email, rating, opinion) VALUES(?, ?, ?, ?, ?, ?)";

    //Prepare statement initialization
    $stmt = mysqli_stmt_init($conn);

    //Method that check if the sql statement can run inside the database without error
    if (!mysqli_stmt_prepare($stmt, $sql)) {
      header("Location: ../index.php?error=sqlUploadError");
       exit();
    }
    //Method that retrieves the input from users and uploads it to the database
    else {
      mysqli_stmt_bind_param($stmt,"ssssss", $firstName, $lastName, $accType, $email, $rating, $opinion);
      mysqli_stmt_execute($stmt);
      header("Location: ../index.php?review=success");
      exit();
    }
  }
  mysqli_stmt_close($stmt);
  mysqli_close($conn);
}
else {
  header("Location: ../index.php");
  exit();
}
