<!-- Html -->
<div id="modalHtml" class="modal">
  <div class="modal-content modal_container animate">
    <div class="imgcontainer">
      <span onclick="document.getElementById('modalHtml').style.display='none'" class="close" title="Close">&times;</span>
      <div class="badge"><img src="images/badge-html5.png" alt="Html 5 Badge"></div>
      <h1 class="section_title">HTML</h1>
    </div> 
     <section>
       <article>
         <p>HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications. </p>
         <p>This set is sometimes called HTML5 & friends and often shortened to just HTML5.
          </p>
       </article>
     </section>
     <div class="login_container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('modalHtml').style.display='none'" class="contact_button button">Close</button>
      <span class="psw"><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">More about HTML5</a></span>
    </div>
  </div>
</div>

<script>
// Get the modal
var modal = document.getElementById('modalHtml');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
