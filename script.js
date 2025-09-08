document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.querySelector('.nav');

  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        nav.classList.remove('open');
      }
    });
  });

  // contact form simple feedback
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    if (!email) {
      msg.textContent = 'Please enter your email.';
      return;
    }
    msg.textContent = `Thanks! We'll contact ${email}.`;
    form.reset();
  });

  // set footer year
  document.getElementById('year').textContent = new Date().getFullYear();
});
