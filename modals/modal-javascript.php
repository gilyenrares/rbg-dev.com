<!-- JavaScript -->
<div id="modalJavaScript" class="modal">
  <div class="modal-content modal_container animate">
    <div class="imgcontainer">
      <span onclick="document.getElementById('modalJavaScript').style.display='none'" class="close" title="Close">&times;</span>
      <div class="badge"><img src="images/badge-javascript.png" alt="JavaScript Badge"></div>
      <h1 class="section_title">JavaScript</h1>
    </div> 
     <section>
       <article>
         <p>JavaScript is a resource built by the Pluralsight team for the JavaScript community.Because JavaScript is a great language for coding beginners, we've gathered some of the best learning resources around and built a JavaScript course to help new developers get up and running.</p>
         <p>With the help of community members contributing content to the site, JavaScript.com aims to also keep more advanced developers up to date on news, frameworks, and libraries.
          </p>
       </article>
     </section>
     <div class="login_container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('modalJavaScript').style.display='none'">Close</button>
      <span class="psw"><a href="https://www.javascript.com/" target="_blank">More about JavaScript</a></span>
    </div>
  </div>
</div>

<script>
// Get the modal
var modal = document.getElementById('modalJavaScript');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
