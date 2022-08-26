import React from 'react';
import House from '../house';

function FeaturedHouse({house}) {
    if(house) {
        return (            
                <div>
                    <div className='row'>
                            <div className="col-md-12 bg-warning">
                                <h3> Featured house !</h3>
                            </div>      
                            <House house={house} />                  
                    </div>                
                </div>
        )
        }
        else {
            return <div> No featured house at this time</div>
        }
}

export default FeaturedHouse;