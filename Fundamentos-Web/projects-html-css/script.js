window.onload = function () {

  function alterLinks() {

    const overRedes = document.getElementById('overRedes');

    const imgInitial = document.createElement('img');
    imgInitial.className = 'redes';
    imgInitial.id = 'inicial';
    imgInitial.src = 'images/amos.png';
    imgInitial.style.height = '345px';
    imgInitial.style.width = '400px';
    overRedes.appendChild(imgInitial);

    const links = document.querySelector('.links');
    links.addEventListener('mouseleave', function () {
      overRedes.removeChild(overRedes.firstChild.nextSibling);
      overRedes.appendChild(imgInitial);
    });

    const navLinkedin = document.querySelector('.linkedin');
    const navInstagram = document.querySelector('.instagram');
    const navGtiHub = document.querySelector('.github');
    const navEmail = document.querySelector('.email');

    const navRedesLinkedin = document.querySelector('.linkedin');
    navRedesLinkedin.addEventListener('mouseover', function () {
      let linkeding = document.createElement('img');
      linkeding.className = 'redes';
      linkeding.src = 'images/linkedin.png';
      linkeding.id = 'linkedin';
      linkeding.style.height = '150px';
      linkeding.style.width = '500px';
      linkeding.style.marginTop = '3rem';
      if (navLinkedin.className === linkeding.id) {
        overRedes.removeChild(overRedes.firstChild.nextSibling);
        overRedes.appendChild(linkeding);
      };
    });

    const navRedesInstagram = document.querySelector('.instagram');
    navRedesInstagram.addEventListener('mouseover', function () {
      let instagram = document.createElement('img');
      instagram.className = 'redes';
      instagram.src = "images/instagram.jpeg";
      instagram.id = 'instagram';
      instagram.style.height = '230px';
      instagram.style.width = '420px'
      instagram.style.marginTop = '1.8rem';
      if (navInstagram.className === instagram.id) {
        overRedes.removeChild(overRedes.firstChild.nextSibling);
        overRedes.appendChild(instagram);
      };
    })

    const navRedesGitHub = document.querySelector('.github');
    navRedesGitHub.addEventListener('mouseover', function () {
      let github = document.createElement('img');
      github.className = 'redes';
      github.src = "images/github.png";
      github.id = 'github';
      github.style.height = '200px';
      github.style.width = '500px'
      github.style.marginTop = '2rem';
      if (navGtiHub.className === github.id) {
        overRedes.removeChild(overRedes.firstChild.nextSibling);
        overRedes.appendChild(github);
      };
    })

    const navRedesEmail = document.querySelector('.email');
    navRedesEmail.addEventListener('mouseover', function () {
      let email = document.createElement('img');
      email.className = 'redes';
      email.src = "images/email.png";
      email.id = 'email';
      email.style.height = '200px';
      email.style.width = '300px';
      email.style.marginTop = '2rem';
      if (navEmail.className === email.id) {
        overRedes.removeChild(overRedes.firstChild.nextSibling);
        overRedes.appendChild(email);
      };
    });
  }
  alterLinks();

  function inconeLeft() {
    const navContainer = document.getElementById('header-icons');
    const home = document.querySelector('.home');
    home.addEventListener('mouseover', function () {
      let imgHome = document.createElement('img');
      imgHome.src = 'images/home.png';
      imgHome.id = 'home';
      if (home.classList.contains(imgHome.id)) {
        navContainer.appendChild(imgHome);
      };
    });
    home.addEventListener('mouseleave', function () {
      navContainer.removeChild(navContainer.lastChild);
    });

    const sobremim = document.querySelector('.sobremim');
    sobremim.addEventListener('mouseover', function () {
      let imgSobre = document.createElement('img');
      imgSobre.src = 'images/sobremim.png';
      imgSobre.id = 'sobremim';
      imgSobre.style.height = '168px';
      if (sobremim.classList.contains(imgSobre.id)) {
        navContainer.appendChild(imgSobre);
      }
    });
    sobremim.addEventListener('mouseleave', function () {
      navContainer.removeChild(navContainer.lastChild);
    });

    const contatos = document.querySelector('.contatos');
    contatos.addEventListener('mouseover', function () {
      const imgContatos = document.createElement('img');
      imgContatos.src = 'images/contato.png';
      imgContatos.id = 'contatos';
      if (contatos.classList.contains(imgContatos.id)) {
        navContainer.appendChild(imgContatos);
      }
    });
    contatos.addEventListener('mouseleave', function () {
      navContainer.removeChild(navContainer.lastChild);
    });
  }
  inconeLeft();
}
