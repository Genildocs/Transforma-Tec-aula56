import React from 'react';

export default class Relogio extends React.Component {

    constructor(){
        super()
        this.state ={  //Estado inicial do Relogio.
            hora: new Date()
        } 
    }

    componentDidMount(){
        this.timer = setInterval(() => this.tickTack(), 1000)
    }

    tickTack(){
        this.setState({hora: new Date()})
    }

    render(){
        return(
            <div className="relogio">

            <h2>Tempo:</h2>
            <h4>
                Data: {this.state.hora.toLocaleDateString()}
            </h4>

            <h4>
                Hora: {this.state.hora.toLocaleTimeString()}
            </h4>

            </div>
            
        )
    }

}