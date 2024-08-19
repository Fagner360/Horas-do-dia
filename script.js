function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    
    // Adiciona zero à esquerda se minutos ou segundos forem menores que 10
    minuto = minuto < 10 ? '0' + minuto : minuto;
    segundo = segundo < 10 ? '0' + segundo : segundo;
    
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}.`;
    
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'fotomanha.jpg';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'fototarde.jpg';
        document.body.style.background = '#b9846f';
    } else {
        // Boa noite!
        img.src = 'fotonoite.jpg';
        document.body.style.background = '#515154';
    }
}
