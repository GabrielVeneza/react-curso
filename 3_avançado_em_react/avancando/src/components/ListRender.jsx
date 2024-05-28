import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Mateus", "Pedrao", "Gabriel"]) 

    const [users] = useState([
        {id: 1, name:"Matheus", age: 21},
        {id: 2, name:"João", age: 28},
        {id: 3, name:"Tiago", age: 31},
    ])

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                // o i é o indice do item no arrey
                <li key={i}>{i} {item}</li>
            ))}
        </ul>
        <ul>
        {users.map((item, id) =>(
            <li key={id}>{item.name}</li>
        ))}
        </ul>
    </div>
  )
}

export default ListRender