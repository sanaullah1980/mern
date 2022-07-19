import React, {useState, useReducer} from 'react';

const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };

const reducer = (state, action) => {
    switch (action.type) {
        case 'FIRST_NAME':
            if (action.payload.length < 2){
                return{
                    ...state,
                    firstName: {
                        value: action.payload,
                        error: 'First Name must be atleast 2 characters'
                    }
                } 
            }else {
                return{
                    ...state,
                    firstName: {
                        value: action.payload,
                        error: null
                    }
                }
            }
            
        case 'LAST_NAME':
            if (action.payload.length < 2){
                return{
                    ...state,
                    lastName: {
                        value: action.payload,
                        error: 'Last Name must be atleast 2 characters'
                    }
                } 
            }else {
                return{
                    ...state,
                    lastName: {
                        value: action.payload,
                        error: null
                    }
                }
            }
        case 'SET_EMAIL':
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (action.payload.match(mailformat)){
                return {
                    ...state,
                    email: {
                        value: action.payload,
                        error: null
                    }
                }
            }else{
                return {
                    ...state,
                    email: {
                        value: action.payload,
                        error: 'Enter valid email address'
                    }
                } 
            }

        default:
            return state;
    }
}

export default () => {
  
const [state, dispatch] = useReducer(reducer, initialState);

const handleFirstNameChange = (e) =>{
    dispatch({
        type: 'FIRST_NAME',
        payload: e.target.value
    })
}

const handleLastNameChange = (e) =>{
    dispatch({
        type: 'LAST_NAME',
        payload: e.target.value
    })
}

const validateEmail = (e) =>{   
    dispatch({
        type: 'SET_EMAIL',
        payload: e.target.value 
    })
    
}

  return (
    <div className="App">
      <form className="reg__form">
        <div className="input__block">
          <label>First Name</label>
          <input type="text"
            value= {state.firstName.value} 
            onChange={(e) => handleFirstNameChange(e) }/>
        </div>
        
         <span className='error__msg'>{state.firstName.error}</span>
    
         
        <div className="input__block">
          <label>Last Name</label>
          <input type="text" 
            value= {state.lastName.value}
            onChange={(e) => handleLastNameChange(e)}/>
        </div>
        <span className='error__msg'>{state.lastName.error}</span>
         
        <div className="input__block">
          <label>Email</label>
          <input type= "email" 
            value={state.email.value}
            onChange={(e) => validateEmail(e)}/>
        </div>
        <span className='error__msg'>{state.email.error}</span>

      </form>
    </div>
  );
}