const container = document.querySelector(".container");

const elementos = [
    {tag: 'p', texto: 'Aqui temos um parágrafo'},
    {tag: 'div', texto: 'Aqui tem uma div'},
    {tag: 'footer', texto: 'Aqui um footer (Sim, no meio da section)'},
    {tag: 'section', texto: 'Aqui uma nova section, por algum motivo'},
];

for (let i = 0; i < elementos.length; i++){
    let elemento = document.createElement(elementos[i].tag);
    let texto = document.createTextNode(elementos[i].texto);
    elemento.appendChild(texto);
    container.appendChild(elemento);
}