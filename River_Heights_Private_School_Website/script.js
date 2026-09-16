
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.mobile-menu');
  const nav = document.querySelector('nav');
  if(menu) menu.addEventListener('click', () => nav.classList.toggle('open'));

  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    if(a.getAttribute('href') === path) a.classList.add('active');
  });

  const form = document.querySelector('#inquiryForm');
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent('River Heights Private School enquiry - ' + data.get('name'));
      const body = encodeURIComponent(
        'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') +
        '\nPhone: ' + data.get('phone') + '\nEnquiry type: ' + data.get('type') +
        '\n\nMessage:\n' + data.get('message')
      );
      const msg = document.querySelector('.form-msg');
      msg.style.display = 'block';
      msg.textContent = 'Thank you. Your enquiry is ready to be sent. Your email application will open next.';
      window.location.href = 'mailto:info@riverheightsprivateschool.na?subject=' + subject + '&body=' + body;
    });
  }
});
