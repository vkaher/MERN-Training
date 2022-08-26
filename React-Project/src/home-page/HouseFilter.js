import React from 'react';
import { useNavigate } from 'react-router-dom';

function HouseFilter({allHouses}) {
    //distinct counties
    let distinctCounties = Array.from(new Set(allHouses.map( (h) => h.county)));
    console.log(distinctCounties)
    
    let transport = useNavigate();
    let onChangeHandler= (e) => {
        transport(`/searchResults/${e.target.value}`);
    }

    return (
        <div>
            <div className="row mb-3">
                <div className="col-md-8 offset-4">
                 Search by county- 
                <select onChange={onChangeHandler}>
                    <option value=''> Select </option>
                    {distinctCounties.map( (item) => {
                     return <option value={item} key={item}> 
                        {item} 
                     </option>
                    })
                    }                   
                </select>
                </div>
            </div>
        </div>
    );
}

export default HouseFilter;