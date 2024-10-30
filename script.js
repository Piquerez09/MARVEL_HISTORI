// Por enquanto, não temos funcionalidades específicas, mas aqui podemos adicionar interações no futuro
console.log("Bem-vindo ao Marvel Fans!");
<script>
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const top10Items = document.querySelectorAll('.top-10-item');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        header.classList.toggle('light-mode');
        footer.classList.toggle('light-mode');
        top10Items.forEach(item => item.classList.toggle('light-mode'));
    });
</script>
