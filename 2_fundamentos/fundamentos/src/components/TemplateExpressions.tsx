const TemplateExpressions = () => {
  
    const name = "Gabriel"
    const data = {
        age: 22,
        job: 'Programador'
    }

    return (
        <div>
            <h3> Olá {name}, você tem {data.age} anos e é {data.job}</h3>
        </div>
    )
}

export default TemplateExpressions