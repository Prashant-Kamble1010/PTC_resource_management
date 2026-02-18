import React, { Component } from 'react' //
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { employees: [] }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    viewEmployee(id){ this.props.history.push(`/view-employee/${id}`); }
    editEmployee(id){ this.props.history.push(`/add-employee/${id}`); }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){ this.props.history.push('/add-employee/_add'); }

    render() {
        return (
            <div className="container">
                 <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-secondary fw-light">Engineering Resources</h2>
                    <button className="btn btn-primary rounded-pill px-4 shadow-sm" onClick={this.addEmployee}>
                        <i className="bi bi-plus-lg me-1"></i> Add Resource
                    </button>
                 </div>
                 
                 <div className="card border-0 shadow-sm rounded-3">
                    <div className="card-body p-0">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4">First Name</th>
                                    <th>Last Name</th>
                                    <th>Email ID</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employees.map(employee => 
                                    <tr key={employee.id}>
                                        <td className="ps-4 fw-bold">{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td><span className="badge bg-info text-dark font-monospace">{employee.emailId}</span></td>
                                        <td className="text-center">
                                            <button onClick={() => this.editEmployee(employee.id)} className="btn btn-sm btn-outline-primary me-2">Update</button>
                                            <button onClick={() => this.deleteEmployee(employee.id)} className="btn btn-sm btn-outline-danger me-2">Delete</button>
                                            <button onClick={() => this.viewEmployee(employee.id)} className="btn btn-sm btn-outline-secondary">View</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                 </div>
            </div>
        )
    }
}

export default ListEmployeeComponent