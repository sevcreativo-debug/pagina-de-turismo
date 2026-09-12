/* =========================================================
   VIAJES ANGEL — footer compartido, inyectado en todas las páginas
   ========================================================= */
(function(){
  const html = `
  <footer>
    <div class="container footer-grid">
      <div data-reveal>
        <div class="f-brand">
          <img src="assets/img/logo-icon.png" alt="Viajes Angel">
          <b>Viajes Angel</b>
        </div>
        <p>Desde el año 2003 promovemos el turismo responsable en Perú y Bolivia: Salar de Uyuni, Cusco, La Paz, Copacabana y la Amazonía, con guías locales y atención personalizada.</p>
        <div class="social-row">
          <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
          <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      <div data-reveal data-delay="80">
        <h4>Sobre nosotros</h4>
        <ul>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="paquetes.html">Paquetes y Tours</a></li>
          <li><a href="preguntas.html">Preguntas Frecuentes</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </div>
      <div data-reveal data-delay="160">
        <h4>Destinos</h4>
        <ul>
          <li><a href="paquetes.html?cat=bolivia">Salar de Uyuni</a></li>
          <li><a href="paquetes.html?cat=bolivia">La Paz &amp; Copacabana</a></li>
          <li><a href="paquetes.html?cat=peru">Cusco &amp; Machu Picchu</a></li>
          <li><a href="paquetes.html?cat=amazonas">Amazonía</a></li>
        </ul>
      </div>
      <div data-reveal data-delay="240">
        <h4>Contacto</h4>
        <ul>
          <li><a href="https://wa.me/51996253851"><i class="fa-brands fa-whatsapp"></i> +51 996 253 851</a></li>
          <li><a href="mailto:reservas@viajesangel.com"><i class="fa-regular fa-envelope"></i> reservas@viajesangel.com</a></li>
          <li><i class="fa-solid fa-location-dot"></i> La Paz, Bolivia &amp; Cusco, Perú</li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>Copyright © 2026 Viajes Angel — Todos los derechos reservados</span>
      <span>Agencia de turismo autorizada · Perú - Bolivia</span>
    </div>
  </footer>`;
  const target = document.getElementById('footer-placeholder');
  if(target) target.outerHTML = html;
})();
