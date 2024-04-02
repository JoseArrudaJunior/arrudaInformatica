function enviarMensagem(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dispositivoSelect = document.getElementById('dispositivo');
    let dispositivo = dispositivoSelect.options[dispositivoSelect.selectedIndex].text;
    let modelo = document.getElementById('modelo').value;
    let problema = document.getElementById('problema').value;

    // Verifica se todos os campos estão preenchidos
    if (nome && email && dispositivo && modelo && problema) {
        // Monta a mensagem com os dados do formulário
        let mensagem = `Nome: ${nome}\nE-mail: ${email}\nDispositivo: ${dispositivo}\nModelo: ${modelo}\nProblema: ${problema}`;

        // Formata a mensagem para uso em uma URL
        let mensagemCodificada = encodeURIComponent(mensagem);

        // Número de WhatsApp para o qual você deseja enviar a mensagem
        let numeroWhatsapp = '+5584991471224'; // Substitua pelo número de WhatsApp desejado

        // Cria o link para enviar a mensagem via WhatsApp
        let linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;

        // Abre o link em outra página
        window.open(linkWhatsapp, '_blank');
    } else {
        // Se algum campo não estiver preenchido, exibe uma mensagem de erro
        alert('Por favor, preencha todos os campos antes de enviar a mensagem.');
    }
}

const btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click', enviarMensagem)
