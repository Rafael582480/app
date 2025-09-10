import { useState } from "react"
import "./App.css"
import Contador from "./Contador"

function App() {
  const [resp, setResp] = useState("")
  const [saida, setSaida] = useState("")
  const enviar = function() {
    setSaida(resp.toLowerCase().trim())
  }

  return (
    <>
      <div>
        <h1>Gosta de <span class="destaque">React?</span></h1>
      </div>

      <div class="forms">
        <input id="resp" type="text" placeholder="Sua resposta..." value={resp} onChange={(e) => setResp(e.target.value)}/>
        <button id="env" type="button" onClick={enviar}>Enviar</button>
      </div>

      <div id="saida">
        {saida && <h1>{saida}</h1>}
      </div>

      <Contador/>
    </>
  )
}

export default App