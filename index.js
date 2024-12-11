document.getElementById('form-consulta').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const modalidade = document.getElementById('modalidade').value;
    const data = document.getElementById('data').value;

    // Criar mensagem para o WhatsApp
    const mensagem = `Olá, meu nome é ${nome}. Gostaria de agendar uma consulta para ${modalidade} no dia ${data}.`;
    const numeroWhatsApp = '5588981944109'; // Substitua pelo seu número de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    // Redirecionar para o WhatsApp
    window.open(urlWhatsApp, '_blank');
  });
