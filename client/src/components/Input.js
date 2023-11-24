import React, { Fragment, useState } from "react";

const Input = ({setCountryList}) => {
    const [inputValue, setInputValue] = useState('');

    const searchInput = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch(`http://localhost:8080/country/${inputValue}`, {
                method: 'GET', //backend is expecting a GET request
            });
            const fetchedData = await response.json(); // Parse JSON data from the response
            setCountryList(fetchedData); // Update the state in the App component with the fetched data
        }catch(err){
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <form className="d-flex mt-5 position-relative" onSubmit={searchInput}>
            {/* <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Filter
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Name</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Code</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Currency</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">Language</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown> */}
                <input 
                    type="text" 
                    className="form-control mr-2" 
                    placeholder="Country Name"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button className="btn btn-success">Submit</button>
            </form>
            
        </Fragment>
    );
}

export default Input;
