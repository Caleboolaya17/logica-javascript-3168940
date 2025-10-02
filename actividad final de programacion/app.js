 // Limpia resaltados previos
function limpiarResaltados() {
  const marcados = document.querySelectorAll('mark');
  marcados.forEach(el => {
    const texto = el.textContent;
    el.parentNode.replaceChild(document.createTextNode(texto), el);
  });
}

// Busca y resalta texto
function buscarTexto() {
  limpiarResaltados(); // Limpia anteriores

  const termino = document.getElementById('busqueda').value.toLowerCase().trim();
  if (!termino) return false;

  const contenido = document.body.innerHTML;
  let encontrado = false;

  const regex = new RegExp(`(${termino})`, 'gi');

  document.querySelectorAll('p, h1, h2, h3, li').forEach(el => {
    if (el.textContent.toLowerCase().includes(termino)) {
      el.innerHTML = el.innerHTML.replace(regex, '<mark>$1</mark>');
      encontrado = true;
    }
  });

  if (!encontrado) {
    alert(`No se encontraron resultados para: "${termino}"`);
  }

  return false; // Evita recargar la página
}
 
 
 
 //funcuines del form//
 const formulario = document.getElementById('formulario');
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');
    const mensajeExito = document.getElementById('mensajeExito');

    formulario.addEventListener('submit', function(e) {
      e.preventDefault(); // Evita que se recargue la página

      // Validación simple
      if (nombre.value.trim() === '' || correo.value.trim() === '' || mensaje.value.trim() === '') {
        alert('Por favor completa todos los campos.');
        return;
      }

      // Aquí podrías enviar el formulario con fetch(), AJAX, etc.

      // Mostrar mensaje de éxito
      mensajeExito.style.display = 'block';

      // Limpiar los campos
      formulario.reset();

      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        mensajeExito.style.display = 'none';
      }, 3000);
    });

    const audio = document.getElementById('audioHelenita');
  const button = document.getElementById('audioBtn');

  function toggleAudio() {
    if (audio.paused) {
      audio.play();
      button.textContent = '⏸ Pausar';
    } else {
      audio.pause();
      button.textContent = '▶ Escuchar';
    }

    audio.onended = function () {
      button.textContent = '▶ Escuchar';
    };
  }

   const video = document.getElementById('videoHelenita');
  const videoContainer = document.getElementById('videoContainer');
  const videoBtn = document.getElementById('videoBtn');

  function toggleVideo() {
    if (videoContainer.style.display === 'none') {
      videoContainer.style.display = 'block';
      video.play();
      videoBtn.textContent = '⏸ Pausar video';
    } else {
      video.pause();
      video.currentTime = 0; // Reinicia el video
      videoContainer.style.display = 'none';
      videoBtn.textContent = '▶ Ver video';
    }

    // Restablecer botón al finalizar el video
    video.onended = function () {
      videoBtn.textContent = '▶ Ver video';
      videoContainer.style.display = 'none';
    };
  }

  
  function openModal() {
    document.getElementById("bioModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("bioModal").style.display = "none";
  }

  // Cerrar modal al hacer clic fuera del contenido
  window.onclick = function(event) {
    const modal = document.getElementById("bioModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

