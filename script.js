// Recupera o valor salvo no navegador ou começa em 0 se for a primeira vez
let totalReciclado = localStorage.getItem('ecoRecicladoContador') ? parseInt(localStorage.getItem('ecoRecicladoContador')) : 0;

// Atualiza a tela assim que a página carrega
document.getElementById('numero-contador').innerText = totalReciclado;

function registrarReciclagem() {
    // Adiciona 1kg ao contador
    totalReciclado += 1;
    
    // Atualiza o texto na tela
    document.getElementById('numero-contador').innerText = totalReciclado;
    
    // Salva o novo valor no banco de dados local do navegador
    localStorage.setItem('ecoRecicladoContador', totalReciclado);
}
