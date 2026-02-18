import React, { Component } from 'react' //
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="card col-md-6 offset-md-3 border-0 shadow-lg p-0 overflow-hidden rounded-4">
                    <div className="bg-secondary text-white py-3 text-center">
                        <h4 className="m-0">Resource Profile</h4>
                    </div>
                    <div className="card-body p-4 text-center">
                        <div className="mb-4">
                            <small className="text-muted d-block text-uppercase">Full Name</small>
                            <h2 className="text-primary">{this.state.employee.firstName} {this.state.employee.lastName}</h2>
                        </div>
                        <div className="mb-4">
                            <small className="text-muted d-block text-uppercase">Corporate Email</small>
                            <span className="h5 font-weight-light">{this.state.employee.emailId}</span>
                        </div>
                        <button className="btn btn-outline-secondary px-4 mt-2" onClick={() => this.props.history.push('/employees')}>Back to Dashboard</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent