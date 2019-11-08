<!-- php -->
<div id="modalPhp" class="modal">
  <div class="modal-content modal_container animate">
    <div class="imgcontainer">
      <span onclick="document.getElementById('modalPhp').style.display='none'" class="close" title="Close">&times;</span>
      <div class="badge"><img src="images/badge-php.png" alt="PHP Badge"></div>
      <h1 class="section_title">PHP</h1>
    </div> 
     <section>
       <article>
         <p>PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML. </p>
         <p>What distinguishes PHP from something like client-side JavaScript is that the code is executed on the server, generating HTML which is then sent to the client. The client would receive the results of running that script, but would not know what the underlying code was. </p>
         <p>You can even configure your web server to process all your HTML files with PHP, and then there's really no way that users can tell what you have up your sleeve.
          </p>
       </article>
     </section>
     <div class="login_container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('modalPhp').style.display='none'">Close</button>
      <span class="psw"><a href="https://www.php.net/manual/en/intro-whatis.php" target="_blank">More about PHP</a></span>
    </div>
  </div>
</div>

<script>
// Get the modal
var modal = document.getElementById('modalPhp');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
