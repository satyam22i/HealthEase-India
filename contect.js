function sendEmail() {
  var email = document.getElementById('email').value;
  var query = document.getElementById('query').value;
  var mailtoLink = `mailto:satyamkum2020@gmail.com?subject=Query from: ${email}&body=${query}`;


  window.location.href = mailtoLink;
}
document.getElementById('sendButton').addEventListener('click', sendEmail);
