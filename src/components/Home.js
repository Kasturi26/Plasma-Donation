import React, { Component } from 'react'
import './Stylesheet.css'
import { Card } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu';


export class Home extends Component {
    render() {
        return (
          <div>
          <NavBarMenu/>
            <Card >
            <Card.Header as="h5">Have a good day!</Card.Header>
            <Card.Body>
              <Card.Title><h1>Become a donor today</h1></Card.Title>
              <Card.Text>
              Donations are needed more than ever especially for treating patients vulnerable to COVID-19
                If you've recovered from COVID-19, the very plasma in your body could be used to treat those still fighting the virus
                Those who have fought the virus have developed antibodies against the virus. These antibodies, along with the memory cells 
                to multiply their production, reside in their blood plasma. If they're able to donate some of their plasma, their antibodies with it, it 
                may help others who are still fighting the virus to make a recovery while producing more antibodies and maintain their own immunity.
              </Card.Text>
            </Card.Body>
          <Card.Body>
            <Card.Title><h1>Why?</h1></Card.Title>
            <Card.Text>
              Quite simply, plasma donors are needed because lives depend on plasma protein therapies. Donating plasma is often called, "the gift of life."
              Only a small number of people living in the U.S. who are eligible to donate blood or source plasma actually donate. 
              The plasma protein therapeutics industry supports donation in all of its forms, so that donors may contribute live-saving 
              blood and source plasma to those in need.Source plasma donation and blood donation are critically important activities
               that contribute to saving lives. For many with rare diseases, these are the only therapies available to treat these chronic conditions.
                Your plasma will be used to create therapies that treat a variety of conditions and diseases. Below is a brief description of the types of plasma protein therapies that
               are manufactured from source plasma and the types of conditions they are used to treat.
              
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        )
    }
}

export default Home;
