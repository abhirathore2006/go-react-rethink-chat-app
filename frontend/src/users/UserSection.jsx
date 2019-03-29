import React from 'react'
import * as PropTypes from 'prop-types';
import {UserList} from './UserList'
import {UserForm} from './UserForm'
export class UserSection extends React.Component{

    render(){
        const { users , setUserName} = this.props;
        return (
            <div  className='support card'>
                <div className='card-header bg-info text-white'>
                    <strong className="card-title">Users</strong>
                </div>
                <div className='card-body users'>
                <UserList  users={users}/>
                <UserForm  setUserName={setUserName} />
                </div>
            </div>
        )
    }
}



UserSection.propTypes  = {
    users : PropTypes.array.isRequired,
    setUserName: PropTypes.func.isRequired,

}