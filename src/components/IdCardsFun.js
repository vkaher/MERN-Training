import React from 'react';
import CardFun from './CardFun';
import Data from '../data/Data.json'

function IdCardsFun(props) {
    console.log(Data.data)
    return (
        <div>
            <h1>Hello From ID Cards App!</h1>
            <div className=''>
            {
                Data.data.map( (elem) => {
                    return <CardFun name={elem.name} des={elem.des} age ={elem.age} id={elem.id} />
                })
            }
            </div>
            
        </div>



    );
}

export default IdCardsFun;