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


     let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.getElementsByClassName("imagem-modalidade");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            slides[slideIndex - 1].style.display = "block";  
            setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
        }

        function moveSlide(n) {
            slideIndex += n;
            let slides = document.getElementsByClassName("imagem-modalidade");
            if (slideIndex > slides.length) {slideIndex = 1}
            if (slideIndex < 1) {slideIndex = slides.length}
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slides[slideIndex - 1].style.display = "block";  
        }
