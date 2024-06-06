
import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div>
      <h2>Forms</h2>
      <MyForm user={{ name:"Gabriel", email:"gabriel@gmail.com", bio:"Sou programador", role:"editor" }}/>
    </div>
  )
}

export default App
