import logo from './logo.svg';
import './App.css';
import PersonCard from './component/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"John"} lastName={"Doe"} age={31} hairColor={"Brown"} />
      <PersonCard firstName={"Chris"} lastName={"Brown"} age={31} hairColor={"Brown"} />
    </div>
  );
}

export default App;
