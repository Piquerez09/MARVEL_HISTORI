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
<script>
const translations = {
    'pt-BR': {
        title: 'Fãs da Marvel',
        top10Title: 'Top 10 Personagens Mais Poderosos da Marvel',
    },
    'en': {
        title: 'Marvel Fans',
        top10Title: 'Top 10 Most Powerful Marvel Characters',
    },
    'es': {
        title: 'Fans de Marvel',
        top10Title: 'Top 10 Personajes Más Poderosos de Marvel',
    },
    'it': {
        title: 'Fan della Marvel',
        top10Title: 'Top 10 Personaggi più Potenti della Marvel',
    },
};

document.getElementById('settings-button').onclick = function() {
    const menu = document.getElementById('settings-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function changeLanguage(lang) {
    // Atualiza o título e os textos de acordo com a seleção
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('top10-title').textContent = translations[lang].top10Title;

    // Aqui você pode adicionar mais traduções conforme necessário

    // Oculta o menu após a seleção
    document.getElementById('settings-menu').style.display = 'none';
}
</script>
