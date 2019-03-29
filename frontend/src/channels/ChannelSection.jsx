import React from 'react'
import * as PropTypes from 'prop-types';
import {ChannelList} from './ChannelList'
import {ChannelForm} from './ChannelForm'
export class ChannelSection extends React.Component{

    render(){
        const { channels , activeChannel,  setChannel, addChannel} = this.props;
        return (
            <div  className='support card'>
                <div className='card-header bg-info text-white'>
                    <strong className="card-title">Channels</strong>
                </div>
                <div className='card-body channels'>
                <ChannelList activeChannel={activeChannel} channels={channels} setChannel={setChannel}/>
                <ChannelForm  addChannel={addChannel} />
                </div>
            </div>
        )
    }
}



ChannelSection.propTypes  = {
    channels : PropTypes.array.isRequired,
    activeChannel : PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired,
    addChannel: PropTypes.func.isRequired,

}