<?php
define('ROOT_DIR', realpath(__DIR__.'/..'));
$servername = "localhost";
$dBEmail = "root";
$dBPassword = "";
$dBName = "loginsystem";

$conn = mysqli_connect($servername, $dBEmail, $dBPassword, $dBName);

if (!$conn) {
  die("Connection Failed: ".mysqli_connect_error());
}
