import './App.css'

import City from './assets/city.jpg'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'

function App() {

  return (
    <>
     <h1>Avançado em React</h1>

    {/* Imagem em public */}
    <div>
      <h3>Imagem em Public</h3>
      <img src="/img1.jpg" alt="programação" width={"30%"}/>
    </div>

    {/* Imagem em assets */}
    <div>
      <h3>Imagem em Assets</h3>
      <img src={City} alt="Cidade" width={"30%"} />
    </div>
    <ManageData />
    <ListRender />
    </>
  )
}

export default App
