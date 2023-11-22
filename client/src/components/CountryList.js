import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import CountryCard from './Card';

const CountryList = ({ setCountry }) => {
    const [countryList, setCountryList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const itemsPerPage = 8; // Number of items per page
    const pageNeighbours = 1; // How many adjacent pages should be shown


    useEffect(() => {
        // Fetch countries on component mount
        const fetchCountries = async () => {
            try {
                const response = await fetch('http://localhost:3306/all_countries');
                const data = await response.json();
                setCountryList(data);
                setPageCount(Math.ceil(data.length / itemsPerPage));
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const handlePageClick = (number) => {
        setCurrentPage(number); // Set the current page to the number clicked
    };

    // Calculate the currently displayed countries
    const displayedCountries = countryList.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );
    // Generate Pagination Items
    let items = [];
    const startPage = Math.max(0, currentPage - pageNeighbours);
    const endPage = Math.min(pageCount, currentPage + pageNeighbours + 1);

    for (let number = startPage; number < endPage; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageClick(number - 1)}>
                {number+1}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <div className="row">
                {displayedCountries.map((country, index) => (
                    <div className="col-md-3 mt-3" key={index}>
                        <CountryCard country={country} />
                    </div>
                ))}
            </div>
            <div className="row mt-5">
                <div className="col-md-12 d-flex justify-content-center">
                    <Pagination size="sm">
                        <Pagination.First onClick={() => handlePageClick(0)} disabled={currentPage === 0} />
                        <Pagination.Prev onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 0} />

                        {currentPage > 1 && <Pagination.Ellipsis />}
                        {items}
                        {currentPage < (pageCount - 2) && <Pagination.Ellipsis />}

                        <Pagination.Next onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage >= (pageCount - 1)} />
                        <Pagination.Last onClick={() => handlePageClick(pageCount - 1)} disabled={currentPage >= (pageCount - 1)} />
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default CountryList;
