import React, { Component} from'react'
import './Stylesheet.css'
import NavBarMenu from './NavBarMenu';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const formValid = formErrors => {
    let valid =true;
  
    Object.values(formErrors).forEach(element => {
      element.length > 0 && (valid = false);  
    });
     return valid;
 };
  
  

class Form extends React.Component {


    constructor(props){
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            formErrors:{
                firstName: "",
                lastName: "",
                email: "",
                password: ""
              }
        } 
        this.inputRef= React.createRef()
    }

    handleChange = e => {
        e.preventDefault();
        const{name,value} = e.target;
        let formErrors = this.state.formErrors;
    
        switch(name){
          case 'firstName':
            formErrors.firstName = value.length<3 ? "minimum 3 characters required" : "";
            break;
          case 'lastName':
            formErrors.lastName = value.length<3 ? "minimum 3 characters required" : "";
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
    
        this.setState({formErrors, [name]:value},()=>console.log(this.state));
      };

      handleSubmit = submit =>{
        submit.preventDefault();
        if(formValid(this.state.formErrors)){
          console.log(`
          --SUBMITTING---
          First Name: ${this.state.firstName}
          Last Name: ${this.state.lastName}
          Email: ${this.state.email}
          Password: ${this.state.password}
          `);
          let info = {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email,
            password: this.state.password
          };
          fetch('http://localhost:8080/api/patients/login',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(info)
            }).
            then(r => r.json()).then(res => {
              console.log(res);
              if (res.length != 0) {
                localStorage.setItem('login',JSON.stringify(res))
                alert("Login Success");
              }
              else{
                alert("Enter correct information")
              }
            })
    
        }
        else {
          console.error("Form Invalid");
        }
      };
    componentDidMount(){
        this.inputRef.current.focus()
    }

    render(){
        const {formErrors}= this.state;
        return (
          <div>
          <NavBarMenu/>
          <div className="wrapper">
            <div className="form-wrapper">
              <h1>Log In Account</h1>
              <form onSubmit={this.handleSubmit} autocomplete="off">
                <div className="firstName">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    className={formErrors.firstName.length >0 ?"error":null} 
                    placeholder="First Name"  
                    name="firstName" 
                    ref ={this.inputRef}
                    onChange={this.handleChange}
                  /> 
                  {formErrors.firstName.length >0 && (
                     <span className="errorMessage">{formErrors.firstName}</span>
                  )}         
                </div>
                <div className="lastName">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    className={formErrors.lastName.length >0 ?"error":null} 
                    placeholder="Last Name" 
                    name="lastName" 
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.lastName.length >0 && (
                     <span className="errorMessage">{formErrors.lastName}</span>
                  )}          
                </div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input 
                    className={formErrors.email.length >0 ?"error":null} 
                    placeholder="Email" 
                    type="email" 
                    name="email" 
                    noValidate
                    onChange={this.handleChange}
                  /> 
                  {formErrors.email.length >0 && (
                     <span className="errorMessage">{formErrors.email}</span>
                  )}          
                </div>
                <div className="password">
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
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
          </div>
           
        )       
           
        
    }
}
export default Form;