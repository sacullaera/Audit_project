document.querySelectorAll('.card-option').forEach(card => {
  card.addEventListener('click', () => {
    const iso = card.dataset.id;
    if (iso === '27034') {
      window.location.href = '/questionario/';
    }
  });
});

document.getElementById('logoutBtnDash').addEventListener('click', () => {
  window.location.href = '/';  // volta para login
});

document.getElementById("voltar").addEventListener("click", () => {
  window.location.href = "/dashboard/";
});