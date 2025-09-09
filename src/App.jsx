import "./App.css"

function App() {
  const enviar = document.querySelector("#env")

  enviar.addEventListener("click", function () {
    const resp = document.querySelector("#resp").value.toLowerCase().trim() 
    const saida = document.querySelector("#saida")
    
    saida.innerHTML = `
        <h1>${resp}</h1>
    `
  })
  return (
    <>
      <div>
        <h1>Gosta de <span class="destaque">React?</span></h1>
      </div>

      <div class="forms">
        <input id="resp" type="text" placeholder="Sua resposta..." />
        <button id="env" type="button">Enviar</button>
      </div>

      <div id="saida"></div>
    </>
  )
}

export default App