<?php 
if (isset($_SESSION['userId'])) {
  if ($_SESSION['accType']==='Admin' || $_SESSION['userEmail']='ursa.cristian98@gmail.com') {
    $projectName = "eseuribac.ro";
    $checked = "checked";
    require 'dbh.inc.php';
  //SQL variable that runs an SQL statement to check the project name
    $sql = "SELECT * FROM projects WHERE projectName=?;";
  //Prepare statement initialization
    $stmt = mysqli_stmt_init($conn);
  //Method that check if the sql can run inside the database without error
    if (!mysqli_stmt_prepare($stmt, $sql)) {
      $you "cant execute";
    }
  //Method that retrieves the project name and it's details
    else {
      echo = '<h3 class="section_title">ESEURIBAC.RO</h3>'; 
      echo = '<p class="card-text">This is the summary of the tasks assigned and the progress of the current project.</p>';
      mysqli_stmt_bind_param($stmt,"s", $projectName);
      mysqli_stmt_execute($stmt);
      $result = mysqli_stmt_get_result($stmt);
      while(($row = mysqli_fetch_assoc($result))>0) {
        $html = '<li class="list-group-item float-left">';
        $html .= $row['projectTask'];
        $html .= '<form class="was-validated float-right"><div class="custom-control custom-checkbox mb-3"><input type="checkbox" class="custom-control-input" id="task'.$row['projectId'].'" required ';
        if ($row['isCompleted']===1) {
          $html.= $checked;
          $html.= '><label class="custom-control-label" for="task'.$row['projectId'];
          $html.= '">Completed</label></form><div class="invalid-feedback">Task Completed</div></div>';
        }
        else {
          $html.= '><label class="custom-control-label" for="task'.$row['projectId'];
          $html.= '">Incomplete</label></form><div class="invalid-feedback">Task in progress</div></div>';
        }
        $html.= '<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="'.$row['percentage'];
        $html.= '" aria-valuemin="0" aria-valuemax="100" style="width:'.$row['percentage'];
        $html.= '%"></div></div></li>';
        $html .= '<ul id="data" class="list-group list-group-flush">';
        echo $html;
      }
      echo '<a class="button" href="https://eseuribac.ro" target="_blank">Visit Website</a></div></div>';    
    }
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
  }
  else {
    $you = 'your account doesnt have the clearance';
  }
} 
else {
  $you = 'you need to be connected first';
  echo $you;
}


