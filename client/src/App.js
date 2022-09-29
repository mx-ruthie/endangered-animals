//import logo from './logo.svg';
import './App.css';
import SpeciesCollection from './components/speciescollection';
import { useState } from 'react';

const names = ["Linda", "Ruthie", "Alma", "Melissa", "Presh"];
function App() {
  const [displayTable, setDisplayTable] = useState(false);

  const handleSubmit = () => {
    setDisplayTable(currentDisplay => !currentDisplay);
    console.log("are you working?");
  };
  return (
    <div className="App">
      <h1>Endangered Species</h1>
      <SpeciesCollection />
      {/* the displayTable line is here to check the state of the page */}
      {displayTable.toString()}
      <button onClick={handleSubmit}>Click here for all individual sightings data</button>
      {displayTable ? <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      {/* <th scope="col">Last</th>
      <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
      {names.map((name, index) => {
        return(
        <tr>
          {/* the curly braces allow me to use JS inside html
           (like in the case below, it's calling the parameter directly and doing 
           JS magic on it, not directly printing*/}
          <th scope="row">{index+1}</th>
          <td>{name}</td>
          {/* <td>Otto</td>
          <td>@mdo</td> */}
        </tr>
        )
      })}

    
  </tbody>
</table> : null }
    </div>
  );
}

export default App;
