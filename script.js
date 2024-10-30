// Por enquanto, não temos funcionalidades específicas, mas aqui podemos adicionar interações no futuro
console.log("Bem-vindo ao Marvel Fans!");
<script>
    // Verifica se há uma preferência de tema armazenada
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const top10Items = document.querySelectorAll('.top-10-item');
    const themeSelector = document.getElementById('theme-selector');

    // Define o tema inicial
    if (savedTheme) {
        body.classList.toggle('light', savedTheme === 'light');
        header.classList.toggle('light', savedTheme === 'light');
        footer.classList.toggle('light', savedTheme === 'light');
        top10Items.forEach(item => item.classList.toggle('light', savedTheme === 'light'));
        themeSelector.value = savedTheme; // Atualiza o seletor de tema
    }

    // Adiciona evento de mudança ao seletor de tema
    themeSelector.addEventListener('change', () => {
        const theme = themeSelector.value;
        localStorage.setItem('theme', theme); // Armazena a preferência de tema
        location.reload(); // Atualiza a página
    });
</script>
