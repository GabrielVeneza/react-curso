import { useState } from "react"

const ManageData = () => {
    let someData = 10

    const imprimir = () =>{
        console.log(someData)
    }

    const [number, setNumber] = useState(someData)
    console.log(number)


  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={imprimir}>Mudar</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(number + 1)}>Mudar Valor</button>
        </div>

    </div>
  )
}

export default ManageData