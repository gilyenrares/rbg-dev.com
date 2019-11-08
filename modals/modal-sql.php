<!-- Sql -->
<div id="modalSql" class="modal">
  <div class="modal-content modal_container animate">
    <div class="imgcontainer">
      <span onclick="document.getElementById('modalSql').style.display='none'" class="close" title="Close">&times;</span>
      <div class="badge"><img src="images/badge-sql.png" alt="Sql Badge"></div>
      <h1 class="section_title">Sql</h1>
    </div> 
     <section>
       <article>
         <p>Sql Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network (including the Internet).</p>
         <p> Microsoft markets at least a dozen different editions of Microsoft SQL Server, aimed at different audiences and for workloads ranging from small single-machine applications to large Internet-facing applications with many concurrent users.
          </p>
       </article>
     </section>
     <div class="login_container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('modalSql').style.display='none'">Close</button>
      <span class="psw"><a href="https://docs.microsoft.com/en-us/sql/sql-server/sql-server-ver15-release-notes?view=sqlallproducts-allversions" target="_blank">More about Mircosoft Sql</a></span>
    </div>
  </div>
</div>

<script>
// Get the modal
var modal = document.getElementById('modalSql');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
