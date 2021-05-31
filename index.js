const linguagem = document.querySelector('[data-linguagem]')
const visualizar = document.querySelector('[data-visualizar]')
const corDoEditor = document.querySelector('[data-cor]')
const backDoEditor = document.querySelector('[data-back]')

corDoEditor.addEventListener('change', () => {
    backDoEditor.style.backgroundColor = corDoEditor.value
})