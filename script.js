// Por enquanto, não temos funcionalidades específicas, mas aqui podemos adicionar interações no futuro
console.log("Bem-vindo ao Marvel Fans!");
<script>
document.getElementById('settings-button').onclick = function() {
    var menu = document.getElementById('settings-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function changeLanguage(lang) {
    alert('Idioma mudado para: ' + lang);
    // Aqui você pode implementar a lógica para mudar o idioma do conteúdo.
}
</script>
