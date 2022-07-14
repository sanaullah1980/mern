import logo from './logo.svg';
import './App.css';
import PersonCard from './component/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName={"Jane"}
        lastName={"Doe"}
        age={39}
        hairColor="Black"
      />
      <PersonCard 
        firstName={"John"}
        lastName={"Smith"}
        age={39}
        hairColor="Brown"
      />
      <PersonCard 
        firstName={"Millard"}
        lastName={"Fillmore"}
        age={39}
        hairColor="Brown"
      />
      <PersonCard 
        firstName={"Maria"}
        lastName={"Smith"}
        age={39}
        hairColor="Black"
      />
    </div>
  );
}

export default App;
