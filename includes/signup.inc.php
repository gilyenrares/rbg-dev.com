<?php
if (isset($_POST['signup-submit'])) {

  require 'dbh.inc.php';
  $accType = "User";
  $firstName = $_POST['fn'];
  $lastName = $_POST['ln'];
  $streetName = $_POST['strn'];
  $city = $_POST['city'];
  $postcode = $_POST['pcd'];
  $phoneNumber = $_POST['phno'];
  $email = $_POST['email'];
  $password = $_POST['pwd'];
  $passwordRepeat = $_POST['pwd-repeat'];

//Method that checks empty fields and returns the user to signup with the valid info autofilled
  if (empty($firstName) || empty($lastName) || empty($streetName) || empty($city) ||
  empty($postcode) || empty($phoneNumber) || empty($email) || empty($password) ||
  empty($passwordRepeat)) {
    header("Location: ../index.php?error=emptyfields&fn=".$firstName."&ln=".$lastName.
    "&strn=".$streetName."&city=".$city."&postcode=".$postcode."&phoneNumber=".$phoneNumber."&email=".$email);
    exit();
  }

  //Method that checks if the First Name entered is valid and returns the user to signup with the valid info autofilled
  elseif (!preg_match("/^[a-zA-Z\s]*$/",$firstName)) {
    header("Location: ../index.php?error=invalidFirstName&ln=".$lastName.
    "&strn=".$streetName."&city=".$city."&postcode=".$postcode."&phoneNumber=".$phoneNumber."&email=".$email);
    exit();
  }

  //Method that checks if the Last Name entered is valid and returns the user to signup with the valid info autofilled
  elseif (!preg_match("/^[a-zA-Z\s]*$/",$lastName)) {
    header("Location: ../index.php?error=invalidLastName&fn=".$firstName.
    "&strn=".$streetName."&city=".$city."&postcode=".$postcode."&phoneNumber=".$phoneNumber."&email=".$email);
    exit();
  }

  //Method that checks if the Street Name entered is valid and returns the user to signup with the valid info autofilled
  elseif (!preg_match("/^[a-zA-Z0-9\s]*$/",$streetName)) {
    header("Location: ../index.php?error=invalidStreetName&fn=".$firstName."&ln=".$lastName.
    "&city=".$city."&postcode=".$postcode."&phoneNumber=".$phoneNumber."&email=".$email);
    exit();
  }

  //Method that checks if the City Name entered is valid and returns the user to signup with the valid info autofilled
  elseif (!preg_match("/^[a-zA-Z\s]*$/",$city)) {
    header("Location: ../index.php?error=invalidCityName&fn=".$firstName."&ln=".$lastName.
    "&strn=".$streetName."&postcode=".$postcode."&phoneNumber=".$phoneNumber."&email=".$email);
    exit();
  }

  //Method that checks if the Postcode entered is valid and returns the user to signup with the valid info autofilled
  elseif (!preg_match("/^[a-zA-Z0-9\s]*$/",$postcode)) {
    header("Location: ../index.php?error=invalidPostcode&fn=".$firstName."&ln=".$lastName.
    "&strn=".$streetName."&city=".$city."&phoneNumber=".$phoneNumber."&email=".$email);
    exit();
  }

  //Method that checks if the Phone Number entered is valid and returns the user to signup with the valid info autofilled
  elseif (!preg_match("/^[0-9]*$/",$phoneNumber)) {
    header("Location: ../index.php?error=invalidPhoneNumber&fn=".$firstName."&ln=".$lastName.
    "&strn=".$streetName."&city=".$city."&postcode=".$postcode."&email=".$email);
    exit();
  }

  //Method that checks if the Email entered is valid and returns the user to signup with the valid info autofilled
  elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../index.php?error=invalidEmail&fn=".$firstName."&ln=".$lastName.
    "&strn=".$streetName."&city=".$city."&postcode=".$postcode."&phoneNumber=".$phoneNumber);
    exit();
  }

  //Method that checks if the Password and Re-enter Password are the same
elseif ($password !== $passwordRepeat) {
  header("Location: ../index.php?error=passwordcheck&fn=".$firstName."&ln=".$lastName.
  "&strn=".$streetName."&city=".$city."&postcode=".$postcode."&phoneNumber=".$phoneNumber."&email=".$email);
  exit();
}

  //Method that checks if the email exists in the database
  else {
    //SQL variable that runs an SQL statement to check the email
    $sql = "SELECT emailUsers FROM users WHERE emailUsers=?;";

    //Prepare statement initialization
    $stmt = mysqli_stmt_init($conn);
    //Method that check if the sql can run inside the database without error
    if (!mysqli_stmt_prepare($stmt, $sql)) {
      header("Location: ../index.php?error=sqlError");
      exit();
    }
    //Method that retrieves the email filled by the users checks for duplicity with the database
    else {
      mysqli_stmt_bind_param($stmt,"s",$email);
      mysqli_stmt_execute($stmt);
      mysqli_stmt_store_result($stmt);
      $resultCheck = mysqli_stmt_num_rows($stmt);
      if ($resultCheck > 0) {
        header("Location: ../index.php?error=emailAlreadyTaken&fn=".$firstName."&ln=".$lastName.
        "&strn=".$streetName."&city=".$city."&postcode=".$postcode."&phoneNumber=".$phoneNumber);
        exit();
      }
      else {
        //SQL variable that runs an SQL statement to insert data into the database
        $sql = "INSERT INTO users (accType, emailUsers, pwdUsers, fnUsers, lnUsers, strnUsers, cityUsers, pcdUsers, phnoUsers) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";

        //Prepare statement initialization
        $stmt = mysqli_stmt_init($conn);

        //Method that check if the sql statement can run inside the database without error
        if (!mysqli_stmt_prepare($stmt, $sql)) {
          header("Location: ../index.php?error=sqlUploadError");
          exit();
        }
        //Method that retrieves the input from users and uploads it to the database
        else {
          //Variable that holds the hassed Password
          $hashedPwd = password_hash($password, PASSWORD_DEFAULT);

          mysqli_stmt_bind_param($stmt,"sssssssss",$accType, $email, $hashedPwd, $firstName, $lastName, $streetName, $city, $postcode, $phoneNumber);
          mysqli_stmt_execute($stmt);
          header("Location: ../index.php?signup=success");
          exit();
        }
      }
    }
  }
  mysqli_stmt_close($stmt);
  mysqli_close($conn);
}
else {
  header("Location: ../index.php");
  exit();
}
