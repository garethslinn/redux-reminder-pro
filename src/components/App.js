import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser} from "../actions";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: ''
        }
    }

    addUser() {
        this.props.addUser(this.state.firstName, this.state.secondName);
    }

    render() {
        return(
            <div className="App">
                <div className="title">
                    Add Users
                </div>
                <div className="form-inline user-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="First Name."
                            onChange={event => this.setState( {firstName: event.target.value} ) }
                            />

                        <input
                            className="form-control"
                            placeholder="Second Name"
                            onChange={event => this.setState( {secondName: event.target.value} ) }
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={ () => this.addUser() }>
                        Add Reminder
                    </button>


                </div>


            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state ', state);
    return {
        users: state
    }
}

export default connect(mapStateToProps, { addUser })(App);