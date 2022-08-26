import React from 'react';
import {useState} from 'react';
import Inquiry from './Inquiry';

function House( {house}) {
    console.log(house);
    const [enquiryIsShown, setEnquiryShown] = useState(false);
    let clickHandler = () => {
        setEnquiryShown(!enquiryIsShown);
    }
    return (
        <div>
                <div className="row">
                    <div className='col-md-12'>
                       <b> County:</b> {house.county}
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-12'>
                    <b> Address:</b>{house.address}
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-7'>
                    <img className='w-100' src={`/imgs/${house.photo}`} alt="image"/>
                    </div>
                    <div className='col-md-5'>
                        <p className='price'> <b>Price: </b> $ {house.price}
                    </p>
                        <p><b> Details</b> {house.description} </p>
                        <img width="10%" src='imgs/email.png' onClick={clickHandler}/>
                        {enquiryIsShown && <Inquiry house={house} />}
                    </div>
                </div>
            </div>
    );
}

export default House;