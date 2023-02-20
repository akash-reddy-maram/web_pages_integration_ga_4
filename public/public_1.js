let buttonEl = document.getElementById('contactBtn');
buttonEl.addEventListener('click', function(event){
    const pageName = 'add_user'; // Replace with the desired page name
  fetch(`/add_user/`)
    .then(response => response.text())
    .then(html => {
      document.head.innerHTML = html.head;
      document.body.innerHTML = html;
      console.log(html);
    });
});