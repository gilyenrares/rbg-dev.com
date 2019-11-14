<?php

if(isset($_POST['login-submit'])){

  require 'dbh.inc.php';

  $email = $_POST['email'];
  $password = $_POST['pwd'];

  //Method that checks empty fields and returns the user to login with the valid info autofilled
  if (empty($email) || empty($password)) {
    header("Location: ../index.php?error=emptyfields&email=".$email);
    exit();
  }
  //Method that checks if the email exists in the database
  else {
    //SQL variable that runs an SQL statement to check the email
    $sql = "SELECT * FROM users WHERE emailUsers=?;";

    //Prepare statement initialization
    $stmt = mysqli_stmt_init($conn);

    //Method that check if the sql can run inside the database without error
    if (!mysqli_stmt_prepare($stmt, $sql)) {
      header("Location: ../index.php?error=sqlError");
      exit();
    }

    //Method that retrieves the email filled by the users checks for duplicity with the database
    else {

      mysqli_stmt_bind_param($stmt,"s", $email);
      mysqli_stmt_execute($stmt);
      $result = mysqli_stmt_get_result($stmt);
      if ($row = mysqli_fetch_assoc($result)) {
        $pwdCheck = password_verify($password, $row['pwdUsers']);
        if ($pwdCheck == false) {
          header("Location: ../index.php?error=wrongPassword&email=".$email);
          exit();
        }
        elseif ($pwdCheck == true) {
          session_start();
          $_SESSION['userId'] = $row['idUsers'];
          $_SESSION['userEmail'] = $row['emailUsers'];
          $_SESSION['accType'] = $row['accType'];
          $_SESSION['fn'] = $row['fnUsers'];
          $_SESSION['ln'] = $row['lnUsers'];
          $_SESSION['tel'] = $row['phnoUsers'];
          $_SESSION['str'] = $row['strnUsers'];
          $_SESSION['city'] = $row['cityUsers'];
          $_SESSION['pcd'] = $row['pcdUsers'];

          header("Location: ../index.php?login=success");
          exit();
        }
        else {
          header("Location: ../index.php?error=wrongPassword");
          exit();
        }
      }
      else{
        header("Location: ../index.php?error=noUserFound");
        exit();
      }

    }
}

}
else {
  header("Location: ../index.php");
  exit();
}
