import React ,{ Component } from 'react';
import './Image.css';
class Image extends Component{
    render(){
        return(
            <div>
                <img src={this.props.info.furl} alt=""></img>
            </div>
        );
    }
}
export default Image;

