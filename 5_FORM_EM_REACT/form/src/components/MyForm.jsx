import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {

    // 3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    // console.log(name)
    // console.log(email)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("envio do formulário")
        console.log(name)
        console.log(email)
    }

  return (
    <div>
        {/* 5 - Envio de form */}
        
        {/* 1 - Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="name" name='name' placeholder='Digite seu nome...' onChange={handleName} />
            </div>

            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/* 4 - simplificação de manipulação de state */}
                <input type="email" name="email" placeholder='Digite o seu e-mail...' onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <input type="submit" value="enviar"/>
        </form>
    </div>
  )
}

export default MyForm