import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import NavBarMenu from './NavBarMenu';


export class PatientDetails extends Component {

    constructor() {
        super();
        this.state = {
            list: null,
            patientlist: null,
            id:null
        }
    }

    componentDidMount(){
        var data= localStorage.getItem('login');
        console.warn(data[7]);
        this.state.id=data[7];
        this.getData()
        console.warn(this.state.id);
    }
    getData() {
        fetch("http://localhost:8080/api/patients/"+this.state.id).then((response) => {
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
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Contact No </th>
                                        <th>Age </th>
                                        <th>Blood Group </th>
                                        <th>Recovery Days </th>
                                        <th>City </th>
                                        <th>Email Id</th>
                                        <th>Operation </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.list.map((item) =>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.firstname}</td>
                                            <td>{item.lastname}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.age}</td>
                                            <td>{item.bloodgroup}</td>
                                            <td>{item.days}</td>
                                            <td>{item.city}</td>
                                            <td>{item.email}</td>
                                            <td><Link to={"/PatientDataUpdate/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange" label="Update" /></Link>
                                            <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
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

export default PatientDetails
