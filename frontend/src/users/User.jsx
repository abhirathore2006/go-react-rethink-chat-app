import React from 'react'
import * as PropTypes from 'prop-types';

export class User extends React.Component{

    render(){
        const { user } = this.props;
        return (
            <li>
                {user.name}
            </li>
        )
    }
}



User.propTypes  = {
    user : PropTypes.object.isRequired
}