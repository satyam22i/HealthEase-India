document.getElementById('feedbackForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var comments = document.getElementById('comments').value;

  alert('Thank you for your feedback, ' + name + '!');

  document.getElementById('feedbackForm').reset();
});
