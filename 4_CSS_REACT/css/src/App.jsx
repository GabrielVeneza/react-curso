import './App.css'
import { useState } from 'react'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {

  const n = 51
  const [name] = useState("Mateus")

  // Classe dinâmica
  const redTitle = true

  return (
    <div>
      {/* css global */}
      <h1>React com CSS!</h1>
      {/* css de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      {/* Inline css */}
      <p style={{color: "white", padding: "25px", borderTop: "2px solid cyan"}}>
        Este elemento foi estilizado de forma inline
      </p>

      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinânico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinânico 2</h2>
      <h2 style={name === "Mateus" ? ({color: "green", backgroundColor:"#000"}) : null}>CSS Dinâmico</h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este Título tem Classe Dinâmica
      </h2>
      <Title />
    </div>
  )
}

export default App