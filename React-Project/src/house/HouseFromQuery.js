import React from 'react';
import { useParams } from 'react-router-dom';
import House from '.';

function HouseFromQuery({allHouses}) {
    let {id} = useParams();
    // console.log(id);
    // console.log(allHouses)
    let house = allHouses.find((item) => item.id === parseInt(id));
    console.log(house);
    return (
        <div>
            <House house={house} />
        </div>
    );
}

export default HouseFromQuery;