const linguagem = document.querySelector('[data-linguagem]')
const visualizar = document.querySelector('[data-visualizar]')
const areaDoCodigo = document.querySelector('[data-editor]')
const corDoEditor = document.querySelector('[data-cor]')
const backDoEditor = document.querySelector('[data-back]')

corDoEditor.addEventListener('change', () => {
    backDoEditor.style.backgroundColor = corDoEditor.value
})

function mudaLinguagem() {
    const codigo = areaDoCodigo.querySelector('code')
    areaDoCodigo.innerHTML = `<div class="editor_circulos">
    <div class="circulo_vermelho"></div> <div class="circulo_amarelo"></div> <div class="circulo_verde
    "></div>
</div>

<code class="text_codigo hljs ${linguagem}" contenteditable="true" data-codigo></code>
</div>`
    document.querySelector('[data-codigo]').innerText = codigo.innerText
}

visualizar.addEventListener('click', () => {
    mudaLinguagem()
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})