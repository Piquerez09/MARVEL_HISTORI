// Por enquanto, não temos funcionalidades específicas, mas aqui podemos adicionar interações no futuro
console.log("Bem-vindo ao Marvel Fans!");
<script>
    const themeSelector = document.getElementById('theme-selector');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const top10Items = document.querySelectorAll('.top-10-item');

    themeSelector.addEventListener('change', () => {
        if (themeSelector.value === 'light') {
            body.classList.add('light');
            header.classList.add('light');
            footer.classList.add('light');
            top10Items.forEach(item => item.classList.add('light'));
        } else {
            body.classList.remove('light');
            header.classList.remove('light');
            footer.classList.remove('light');
            top10Items.forEach(item => item.classList.remove('light'));
        }
    });
</script>
