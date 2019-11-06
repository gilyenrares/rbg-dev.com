<!-- jQuery -->
<div id="modaljQuery" class="modal">
  <div class="modal-content modal_container animate">
    <div class="imgcontainer">
      <span onclick="document.getElementById('modaljQuery').style.display='none'" class="close" title="Close">&times;</span>
      <div class="badge"><img src="images/badge-jquery.png" alt="jQuery  Badge"></div>
      <h1 class="section_title">jQuery</h1>
    </div> 
     <section>
       <article>
         <p>jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.</p>
         <p> With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.
          </p>
       </article>
     </section>
     <div class="login_container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('modaljQuery').style.display='none'" class="contact_button button">Close</button>
      <span class="psw"><a href="https://jquery.com/" target="_blank">More about jQuery</a></span>
    </div>
  </div>
</div>

<script>
// Get the modal
var modal = document.getElementById('modaljQuery');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
