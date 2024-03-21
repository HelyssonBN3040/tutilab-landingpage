document.addEventListener("DOMContentLoaded", function () {
    const menuIcons = document.querySelector('.menu-icons');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    function updateArrowVisibility() {
        const isAtEnd = menuIcons.scrollWidth - Math.floor(menuIcons.scrollLeft) <= menuIcons.clientWidth;
        const isAtStart = menuIcons.scrollLeft === 0;

        arrowRight.style.display = isAtEnd ? 'inherit' : '';
        arrowLeft.style.display = isAtStart ? 'none' : '';
    }

    menuIcons.addEventListener('scroll', updateArrowVisibility);

    updateArrowVisibility();

    arrowRight.addEventListener('click', () => {
        menuIcons.scrollBy({ left: 120, behavior: 'smooth' });
    });

    arrowLeft.addEventListener('click', () => {
        menuIcons.scrollBy({ left: -120, behavior: 'smooth' });
    });

    updateArrowVisibility();
});


document.addEventListener("DOMContentLoaded", function () {
    const menuIcons = document.querySelectorAll('.button-menu');
    const titleCard = document.querySelector('.title-card');

    // Adiciona um ouvinte de evento de clique a cada ícone
    menuIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Obtém o texto do atributo 'data-tech' do ícone clicado
            const tech = icon.getAttribute('data-tech');
            // Atualiza o conteúdo da tag <strong> com o texto obtido
            titleCard.textContent = tech;
        });
    });
});

//FrontEnd
const TextSass = "Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass. "
const TextVue = "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única."
const TextTypescript = "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem."
const TextGithub = "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo."
const TextHtml = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo."
const TextJs = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."
const TextCss = "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos."


//BackEnd



var originalOptions = `
<li><img class="button-menu" src="./assets/sass.svg" data-tech="Sass" onclick="changeText(TextSass)"></li>
<li><img class="button-menu" src="./assets/vue-logo.svg"  data-tech="Vue.js" onclick="changeText(TextVue)"></li>
<li><img class="button-menu" src="./assets/typescript.svg" data-tech="TypeScript" onclick="changeText(TextTypescript)"></li>
<li><img class="button-menu" src="./assets/github.svg" data-tech="GitHub" onclick="changeText(TextGithub)"></li>
<li><img class="button-menu" src="./assets/html.svg" data-tech="HTML" onclick="changeText(TextHtml)"></li>
<li><img class="button-menu" src="./assets/js.svg" data-tech="JavaScript" onclick="changeText(TextJs)"></li>
<li><img class="button-menu" src="./assets/css.svg" data-tech="CSS" onclick="changeText(TextCss)"></li>

`;
var newOptions = `
    <li><img class="button-menu" src="./assets/sass.svg" data-tech="Sass" onclick="changeText(TextSass)"></li>
    <li><img class="button-menu" src="./assets/vue-logo.svg"  data-tech="Vue.js" onclick="changeText(TextVue)"></li>
    <li><a href="#" onclick="changeText('Novo Contato')">Novo Contato</a></li>
`;

// Função para mostrar as opções originais
function showOriginalOptions() {
    document.getElementById("menuCarrosel").innerHTML = originalOptions;
}

// Função para mostrar as novas opções
function showNewOptions() {
    document.getElementById("menuCarrosel").innerHTML = newOptions;
}

// Função para alterar o texto
function changeText(texto) {
    document.getElementById("text-alvo").innerText = texto;
}

// Exibir opções originais por padrão
showOriginalOptions();