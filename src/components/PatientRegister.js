import React, { Component } from 'react';
import './Stylesheet.css';
import NavBarMenu from './NavBarMenu';
//import { BrowserRouter as Redirect} from 'react-router-dom';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(element => {
    element.length > 0 && (valid = false);
  });
  return valid;
};



class PatientRegister extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      age: "",
      bloodgroup: "",
      days: "",
      city: "",
      email: "",
      password: "",
      formErrors: {
        firstName: "",
        lastName: "",
        phone: "",
        age: "",
        bloodgroup: "",
        days: "",
        city: "",
        email:"",
        password:""
      }
    }
    this.inputRef= React.createRef()

  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case 'lastName':
        formErrors.lastName = value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case 'phone':
        formErrors.phone = value.length < 10 ? "minimum 10 digits required" : "";
        break;
      case 'age':
        formErrors.age = value.length < 1 ? "minimum 2 digit required" : "";
        break;
      case 'bloodgroup':
        formErrors.bloodgroup = value.length < 1 ? "minimum 1 character required" : "";
        break;
      case 'days':
        formErrors.days = value.length < 1 ? "minimum 1 digit required" : "";
        break;
      case 'city':
        formErrors.city = value.length < 2 ? "minimum 2 characters required" : "";
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? "" : "Invalid Email";
        break;
      case 'password':
        formErrors.password = value.length <6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  handleSubmit = submit => {
    // submit.preventDefault();
    if (formValid(this.state.formErrors)) {
      console.log(`
          --SUBMITTING---
          First Name: ${this.state.firstName}
          Last Name: ${this.state.lastName}
          ${JSON.stringify(this.state)}     
      `);
      let info = {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        phone: this.state.phone,
        age: this.state.age,
        bloodgroup: this.state.bloodgroup,
        days: this.state.days,
        city: this.state.city,
        email: this.state.email,
        password: this.state.password
      };
      fetch('http://localhost:8080/api/patients/add',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(info)
        }).
        then(r => r.json()).then(res => {
            alert("Thank you Registered Successfully ");
            console.warn("Suceess!!");
        })

    }
    else {
      console.error("Form Invalid");
    }
  };

  componentDidMount(){
    this.inputRef.current.focus()
  }


  render() {
    const { formErrors } = this.state;
    return (
      <div><NavBarMenu/>
      <div className="wrapper2">
        <div className="form-wrapper">
          <h1>Patient Registration</h1>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                name="firstName"
                ref={this.inputRef}
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                name="lastName"

                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Phone No:</label>
              <input
                className={formErrors.phone.length > 0 ? "error" : null}
                placeholder="phone"
                type="text"
                name="phone"
                onChange={this.handleChange}
              />
              {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
              )}
            </div>
            <div className="age">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                className={formErrors.age.length > 0 ? "error" : null}
                placeholder="Age"
                name="age"

                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.age}</span>
              )}
            </div>
            <div className="weight">
              <label htmlFor="bloodgroup">Blood Group</label>
              <input
                type="text"
                className={formErrors.bloodgroup.length > 0 ? "error" : null}
                placeholder="bloodgroup"
                name="bloodgroup"

                onChange={this.handleChange}
              />
              {formErrors.bloodgroup.length > 0 && (
                <span className="errorMessage">{formErrors.bloodgroup}</span>
              )}
            </div>
            <div className="days">
              <label htmlFor="days">Recovery Days</label>
              <input
                type="text"
                className={formErrors.days.length > 0 ? "error" : null}
                placeholder="Days"
                name="days"

                onChange={this.handleChange}
              />
              {formErrors.days.length > 0 && (
                <span className="errorMessage">{formErrors.days}</span>
              )}
            </div>
            <div className="city">
              <label htmlFor="city">City</label>
              <input
                className={formErrors.city.length > 0 ? "error" : null}
                placeholder="City"
                type="text"
                name="city"

                onChange={this.handleChange}
              />
              {formErrors.city.length > 0 && (
                <span className="errorMessage">{formErrors.city}</span>
              )}
            </div>
            <div className="email1">
              <label htmlFor="email1">Email Id</label>
              <input 
                className={formErrors.email.length >0 ?"error":null} 
                placeholder="Email" 
                type="email" 
                name="email" 
                onChange={this.handleChange}
              /> 
              {formErrors.email.length >0 && (
              <span className="errorMessage">{formErrors.email}</span>
              )}          
            </div>
            <div className="password1">
              <label htmlFor="password">Password</label>
                <input
                  className={formErrors.password.length >0 ?"error":null} 
                  placeholder="Password" 
                  type="password" 
                  name="password" 
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length >0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}           
            </div>
            <div className="createAccount">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      </div>

    )


  }
}
export default PatientRegister;