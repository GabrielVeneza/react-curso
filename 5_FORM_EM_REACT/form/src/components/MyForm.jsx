import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 6 - Controlled inputs
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio,setBio] = useState(user ? user.bio : '')

    const [role, setRole] = useState(user ? user.role : '')

    // 3 - gerenciamento de dados
    // const [name, setName] = useState()
    // const [email, setEmail] = useState()
    
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
        console.log(bio)
        console.log(role)
        

        // 7 - limpar formulário
        setName('')
        setEmail('')
        setBio('')
    }

  return (
    <div>
        {/* 5 - Envio de form */}
        
        
        {/* 1 - Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="name" name='name' placeholder='Digite seu nome...' onChange={handleName} value={name}/>
            </div>

            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/* 4 - simplificação de manipulação de state */}
                <input type="email" name="email" placeholder='Digite o seu e-mail...' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>


            {/* 8 - textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>

            {/* 9 - select */}
            <label>
                <span>Função no sistema:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>

            <input type="submit" value="enviar"/>
        </form>
    </div>
  )
}

export default MyForm