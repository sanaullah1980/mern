import logo from './logo.svg';
import './App.css';
import PersonCard from './component/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName={"Jane"}
        lastName={"Doe"}
        age={29}
        hairColor="Black"
      />
      <PersonCard 
        firstName={"John"}
        lastName={"Smith"}
        age={31}
        hairColor="Brown"
      />
      <PersonCard 
        firstName={"Millard"}
        lastName={"Fillmore"}
        age={25}
        hairColor="Brown"
      />
      <PersonCard 
        firstName={"Maria"}
        lastName={"Smith"}
        age={32}
        hairColor="Black"
      />
    </div>
  );
}

export default App;
