<!-- Bootstrap -->
<div id="modalBootstrap" class="modal">
  <div class="modal-content modal_container animate">
    <div class="imgcontainer">
      <span onclick="document.getElementById('modalBootstrap').style.display='none'" class="close" title="Close">&times;</span>
      <div class="badge"><img src="images/badge-bootstrap.png" alt="Html 5 Badge"></div>
      <h1 class="section_title">Bootstrap</h1>
    </div> 
     <section>
       <article>
         <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally)JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.</p>
         <p> Bootstrap is the third-most-starred project on GitHub, with more than 135,000 stars, behind only freeCodeCamp (almost 305,000 stars) and marginally behind Vue.js framework.According to Alexa Rank, Bootstrap getbootstrap.com is in the top-2000 in US while vuejs.org is in top-7000 in US.
          </p>
       </article>
     </section>
     <div class="login_container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('modalBootstrap').style.display='none'">Close</button>
      <span class="psw"><a href="https://getbootstrap.com/" target="_blank">More about Bootstrap</a></span>
    </div>
  </div>
</div>

<script>
// Get the modal
var modal = document.getElementById('modalBootstrap');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
