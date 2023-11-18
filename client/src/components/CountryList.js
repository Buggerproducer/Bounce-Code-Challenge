import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


const CountryList = ({ data,setCountry,setCountryList }) => {
    const handleItemClick = async (e) => {
        const url = "http://localhost:3306/exact_country/" + e;

        try {
            const response = await fetch(url, {
                method: 'GET',
            });
            const fetchedData = await response.json();
            setCountry(fetchedData);
            setCountryList(null);
        }catch(err){
            console.error(err.message);
        }
    }

    return (
        <div>
            <h2>Select one</h2>
            <ListGroup as="ol" numbered>
                {data.map((country, index) => (
                    // Adjust the property path according to your actual data structure
                    <ListGroup.Item 
                    as="li" 
                    key={index} 
                    action 
                    onClick={() => handleItemClick(country.common)}>
                        {country.common}
                    </ListGroup.Item>  
                ))}
            </ListGroup>
            
        </div>
    );
};

export default CountryList;