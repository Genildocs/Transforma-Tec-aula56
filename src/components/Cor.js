import { useState } from "react";

function Cor(props){

    const [cor, setCor] = useState("Rosa") // useState seta um valor para uma variavel e renderiza esse valor atualizado.

    

    return (
        <>
            <h3 className="cor">
                Minha cor favorita é: {cor}.
            </h3>

            <button className="botao" onClick={
                ()=> setCor(props.cor) // useState seta um valor para uma variavel e renderiza esse valor atualizado.
            }>
                Alterar Cor
            </button>
        </>

    )
}

export default Cor;