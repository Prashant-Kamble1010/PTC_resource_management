import React, { Component } from 'react' //
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return;
        }else{
            EmployeeService.getEmployeeById(this.state.id).then((res) =>{
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId : employee.emailId
                });
            });
        }        
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }
    
    changeFirstNameHandler= (event) => { this.setState({firstName: event.target.value}); }
    changeLastNameHandler= (event) => { this.setState({lastName: event.target.value}); }
    changeEmailHandler= (event) => { this.setState({emailId: event.target.value}); }

    cancel(){ this.props.history.push('/employees'); }

    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="card col-md-6 shadow-lg border-0 p-0">
                        <div className="card-header bg-primary text-white text-center py-3">
                            <h3 className="m-0">{this.state.id === '_add' ? 'Add Resource' : 'Update Resource'}</h3>
                        </div>
                        <div className="card-body p-4">
                            <form>
                                <div className="form-floating mb-3">
                                    <input placeholder="First Name" className="form-control" 
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    <label>First Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input placeholder="Last Name" className="form-control" 
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    <label>Last Name</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input placeholder="Email Address" className="form-control" 
                                        value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    <label>Email ID</label>
                                </div>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-success flex-grow-1" onClick={this.saveOrUpdateEmployee}>Save Changes</button>
                                    <button className="btn btn-light border flex-grow-1" onClick={this.cancel.bind(this)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent