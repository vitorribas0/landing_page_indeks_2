document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {
                nome: form.nome.value,
                email: form.email.value,
                telefone: form.telefone.value,
                mensagem: form.mensagem.value
            };
            console.log('Formulário enviado:', formData);
            // Aqui você pode adicionar o código para enviar os dados para seu servidor
            form.reset();
            alert('Mensagem enviada com sucesso!');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});