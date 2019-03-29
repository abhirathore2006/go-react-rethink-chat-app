import React from 'react'
import * as PropTypes from 'prop-types';
import {Channel} from './Channel'
export class ChannelList extends React.Component{

    render(){
        const { channels , setChannel, activeChannel} = this.props;
        return (
            <ul>
                {channels.map((c,i)=><Channel  key={`channel-${c.id}`} activeChannel={activeChannel} channel={c} setChannel={setChannel} />)}
            </ul>
        )
    }
}



ChannelList.propTypes  = {
    channels : PropTypes.array.isRequired,
    activeChannel:PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired
}