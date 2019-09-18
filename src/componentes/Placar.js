import React from 'react'
import Time from './Time'
import Partida from './Partida'
import BotaoGol from './BotaoGol'

class Placar extends React.Component{
    constructor(){
        super();
        this.state = {
            gols_cas: 0,
            gols_vis: 0
        }
    }

    marcarGolCasa(){
        this.setState({
            gols_cas:this.state.gols_cas+1
        })
    }

    marcarGolVisitante(){
        this.setState({
            gols_vis:this.state.gols_vis+1
        })
    }

    render(){
        const {partida, casa, visitante} = this.props

        const estilo = {float:"left", "marginRight":"20px", border: "2px solid #004ea8", margin: "5px", width:"200px",height:"205px" }

        return(
            <div>
                <h1>Placar de Futebol</h1>
                <div style={estilo}>
                    <h3>Casa</h3>
                    <Time 
                        nome={casa.nome} 
                        gols={this.state.gols_cas} 
                        marcarGol={this.marcarGolCasa.bind(this)}/>
                </div>
                <div style={estilo}>
                    <Partida 
                        estadio={partida.estadio} 
                        data={partida.data} 
                        horario={partida.horario}/>
                </div>
                <div style={estilo}>
                    <h3>Visitante</h3>
                    <Time 
                        nome={visitante.nome} 
                        gols={this.state.gols_vis} 
                        marcarGol={this.marcarGolVisitante.bind(this)}/>
                </div>
                <div style={{clear:"both"}}></div>
            </div>
        )
    }
}


export default Placar;