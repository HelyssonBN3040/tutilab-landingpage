document.addEventListener("DOMContentLoaded", function () {
    const menuIcons = document.querySelector('.menu-icons');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    function updateArrowVisibility() {
        const isAtEnd = menuIcons.scrollWidth - Math.floor(menuIcons.scrollLeft) <= menuIcons.clientWidth;
        const isAtStart = menuIcons.scrollLeft <= 0;

        arrowRight.style.display = isAtEnd ? 'none' : '';
        arrowLeft.style.display = isAtStart ? 'none' : '';
    }
    window.addEventListener('load', function () {
        updateArrowVisibility();
    });

    menuIcons.addEventListener('scroll', updateArrowVisibility);

    arrowRight.addEventListener('click', () => {
        menuIcons.scrollBy({ left: 120, behavior: 'smooth' });
    });

    arrowLeft.addEventListener('click', () => {
        menuIcons.scrollBy({ left: -120, behavior: 'smooth' });
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
const TextNode = "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos"
const TextNest = "NestJS é um framework Node.js de código aberto destinado ao desenvolvimento de aplicativos do lado do servidor. Foi criado por Kamil Mysliwiec e lançado em 2017. Sob o capô, por padrão, o NestJS faz uso do framework Express.js, sendo também compatível com o Fastify. Sua arquitetura é fortemente inspirada no Angular."
const TextSql = "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo."
const TextDocker = "Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração."

//Titulos FrontEnd
const TitleSass = "Sass"
const TitleVue = "Vue.Js"
const TitleTypescript = "TypeScript"
const TitleGithub = "Github"
const TitleHtml = "Html"
const TitleJs = "JavaScript"
const TitleCss = "CSS"

//Titulos BacktEnd
const TitleNode = "NodeJs"
const TitleNest = "NestJs"
const TitleSql = "MySql"
const TitleDocker = "Docker"

var originalOptions = `
<li><img class="button-menu" src="./assets/sass.svg"  onclick="changeText(TextSass, TitleSass)"></li>
<li><img class="button-menu" src="./assets/vue-logo.svg"  onclick="changeText(TextVue, TitleVue)"></li>
<li><img class="button-menu" src="./assets/typescript.svg" onclick="changeText(TextTypescript, TitleTypescript)"></li>
<li><img class="button-menu" src="./assets/github.svg" onclick="changeText(TextGithub, TitleGithub)"></li>
<li><img class="button-menu" src="./assets/html.svg"  onclick="changeText(TextHtml, TitleHtml)"></li>
<li><img class="button-menu" src="./assets/js.svg"  onclick="changeText(TextJs, TitleJs)"></li>
<li><img class="button-menu" src="./assets/css.svg" onclick="changeText(TextCss, TitleCss)"></li>

`;
var newOptions = `
    <li><img class="button-menu" src="./assets/node.svg" onclick="changeText(TextNode, TitleNode)"></li>
    <li><img class="button-menu" src="./assets/nest.svg"  onclick="changeText(TextNest, TitleNest)"></li>
    <li><img class="button-menu" src="./assets/sql.svg"  onclick="changeText(TextSql, TitleSql)"></li>
    <li><img class="button-menu" src="./assets/docker.svg" onclick="changeText(TextDocker, TitleDocker)"></li>
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
function changeText(texto, titulo) {
    document.getElementById("text-alvo").innerText = texto;
    document.getElementById("titulo").innerText = titulo;

}

showOriginalOptions();