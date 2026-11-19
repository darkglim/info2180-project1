document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.newsletter form');
  const input = document.querySelector('.newsletter input[type="email"]');
  const message = document.querySelector('.newsletter .message');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      message.textContent = 'Please enter a valid email address.';
    } else {
      message.textContent = 'Thank you! Your email address ' + email + ' has been added to our mailing list!';
    }
  });
});
