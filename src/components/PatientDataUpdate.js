import React, { Component } from 'react'
import './Stylesheet.css';
import NavBarMenu from './NavBarMenu';

class PatientDataUpdate extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            phone: null,
            age: null,
            bloodgroup:null,
            days: null,
            city:null,
            id:null,
            list:null
        }

    }

    componentDidMount(){
        console.warn(this.props.match.params.id);
        fetch('http://localhost:8080/api/patients/'+this.props.match.params.id)
        .then((response) => {
            response.json().then((result) => {
                console.warn(result[0]);
                 this.setState({ 
               id:result[0].id,
                firstname:result[0].firstname,
                   lastname:result[0].lastname,
                   phone:result[0].phone,
                   age:result[0].age,
                   bloodgroup:result[0].bloodgroup,
                   days:result[0].days,
                   city:result[0].city
        })
                 
            })
        })
       
       
       
    }
    
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let data = this.state;
        console.warn(data);
        this.setState({ data, [name]: value }, () => console.log(this.state));
    }
    update= e=>{
        let info = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone: this.state.phone,
            age: this.state.age,
            bloodgroup: this.state.bloodgroup,
            days: this.state.days,
            city: this.state.city
          };
          console.warn(info);
        fetch('http://localhost:8080/api/patients/'+this.state.id,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(info)
        }).
        then(r => r.json()).then(res => {
          if (res) {
            alert("Thank you data updated ");
          }
        })

    }

    render() {
       
        return (
            <div> <NavBarMenu/>
            <div className="wrapper2">
                <div className="form-wrapper">   
                    <h1>Patient Data Upadte</h1>
                    <form onSubmit={this.update}>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={this.state.firstname}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={this.state.lastname}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Phone No</label>
                            <input
                                placeholder="phone"
                                type="text"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="age">
                            <label htmlFor="age">Age</label>
                            <input
                                type="text"
                                placeholder="Age"
                                name="age"
                                value={this.state.age}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="weight">
                            <label htmlFor="weight">Blood Group</label>
                            <input
                                type="text"
                                placeholder="bloodgroup"
                                name="bloodgroup"
                                value={this.state.bloodgroup}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="days">
                            <label htmlFor="days">Recovery Days</label>
                            <input
                                type="text"
                                placeholder="Days"
                                name="days"
                                value={this.state.days}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="city">
                            <label htmlFor="city">City</label>
                            <input
                                placeholder="City"
                                type="text"
                                name="city"
                                value={this.state.city}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="createAccount">
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default PatientDataUpdate
