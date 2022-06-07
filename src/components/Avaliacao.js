import React from 'react';

export default class Avaliacao extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tema: "",
            questoes:0,
            tempoTotal:0,
            peso:0,
        }
    }

    atualizar(){
        this.setState(
            this.setState({
                tema: this.props.tema,
                questoes: this.props.questoes,
                tempoTotal: this.props.tempoTotal,
                peso: this.props.peso
            })
        )
    }

    render() {
        return (
            <>
                <h2>Class Avaliacao:</h2>
                <h5>Tema: {this.state.tema}</h5>
                <h5>Numero de questões: {this.state.questoes}</h5>
                <h5>Tempo total: {this.state.tempoTotal}</h5>
                <h5>Peso média final: {this.state.peso}</h5>

                <button onClick=
                {()=> this.atualizar()}>Atualizar
                </button>
            </>
        )
    }

}