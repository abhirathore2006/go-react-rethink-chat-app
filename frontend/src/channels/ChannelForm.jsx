import React from 'react'
import * as PropTypes from 'prop-types';
export class ChannelForm extends React.Component{

    addChannel = (e) =>{
        e.preventDefault();
        let node = this.refs.channel;
        this.props.addChannel(node.value);
        node.value = '';
    }
    render(){
        return (
            <form onSubmit={this.addChannel}>
                <div className="form-group">
                    <input className="form-control" placeholder="Add channel" type="text" ref="channel" />
                </div>
            </form>
        )
    }
}



ChannelForm.propTypes  = {
    addChannel: PropTypes.func.isRequired
}