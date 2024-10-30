// Por enquanto, não temos funcionalidades específicas, mas aqui podemos adicionar interações no futuro
console.log("Bem-vindo ao Marvel Fans!");
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Verifica a preferência de tema armazenada
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Aplica o tema correto ao carregar a página
    if (currentTheme === 'light') {
        document.body.classList.add('light');
        themeToggle.textContent = 'Tema Escuro';
    } else {
        themeToggle.textContent = 'Tema Claro';
    }

    // Evento para alternar entre temas
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light')) {
            // Muda para tema escuro
            localStorage.setItem('theme', 'dark');
            location.reload(); // Atualiza a página
        } else {
            // Muda para tema claro
            localStorage.setItem('theme', 'light');
            location.reload(); // Atualiza a página
        }
    });
});
