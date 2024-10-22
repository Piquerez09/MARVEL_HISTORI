// Por enquanto, não temos funcionalidades específicas, mas aqui podemos adicionar interações no futuro
console.log("Bem-vindo ao Marvel Fans!");
<script>
    const toggleButton = document.getElementById('theme-toggle');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light');
        document.querySelector('header').classList.toggle('light');
        document.querySelectorAll('h2').forEach(h2 => h2.classList.toggle('light'));
        document.querySelector('footer').classList.toggle('light');
        toggleButton.classList.toggle('light');
    });
</script>
