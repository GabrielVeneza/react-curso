import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Mateus", "Pedrao", "Gabriel"]) 

    const [users, setUsers] = useState([
        {id: 1, name:"Matheus", age: 21},
        {id: 2, name:"João", age: 28},
        {id: 3, name:"Tiago", age: 31},
    ])

    const deleteRendom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                // o i é o indice do item no arrey
                <li key={i}>{i} {item}</li>
            ))}
        </ul>
        <ul>
        {users.map((user) =>(
            // o Id de users é a key do item
            <li key={user.id}>Nome: {user.name} | Idade: {user.age} </li>
        ))}
        </ul>
        <button onClick={deleteRendom}>Delete random user</button>
    </div>
  )
}

export default ListRender