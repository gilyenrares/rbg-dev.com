<?php 

$projectName = "eseuribac.ro";
$checked = "checked";
require 'dbh.inc.php';
//SQL variable that runs an SQL statement to check the project name
$sql = "SELECT * FROM projects WHERE projectName=?;";
//Prepare statement initialization
$stmt = mysqli_stmt_init($conn);
//Method that check if the sql can run inside the database without error
if (!mysqli_stmt_prepare($stmt, $sql)) {
  echo "cant execute";
  exit();
}//Method that retrieves the project name and it's details
else {
  mysqli_stmt_bind_param($stmt,"s", $projectName);
  mysqli_stmt_execute($stmt);
  $result = mysqli_stmt_get_result($stmt);
  while(($row = mysqli_fetch_assoc($result))>0) {
    $html= '<li class="list-group-item float-left">';
    $html.= $row['projectTask'];
    $html.= '<form class="was-validated float-right"><div class="custom-control custom-checkbox mb-3"><input type="checkbox" class="custom-control-input" id="task'.$row['projectId'].'" required ';
    if ($row['isCompleted']===1) {
    	$html.= $checked;
    	$html.= '><label class="custom-control-label" for="task'.$row['projectId'];
    	$html.= '">Completed</label></form><div class="invalid-feedback">Task Completed</div></div>';
    	}else {
    		$html.= '><label class="custom-control-label" for="task'.$row['projectId'];
    		$html.= '">Incomplete</label></form><div class="invalid-feedback">Task in progress</div></div>';
    	}
    	$html.= '<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="'.$row['percentage'];
  		$html.= '" aria-valuemin="0" aria-valuemax="100" style="width:'.$row['percentage'];
  		$html.= '%"></div></div></li>';
		echo $html;
  }
}

