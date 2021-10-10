import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu';

class PatientList extends Component {

    constructor() {
        super();
        this.state = {
            list: null,
            patientlist: null
        }
    }

    componentDidMount(){
        this.getData()
    }
    getData() {
        fetch("http://localhost:8080/api/patients").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })

            })
        })
    }

    delete(id)
    {
        fetch('http://localhost:8080/api/patients/delete/'+id,
        {
            method: "DELETE",
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Patient has heen Delete")
                this.getData()
            })
        })
    }

    render() {
        return (
            <div>
                <NavBarMenu/>
                <h1>Patients Recovered from COVID-19</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Contact No </th>
                                        <th>Age </th>
                                        <th>Blood Group </th>
                                        <th>Recovery Days </th>
                                        <th>City </th>
                                        <th>Email Id</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.list.map((item) =>
                                        <tr key={item.id}>
                                            <td>{item.firstname}</td>
                                            <td>{item.lastname}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.age}</td>
                                            <td>{item.bloodgroup}</td>
                                            <td>{item.days}</td>
                                            <td>{item.city}</td>
                                            <td>{item.email}</td>
                                        </tr>
                                    )}
                                </tbody>                                
                            </Table>
                        </div>
                        : <p>Please wait..</p>

                }
            </div>
        )
    }
}

export default PatientList
