import React from 'react';
//import Data from '../data/Data.json'
function CardFun(props) {
    return (
        <div className="card bg-info card-wrap">
               <div className="card-head bg-primary fs-3 px-3 text-white">{props.name}</div>
                <div className="card-body">
                    <h4 className="card-title text-white">{props.des}</h4>
                    <p className="card-text">{props.age}</p>
                </div>
            </div>
    );
}

export default CardFun;