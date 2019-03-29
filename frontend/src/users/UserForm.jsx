import React from 'react'
import * as PropTypes from 'prop-types';
export class UserForm extends React.Component{

    setUserName = (e) =>{
        e.preventDefault();
        let node = this.refs.user;
        this.props.setUserName(node.value);
        node.value = '';
    }
    render(){
        return (
            <form onSubmit={this.setUserName}>
                <div className="form-group">
                    <input className="form-control" placeholder="Set Your  Name" type="text" ref="user" />
                </div>
            </form>
        )
    }
}



UserForm.propTypes  = {
    setUserName: PropTypes.func.isRequired
}