const Events = () => {

    const handleMyEvent = (e: any) => {

        console.log(e)
        console.log("Ativo")
    }

    const renderSomething = (x: any) => {
        
        if(x){
            return <h3>Renderizando Isso!</h3>
            } else {
                return <h3>tbm poso renderizar isso!</h3>
            }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('clicou!')}>Clique Aqui, também</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true){
                        console.log('isso n pode existir')
                    }
                }}>Clique Aqui, por favor!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events