"user strict";

const headerContent = document.querySelector(".header .hero .content");
const headerP = document.querySelector(".header .hero .content .ctas");
let headerMain = document.querySelectorAll(
  ".header .hero .content .freelance-h1"
);

function setHeaderMain() {
  headerMain = document.querySelectorAll(
    ".header .hero .content .freelance-h1"
  );
}

function removeH1() {
  headerMain = document.querySelectorAll(
    ".header .hero .content .freelance-h1"
  );
  // headerMain.forEach((header) => headerContent.removeChild(header));
  headerMain.forEach((header) => header.remove());
}

function insertNew(content) {
  headerContent.insertBefore(content, headerP);
}

const headings = [
  'I help you achieve your <span class="highlight">online goals</span>',
  'I help you manage your <span class="highlight">business data</span>',
  // 'I help you showcase your <span class="highlight">products online</span>',
  'I help you automate your <span class="highlight">boring tasks</span>',
];

let current = 0;

function run() {
  setHeaderMain();
  headerMain.forEach((heading) => {
    heading.classList.add("go");
  });

  setTimeout(function () {
    removeH1();
    let h1 = document.createElement("h1");
    h1.classList.add("freelance-h1");
    current = (current + 1) % headings.length;
    h1.innerHTML = `${headings[current]}`;
    insertNew(h1);
  }, 300);
}

setInterval(run, 3000);
