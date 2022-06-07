import { useState } from "react";

function Cor(props){

    const [cor, setCor] = useState("Rosa") // useState seta um valor para uma variavel e renderiza esse valor atualizado.

    

    return (
        <div>
            <h3>
                Minha cor favorita é: {cor}.
            </h3>

            <button onClick={
                ()=> setCor(props.cor) // useState seta um valor para uma variavel e renderiza esse valor atualizado.
            }>
                Alterar Cor
            </button>
        </div>

    )
}

export default Cor;