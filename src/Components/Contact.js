import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Contact extends Component {
    state= {
        showContactInfo:false
    };

    onDelete = () => {
        // this.props.deleteClickHandler();
        console.log(123)
    }
    
    render() {
    const {name , email, phone} = this.props;
    const {showContactInfo} = this.state;
    return (
        <div className="card card-class-body text-left mb-3 p-2 pt-3">
            <h4 className="">{name}{' '} <i onClick={() => this.setState({showContactInfo:!this.state.showContactInfo})} className="fas fa-sort-down" style={{cursor:'pointer'}}></i>
            <i className="fas fa-times" onDelete style={{cursor:'pointer',float:'right',color:'red'}}></i>
                
            </h4>
            {showContactInfo ? (<ul className="list-group">
                <li className="list-group-item">
                    Email: {email}
                </li>
                <li className="list-group-item">
                    Phone: {phone}
                </li>
            </ul>) : null}
        </div>
    )
  }
}

// eslint-disable-next-line react/no-typos
Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;
