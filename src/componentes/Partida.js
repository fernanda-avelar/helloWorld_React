import React from 'react';

class Partida extends React.Component{
    render(){
        return(
            <div>
                <h2>Estadio</h2>
                <div>
                    <span>{this.props.estadio}</span><br></br>
                    <span>{this.props.data}</span><br></br>
                    <span>{this.props.horario}</span><br></br>
                </div>
                
            </div>
        )
    }

}

export default Partida;