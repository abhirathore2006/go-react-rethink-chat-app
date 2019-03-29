import React from 'react'
import * as PropTypes from 'prop-types';
export class MessageForm extends React.Component{

    addMessage = (e) =>{
        e.preventDefault();
        let node = this.refs.message;
        this.props.addMessage(node.value);
        node.value = '';
    }
    render(){
        return (
            <form onSubmit={this.addMessage}>
                <div className="form-group">
                   {this.props.activeChannel? <input className="form-control" placeholder="type message" type="text" ref="message" /> :''}
                </div>
            </form>
        )
    }
}



MessageForm.propTypes  = {
    activeChannel: PropTypes.object.isRequired,
    addMessage: PropTypes.func.isRequired
}