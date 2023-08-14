<?php if ($_SESSION['accType']==='Admin') {
	echo '<div class="col-xs-6 d-flex justify-content-center">
            <form id="dashboard-auth" action="dashboard.php" method="post"><button type="submit" name="auth-admin" form="dashboard-auth">Dashboard</button></form>
          </div>';
} else{
	echo "";
} ?>
