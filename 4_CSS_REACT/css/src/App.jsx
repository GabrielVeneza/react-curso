import './App.css'
import MyComponent from './components/MyComponent'

function App() {
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
    </div>
  )
}

export default App
