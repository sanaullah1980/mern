import React, { Component } from 'react'

export default class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            age: props.age,
            hairColor: props.hairColor
        };
    
    }
  
    render() {
   
        const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div>
        <h3>{this.state.lastName},{this.state.firstName}</h3>
        <h4>{this.state.age}</h4>
        <h5>{this.state.hairColor}</h5>
        <button onClick={()=> this.state.age = this.setState({age: this.state.age + 1})}>Birthday button for {firstName} {lastName}</button>
      </div>
    )
  }
}
