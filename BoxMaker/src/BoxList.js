import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
class BoxList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boxmaker: []
        }
        this.addElement=this.addElement.bind(this);
        this.removeElement=this.removeElement.bind(this);
    }
    addElement(item){
        this.setState({boxmaker:[...this.state.boxmaker, item]});
    }
    removeElement(item){
        console.log(item);
        let newx=this.state.boxmaker.filter(x=>x!==item);
        console.log(newx);
        this.setState({boxmaker:newx});
    }


    render() {
        let alpha=this.state.boxmaker.map(x=>
            <Box key={uuid()} req={x} remove={this.removeElement} />
        )
        return (
            <div>
                <h1>Box Maker Thingy</h1>
                <NewBoxForm addfun={this.addElement} />
                {alpha}
            </div>
        );
    }

}

export default BoxList;