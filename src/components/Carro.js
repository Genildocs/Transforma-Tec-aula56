import React from "react";

export default class Carro extends React.Component {

    constructor(props) {
        super(props);
        this.modelo = "Palio"
        this.state = {
            ligado: false,
            explodiu: false,
            velocidade: 0
        }
            
        
    }
    ligaDesliga(){
        this.setState({ligado: !this.state.ligado})
    }

    acelerar(){
        let velo = this.state.velocidade + 15
        this.setState({velocidade: velo})
    }

    render() {
        return (
        <>
            <h2>Class Carro:</h2>
            
            <h5>
                Carro Bomba: {this.modelo}
            </h5>
            <h5>
                Ligado: {this.state.ligado ? "Sim" : "Não"}
            </h5>
            <h5>
                Explodiu: {this.state.explodiu ? "Sim" : "Não"}
            </h5>
            <h5>
                Velocidade: {this.state.velocidade} Km/h
            </h5>
            
            <button onClick=
            {() => this.ligaDesliga()}>
                Girar chave
            </button>

            <button onClick=
            {() => this.acelerar()}>
                Acelerar
            </button>
        </>  
        )
        
    }


}

