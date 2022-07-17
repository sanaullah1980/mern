import {useState} from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="App">
      <form className="reg__form">
        <div className="input__block">
          <label>First Name</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value) }/>
        </div>
          {
            firstName && firstName.length < 2 ? <span className='error__msg'>First Name must be atleast 2 characters</span> : null
          }
        <div className="input__block">
          <label>Last Name</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)}/>
        </div>
          {
            lastName && lastName.length < 2 ? <span className='error__msg'>Last Name must be atleast 2 characters</span> : null
          }
        <div className="input__block">
          <label>Email</label>
          <input type= "email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
          {
            email && email.length < 5 ? <span className='error__msg'>Email must be atleast 5 characters</span> : null
          }
        <div className="input__block">
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
          {
            password && password.length < 8 ? <span className='error__msg'>Password must be atleast 8 characters</span> : null
          }
        <div className="input__block">
          <label>Confirm Password</label>
          <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div> 
          {
            password === confirmPassword ? null : <span className='error__msg'>Password must match</span> 
          }
      </form>
      <div className="dispaly__data">
        <div className='output__block'>
          <label>First Name</label>
          <p>{firstName}</p>
        </div>
        <div className='output__block'>
          <label>Last Name</label>
          <p>{lastName}</p>
        </div>
        <div className='output__block'>
          <label>Email</label>
          <p>{email}</p>
        </div>
        <div className='output__block'>
          <label>Password</label>
          <p>{password}</p>
        </div>
        <div className='output__block'>
          <label>Confirm Password</label>
          <p>{confirmPassword}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
