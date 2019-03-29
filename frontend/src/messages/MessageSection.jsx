import React from 'react'
import * as PropTypes from 'prop-types';
import {MessageList} from './MessageList'
import {MessageForm} from './MessageForm'
export class MessageSection extends React.Component{

    render(){
        const { messages , activeChannel, addMessage} = this.props;
        return (
            <div  className='messages-container card'>
                <div className='card-header bg-white text-info'>
                    <strong className="card-title">{activeChannel ? activeChannel.name:''}</strong>
                </div>
                <div className='card-body messages'>
                <MessageList messages={messages}/>
                <MessageForm activeChannel={activeChannel} addMessage={addMessage} />
                </div>
            </div>
        )
    }
}



MessageSection.propTypes  = {
    messages : PropTypes.array.isRequired,
    activeChannel : PropTypes.object.isRequired,
    addMessage: PropTypes.func.isRequired,

}