import { useState } from "react"

const ConditionalRnder = () => {

    const [x] = useState(false)

    const [name, setName] = useState("João")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se X for true, sim!</p>}
        {!x && <p>Agora o X é falso!</p>}
        <h1>If ternário</h1>
        {name === "João" ? (
            <div>
                <p>O nome é João!</p>
            </div>
        ) : (
            <div>
                <p>O nome não é João!</p>
            </div>
        )} 
        <button onClick={() => setName("Matheus")}>Clique Aqui</button>
    </div>
  )
}

export default ConditionalRnder