(function(){
  const PASSWORD = "angel2026";
  const STORAGE_TOURS = "viajesAngel.admin.tours";
  const STORAGE_CONTACT = "viajesAngel.admin.contact";

  const sourceTours = typeof TOURS !== "undefined" ? TOURS : [];
  const defaultTours = sourceTours.map(function(t){ return Object.assign({active:true}, t); });
  let tours = load(STORAGE_TOURS, defaultTours);
  if((!Array.isArray(tours) || tours.length === 0) && defaultTours.length){ tours = defaultTours; }
  let selected = 0;

  const contactDefaults = {
    whatsappLabel: "+51 956 713 491",
    whatsappLink: "51956713491",
    email: "grupotrecking@gmail.com",
    location: "La Paz, Bolivia & Cusco, Peru"
  };
  let contact = load(STORAGE_CONTACT, contactDefaults);

  const $ = function(sel){ return document.querySelector(sel); };
  const $$ = function(sel){ return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  function load(key, fallback){
    try{
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    }catch(e){
      return fallback;
    }
  }

  function save(){
    localStorage.setItem(STORAGE_TOURS, JSON.stringify(tours));
    localStorage.setItem(STORAGE_CONTACT, JSON.stringify(contact));
    renderExport();
    toast("Cambios guardados en este navegador.");
  }

  function slugify(value){
    return String(value || "nuevo-paquete")
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "nuevo-paquete";
  }

  function splitComma(value){
    return String(value || "").split(",").map(function(v){ return v.trim(); }).filter(Boolean);
  }

  function splitLines(value){
    return String(value || "").split(/\r?\n/).map(function(v){ return v.trim(); }).filter(Boolean);
  }

  function imageUrl(name){
    if(!name) return "";
    return /^https?:\/\//.test(name) ? name : "assets/img/" + name;
  }

  function renderList(){
    const q = ($("#tour-search").value || "").toLowerCase();
    const list = $("#tour-list");
    list.innerHTML = "";
    let shown = 0;
    tours.forEach(function(tour, index){
      if(q && !String(tour.title || "").toLowerCase().includes(q)) return;
      shown += 1;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tour-item" + (index === selected ? " is-active" : "");
      btn.innerHTML = "<strong>"+escapeHtml(tour.title)+"</strong><span>"+escapeHtml(tour.country || "")+" · "+escapeHtml(tour.duration || "")+"</span><em>"+(tour.price === "Cotizar" ? "Cotizar" : "$"+escapeHtml(tour.price || "Cotizar"))+"</em>";
      if(tour.active === false) btn.innerHTML += "<span>Oculto</span>";
      btn.addEventListener("click", function(){
        selected = index;
        renderList();
        fillForm();
      });
      list.appendChild(btn);
    });
    if(!shown){
      list.innerHTML = '<div class="empty-admin">No hay paquetes para mostrar. Usa Nuevo paquete para crear uno.</div>';
    }
  }

  function renderImagePreview(name){
    const box = $("#image-preview");
    if(!box) return;
    if(!name){
      box.textContent = "Escribe el nombre de una imagen o pega una URL.";
      return;
    }
    box.innerHTML = '<img src="'+escapeHtml(imageUrl(name))+'" alt="Vista previa de imagen">';
  }

  function fillForm(){
    const tour = tours[selected];
    if(!tour){
      $("#editing-title").textContent = "Crea un paquete nuevo";
      return;
    }
    const form = $("#tour-form");
    $("#editing-title").textContent = tour.title || "Nuevo paquete";
    form.active.checked = tour.active !== false;
    form.title.value = tour.title || "";
    form.country.value = tour.country || "";
    form.category.value = tour.category || "bolivia";
    form.price.value = tour.price || "";
    form.priceNote.value = tour.priceNote || "";
    form.duration.value = tour.duration || "";
    form.people.value = tour.people || "";
    form.badge.value = tour.badge || "";
    form.badgeText.value = tour.badgeText || "";
    form.image.value = tour.image || "";
    renderImagePreview(tour.image || "");
    form.gallery.value = (tour.gallery || []).join(", ");
    form.summary.value = tour.summary || "";
    form.tags.value = (tour.tags || []).join(", ");
    form.incluye.value = (tour.incluye || []).join("\n");
    form.noIncluye.value = (tour.noIncluye || []).join("\n");
    form.llevar.value = (tour.llevar || []).join("\n");
  }

  function readForm(){
    if(!tours[selected]) return;
    const form = $("#tour-form");
    const title = form.title.value.trim() || "Nuevo paquete";
    tours[selected] = Object.assign({}, tours[selected], {
      active: form.active.checked,
      slug: tours[selected].slug || slugify(title),
      title: title,
      country: form.country.value.trim(),
      category: form.category.value,
      price: form.price.value.trim(),
      priceNote: form.priceNote.value.trim(),
      duration: form.duration.value.trim(),
      people: form.people.value.trim(),
      badge: form.badge.value,
      badgeText: form.badgeText.value.trim(),
      image: form.image.value.trim(),
      gallery: splitComma(form.gallery.value),
      summary: form.summary.value.trim(),
      tags: splitComma(form.tags.value),
      incluye: splitLines(form.incluye.value),
      noIncluye: splitLines(form.noIncluye.value),
      llevar: splitLines(form.llevar.value)
    });
    renderImagePreview(tours[selected].image || "");
    renderList();
    renderExport();
  }

  function fillContact(){
    const form = $("#contact-form");
    form.whatsappLabel.value = contact.whatsappLabel;
    form.whatsappLink.value = contact.whatsappLink;
    form.email.value = contact.email;
    form.location.value = contact.location;
  }

  function readContact(){
    const form = $("#contact-form");
    contact = {
      whatsappLabel: form.whatsappLabel.value.trim(),
      whatsappLink: form.whatsappLink.value.trim(),
      email: form.email.value.trim(),
      location: form.location.value.trim()
    };
    renderExport();
  }

  function dataJs(){
    const cleanTours = tours.filter(function(t){ return t.active !== false; }).map(function(t){
      const copy = Object.assign({}, t);
      delete copy.active;
      return copy;
    });
    return "/* =========================================================\\n" +
      "   VIAJES ANGEL — datos de tours (fuente única para todas las páginas)\\n" +
      "   ========================================================= */\\n" +
      "const TOURS = " + JSON.stringify(cleanTours, null, 2) + ";\\n\\n" +
      "const CONTACT = " + JSON.stringify(contact, null, 2) + ";\\n\\n" +
      "function tourImg(name){ return /^https?:\\/\\//.test(name) ? name : \"assets/img/\" + name; }\\n";
  }

  function renderExport(){
    const out = $("#export-code");
    if(out) out.value = dataJs();
  }

  function download(){
    const blob = new Blob([dataJs()], {type:"text/javascript"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.js";
    a.click();
    URL.revokeObjectURL(url);
  }

  function escapeHtml(value){
    return String(value || "").replace(/[&<>"']/g, function(ch){
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch];
    });
  }

  function toast(message){
    const note = document.createElement("div");
    note.textContent = message;
    note.style.cssText = "position:fixed;right:18px;bottom:18px;background:#073e5d;color:#fff;padding:12px 16px;border-radius:12px;font-weight:800;z-index:50;box-shadow:0 16px 40px rgba(0,0,0,.18)";
    document.body.appendChild(note);
    setTimeout(function(){ note.remove(); }, 2200);
  }

  $("#login-form").addEventListener("submit", function(e){
    e.preventDefault();
    if($("#admin-password").value === PASSWORD){
      localStorage.removeItem(STORAGE_TOURS);
      $("#login-panel").classList.add("is-hidden");
      $("#admin-app").classList.remove("is-hidden");
      tours = defaultTours.slice();
      renderList();
      fillForm();
      fillContact();
      renderExport();
    }else{
      toast("Contraseña incorrecta.");
    }
  });

  $$(".admin-tab").forEach(function(tab){
    tab.addEventListener("click", function(){
      $$(".admin-tab").forEach(function(t){ t.classList.remove("is-active"); });
      $$(".admin-panel").forEach(function(p){ p.classList.add("is-hidden"); });
      tab.classList.add("is-active");
      $("#" + tab.dataset.panel).classList.remove("is-hidden");
      $("#panel-title").textContent = tab.textContent.trim();
      renderExport();
    });
  });

  $("#tour-form").addEventListener("input", readForm);
  $("#contact-form").addEventListener("input", readContact);
  $("#tour-search").addEventListener("input", renderList);
  $("#save-local").addEventListener("click", save);
  $("#preview-site").addEventListener("click", function(){ window.open("index.html", "_blank"); });
  $("#download-data").addEventListener("click", download);
  $("#copy-data").addEventListener("click", function(){
    navigator.clipboard.writeText(dataJs()).then(function(){ toast("Código copiado."); });
  });
  $("#new-tour").addEventListener("click", function(){
    tours.unshift({
      active:true,
      slug:"nuevo-paquete-" + Date.now(),
      title:"Nuevo paquete",
      country:"Bolivia",
      category:"bolivia",
      badge:"new",
      badgeText:"Nuevo",
      price:"Cotizar",
      priceNote:"por persona",
      duration:"1 día",
      people:"Salidas privadas",
      image:"uyuni-sunset.jpg",
      gallery:["uyuni-sunset.jpg"],
      summary:"",
      tags:[],
      incluye:[],
      noIncluye:[],
      llevar:[],
      itinerario:[]
    });
    selected = 0;
    renderList();
    fillForm();
    save();
  });
  $("#duplicate-tour").addEventListener("click", function(){
    if(!tours[selected]) return;
    const copy = JSON.parse(JSON.stringify(tours[selected]));
    copy.slug = slugify(copy.title) + "-copia-" + Date.now();
    copy.title = copy.title + " copia";
    tours.splice(selected + 1, 0, copy);
    selected += 1;
    renderList();
    fillForm();
    save();
  });
  $("#delete-tour").addEventListener("click", function(){
    if(!tours[selected]) return;
    if(!confirm("¿Retirar este paquete del catálogo?")) return;
    tours.splice(selected, 1);
    selected = Math.max(0, selected - 1);
    renderList();
    fillForm();
    save();
  });
  $("#reset-demo").addEventListener("click", function(){
    if(!confirm("¿Restaurar los datos originales del navegador?")) return;
    localStorage.removeItem(STORAGE_TOURS);
    localStorage.removeItem(STORAGE_CONTACT);
    tours = defaultTours.slice();
    contact = contactDefaults;
    selected = 0;
    renderList();
    fillForm();
    fillContact();
    renderExport();
  });
})();