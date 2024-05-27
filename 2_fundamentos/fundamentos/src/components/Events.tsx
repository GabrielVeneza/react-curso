const Events = () => {

    const handleMyEvent = (e) => {

        console.log(e)
        console.log("Ativo")
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
        </div>
    )
}

export default Events