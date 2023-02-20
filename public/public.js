let buttonEl = document.getElementById('contactBtn');
buttonEl.addEventListener('click', function(event){
    const pageName = 'add_user'; // Replace with the desired page name
  fetch(`http://localhost:3000/add_user/`)
    .then(response => response.text())
    .then(html => {
      document.body.innerHTML = html;
    })
})