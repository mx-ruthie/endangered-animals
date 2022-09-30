import { useState, useEffect } from "react";

const SpeciesCollection = () => {

//   const data = [
//     {
//     commonName: 'Black Panther', 
//     scientificName: 'Panthera pardus'
//   }, {
//     commonName: 'Gold FIsh', 
//     scientificName: 'Panthera pardus'
//   }, 
//     commonName: 'House Cat', 
//     scientificName: 'Panthera pardus'
//   }, {
//     commonName: 'House Dog', 
//     scientificName: 'Panthera pardus'
//   }, {
//     commonName: 'House Cat', 
//     scientificName: 'Panthera pardus'
//   }
// ]
const [species, setSpecies] = useState([]);

  const getSpecies = () => {
    fetch("http://localhost:8080/species")
      .then((res) => res.json())
      .then((res) => {
        //setEventList(res) this was leaving a blank screen so we setEvents instead and here we are
        setSpecies(res);
        console.log("this is res", res);
      });

  };

  useEffect(() => {
    getSpecies();
    console.log("hey I'm running");
  }, []);


  return(
    <div className="speciesCollection cards">
      {species.map(s => <SpeciesCard species={s}/>)}
    </div>
  )
}

export default SpeciesCollection;

const SpeciesCard = ({species}) => {
  return <div className='card'>
    Common Name: <br></br>{species.common_name}<br></br>
    Scientific Name: <br></br>{species.scientific_name}<br></br>
    Estimated Population: {species.population}<br></br>
    Conservation Status: {species.conservation_status}<br></br>
  </div>
}