import {useState } from 'react'
import './App.css'

import City from './assets/city.jpg'
import ConditionalRnder from './components/ConditionalRnder'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import FragmentComponent from './components/Fragment'
import ContainerChil from './components/ContainerChil'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {

  // const name = "Tiago"
  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: false, km: 1222},
    {id: 2, brand: "Forn", color: "Azul", newCar: true, km: 2562},
    {id: 3, brand: "Honda", color: "Amarelo", newCar: false, km: 1478},
    {id: 4, brand: "Ford", color: "Amarelo", newCar: true, km: 1454}
  ]


  function showMessage(){
    // console.log("Função do componente Pai")
    alert("Função do componente Pai")
  }

  const [message,setMessage] = useState("")

  const handleMessage = (msg) =>{
    setMessage(msg)
  }

  return (
    <div>
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
      <ConditionalRnder />
      {/* Props */}
      <ShowUserName name = {userName} />

      {/* Destructuring */}
      {/* <CarDetails brand="BMW" km={2566} color="Preto" newCar={false} /> */}

      {/* Reaproveitando */}
      {/* <CarDetails brand="Ford" km={62222} color="Vermenho" newCar={true} /> */}
      {/* <CarDetails brand="Fiat" km={222} color="Branco" newCar={false} /> */}

      {/* Loop em array de objetos */}
      {cars.map((car) =>(
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}

      {/* Fragment */}
      <FragmentComponent propFragment={"teste"}/>
      
      <ContainerChil myValue="teste">
        <p>E este é o conteúdo</p>
      </ContainerChil>
      <ContainerChil myValue="teste 2">
        <p>E este é o segundo container</p>
      </ContainerChil>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* State Lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>

    </div>
  )
}

export default App
