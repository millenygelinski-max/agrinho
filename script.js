let contador = 0;

function reciclar() {
  contador++;

  const numero = document.getElementById("numero");

  numero.innerText = contador;

  // efeito visual
  numero.style.transform = "scale(1.2)";
  numero.style.color = "#00aa55";

  setTimeout(() => {
    numero.style.transform = "scale(1)";
    numero.style.color = "#2e8b57";
  }, 200);
}

/* animação suave ao clicar no menu */

const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function(e) {

    e.preventDefault();

    const id = this.getAttribute("href");
    const section = document.querySelector(id);

    section.scrollIntoView({
      behavior: "smooth"
    });

  });
});