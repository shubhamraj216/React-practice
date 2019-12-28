import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height:"",
            width:"",
            backgroundcolor:""
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let boxprops={
            height:this.state.height,
            width:this.state.width,
            backgroundcolor:this.state.backgroundcolor,
            
        };
        this.props.addfun(boxprops);
        this.setState({height:"", width:"", backgroundcolor:""});
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor='height'>Height:</label>
                    <input
                     id='height'
                     name='height'
                     type ='text'
                     value={this.state.height}
                     onChange= {this.handleChange}
                    />
                    <br />
                    <label htmlFor='width'>Width:</label>
                    <input
                     id='width'
                     name='width'
                     type ='text'
                     value={this.state.width}
                     onChange= {this.handleChange}
                    />
                    <br />
                    <label htmlFor='backgroundcolor'>BackGroundColor:</label>
                    <input
                     id='backgroundcolor'
                     name='backgroundcolor'
                     type ='text'
                     value={this.state.backgroundcolor}
                     onChange= {this.handleChange}
                    />
                    <br />
                    <button>Add a new Box!</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;