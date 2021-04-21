'user strict';

const headerContent = document.querySelector(".header .hero .content");
const headerP = document.querySelector(".header .hero .content .ctas");
let headerMain = document.querySelector(".header .hero .content h1");

function setHeaderMain() {
    headerMain = document.querySelector(".header .hero .content h1");
}

function removeH1 () {
    headerMain.remove();
}

function insertNew (content) {
    headerContent.insertBefore(content, headerP);
}

const headings = [
    'I help you display your <span class="highlight">products</span>',
    'I help you control your <span class="highlight">data</span>'
];

let current = 0;

function run() {

    setHeaderMain();
    headerMain.classList.add('go');

    setTimeout(function(){

        removeH1();
        let h1 = document.createElement('h1');
        current = (current + 1) % headings.length;
        h1.innerHTML = `${headings[current]}`;
        insertNew(h1);

    }, 300)
}


setInterval(run, 3000)
