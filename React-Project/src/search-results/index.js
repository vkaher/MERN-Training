import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function SearchResults({allHouses}) {
    //get the county name from url
    const {county} = useParams();
    console.log(county);
    console.log(allHouses)
    let filteredHouses = allHouses.filter( (item) => item.county === county )
    console.log(filteredHouses);
    let transport = useNavigate();

    return (
        <div>
            <table className='table table-hover'>
                <tbody>
                    {filteredHouses.map( (house) => {
                       return (<tr onClick={() => transport(`/house/${house.id}`)}> 
                            <td>{house.address}</td>
                            <td> {house.price}</td>
                        </tr>)
                    }                       
                    )}                    
                </tbody>                
            </table>
        </div>
    );
}

export default SearchResults;