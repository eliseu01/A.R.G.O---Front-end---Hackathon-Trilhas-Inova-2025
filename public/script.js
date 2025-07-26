// Toggle do menu do usuário (ícone no canto superior direito)
document.addEventListener('DOMContentLoaded', function () {
  const userIcon = document.getElementById('user-icon');
  const userMenu = document.getElementById('user-menu');

  userIcon.addEventListener('click', () => {
    userMenu.classList.toggle('hidden');
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', function (event) {
    if (!userIcon.contains(event.target) && !userMenu.contains(event.target)) {
      userMenu.classList.add('hidden');
    }
  });
});


// Old Collapsible
// document.querySelectorAll('.collapsible').forEach(button => {
//   button.addEventListener('click', () => {
//     const content = button.nextElementSibling;
//     button.classList.toggle('active');

//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + 'px';
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");

  steps.forEach((step) => {
    step.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      // Fecha todos os outros
      steps.forEach((s) => {
        s.classList.remove("active");
        const content = s.querySelector(".content");
        if (content) content.style.maxHeight = null;
        if (content){
          content.style.maxHeight = null;
          content.style.marginBottom = null;
        }
      });

      // Abre somente se o clicado não estava ativo
      if (!isActive) {
        this.classList.add("active");
        const content = this.querySelector(".content");
        if (content){
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.marginBottom = '20px';
        }
      }
    });
  });
});


const cards = document.querySelectorAll('.aplicacao-card');
const iframe = document.querySelector('.video-wrapper iframe');

cards.forEach(card => {
  const icon = card.querySelector('.toggle-icon');
  const span = card.querySelector('span');

  // Initial setup
  card.classList.contains('active')
    ? icon.classList.add('fa-minus')
    : icon.classList.add('fa-plus');

  card.addEventListener('click', () => {
    const isOpen = card.classList.contains('active');

    if (isOpen) {
      card.classList.remove('active');
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    } else {
      cards.forEach(c => {
        c.classList.remove('active');
        c.querySelector('.toggle-icon').classList.remove('fa-minus');
        c.querySelector('.toggle-icon').classList.add('fa-plus');
      });

      card.classList.add('active');
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');

      const videoUrl = card.getAttribute('data-video');
      iframe.src = videoUrl;
    }
  });
});




