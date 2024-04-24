import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {
    console.log(country)
    const {name, flags, population, cca3, area} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited =()=>{
        setVisited(true); 
    }

    console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handleVisitedCountry(country.name.common)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>Visited</button>
            {visited && ' I have visited this country.'}
            {/* this line will appear after click of the Visited btn */}
        </div>
    );
};

export default Country;