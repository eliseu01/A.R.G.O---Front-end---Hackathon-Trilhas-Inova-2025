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
