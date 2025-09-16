document.addEventListener('DOMContentLoaded', function () {
  const navbarCollapse = document.getElementById('navbarNav');

  // Get the existing Bootstrap Collapse instance (or create one)
  let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
  if (!bsCollapse) {
    bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
  }

  // Close menu when any nav-link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });

  // Close menu when clicking outside the navbar
  document.addEventListener('click', (e) => {
    if (!navbarCollapse.contains(e.target) &&
        !e.target.classList.contains('navbar-toggler') &&
        navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    }
  });
});