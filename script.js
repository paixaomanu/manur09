document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        // Impede a página de recarregar ao enviar o formulário
        event.preventDefault();

        // Captura os valores digitados pelo usuário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Validação simples e feedback visual
        if (nome && email) {
            alert(`Obrigado pelo contato, ${nome}! Juntos construiremos um agro mais forte e sustentável. Enviamos um detalhe do projeto para ${email}.`);
            
            // Limpa o formulário após o envio
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});