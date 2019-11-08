<!-- WordPress -->
<div id="modalWordPress" class="modal">
  <div class="modal-content modal_container animate">
    <div class="imgcontainer">
      <span onclick="document.getElementById('modalWordPress').style.display='none'" class="close" title="Close">&times;</span>
      <div class="badge"><img src="images/badge-wordpress.png" alt="WordPress Badge"></div>
      <h1 class="section_title">WordPress</h1>
    </div> 
     <section>
       <article>
         <p>WordPress allows you to build a website that meets your unique needs. Start a blog, business site, portfolio, online store, or anything else you can imagine. With built‑in optimization and responsive, mobile‑ready themes, there’s no limit to who you can reach with your new website.</p>
         <p> Create a simple website for your family or sell products around the world—it’s up to you.
          </p>
       </article>
     </section>
     <div class="login_container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('modalWordPress').style.display='none'">Close</button>
      <span class="psw"><a href="https://wordpress.com/" target="_blank">More about WordPress</a></span>
    </div>
  </div>
</div>

<script>
// Get the modal
var modal = document.getElementById('modalWordPress');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
