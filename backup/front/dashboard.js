 // Redireciona para o questionário correspondente
  document.querySelectorAll('.card-option').forEach(card => {
    card.addEventListener('click', () => {
      const iso = card.dataset.id;
      window.location.href = `questionario.html?iso=${iso}`;
    });
  });

  document.getElementById('logoutBtnDash').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
