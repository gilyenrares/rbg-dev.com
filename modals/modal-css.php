<!-- Html -->
<div id="modalCss" class="modal">
  <div class="modal-content modal_container animate">
    <div class="imgcontainer">
      <span onclick="document.getElementById('modalCss').style.display='none'" class="close" title="Close">&times;</span>
      <div class="badge"><img src="images/badge-css3.png" alt="CSS 3 Badge"></div>
      <h1 class="section_title">CSS</h1>
    </div> 
     <section>
       <article>
         <p>CSS is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.</p>
         <p> Experimental parts are vendor-prefixed and should either be avoided in production environments, or used with extreme caution as both their syntax and semantics can change in the future.
          </p>
       </article>
     </section>
     <div class="login_container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('modalCss').style.display='none'">Close</button>
      <span class="psw"><a href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" target="_blank">More about CSS 3</a></span>
    </div>
  </div>
</div>

<script>
// Get the modal
var modal = document.getElementById('modalCss');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
