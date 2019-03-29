import React from 'react'
import * as PropTypes from 'prop-types';
import {Message} from './Message'
export class MessageList extends React.Component{

    render(){
        const { messages } = this.props;
        return (
            <ul>
                {messages.map((c,i)=><Message  key={`message-${c.id}`} message={c} />)}
            </ul>
        )
    }
}



MessageList.propTypes  = {
    messages : PropTypes.array.isRequired
}