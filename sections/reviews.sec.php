			<div class="col-lg-6">
				<div class="container">
				<h3><div class="red-subtitle">About RBG from users</div></h3>
				<h2><div class="white-title">Reviews</div></h2>
				</div>
			</div>
			<?php
			require __DIR__.'/../includes/dbh.inc.php';
			//SQL variable that runs an SQL statement to get the latest reviews 
		    $sql = "SELECT * FROM `reviews` ORDER BY `reviews`.`opinionId`  DESC";
		  //Prepare statement initialization
		    $stmt = mysqli_stmt_init($conn);
		  //Method that check if the sql can run inside the database without error
		    if (!mysqli_stmt_prepare($stmt, $sql)) {
		      $error ="cant execute";
		      echo $error;
		    }
		  //Method that retrieves the project name and it's details
		    else {
		    	$top10 =10;
		      	mysqli_stmt_execute($stmt);
		     	$result = mysqli_stmt_get_result($stmt);
		      	while((($row = mysqli_fetch_assoc($result))>0) &&($top10>0)) {
		      		--$top10;
		      		$code = '<!-- Review --><div class="col-lg-6"><div class="mb-5 pt-5 d-flex flex-row align-items-start justify-content-start"><img class="rounded-circle avatar" src="images/img_user.png" alt=""><div class="pl-2"><div class="test_name"><a href="#">';
		      		$code .= $row['firstName'].' '.substr($row['lastName'],0,1).'.</a></div><div class="test_email">';
		      		$code .= $row['accType']. '</div><div class="test_text"><p>';
		      		$code .= $row['opinion']. '</p></div><div class="rating ';
		      		$code .= $row['rating'].' mt-3"><i></i><i></i><i></i><i></i><i></i></div></div></div></div>';
		      		echo $code;
		      	}
		    mysqli_stmt_close($stmt);
		    mysqli_close($conn);
		    }
			 ?>
