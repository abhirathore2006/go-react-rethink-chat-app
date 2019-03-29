import React from 'react'
import * as PropTypes from 'prop-types';
import fecha from 'fecha'
export class Message extends React.Component{

    render(){
        const { body,author, createdAt } = this.props.message;
        let created  = fecha.format(createdAt, 'HH:mm:ss MM/DD/YY')
        return (
            <li className='message'>
                <div className="author">
                    <strong>{author}</strong>
                    <i className="timestamp">{created}</i>
                </div>
                <div className="body">{body}</div>
            </li>
        )
    }
}



Message.propTypes  = {
    message : PropTypes.object.isRequired
}