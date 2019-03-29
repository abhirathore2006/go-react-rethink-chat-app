import React from 'react'
import * as PropTypes from 'prop-types';

export class Channel extends React.Component{
    onClick = (e) => {
        e.preventDefault();
        const {channel, setChannel} = this.props;
        setChannel(channel)
    }
    render(){
        const { channel, activeChannel } = this.props;
        return (
            <li className={activeChannel==channel?'active':''}>
                <a href="#" onClick={this.onClick}>{channel.name}</a>
            </li>
        )
    }
}



Channel.propTypes  = {
    channel : PropTypes.object.isRequired,
    activeChannel:PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired
}