import React from 'react'
import * as PropTypes from 'prop-types';
import {User} from './User'
export class UserList extends React.Component{

    render(){
        const { users } = this.props;
        return (
            <ul>
                {users.map((c,i)=><User  key={`user-${c.id}`} user={c} />)}
            </ul>
        )
    }
}



UserList.propTypes  = {
    users : PropTypes.array.isRequired,
}