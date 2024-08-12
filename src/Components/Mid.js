import React from 'react';
import './Mid.css';
const Mid = ({ foodData, BASE_URL }) => {
    const fooddatarender = (data) => {
        return data.map((food, index) => (
            <div key={index} className={`container ${index + 1}`}>
                <img src={`${BASE_URL}${food.image}`} alt={food.name} />
                <div className="right">
                    <h1>{food.name}</h1>
                    <p>{food.text}</p>
                    <button>{'$' + food.price}</button>
                </div>
            </div>
        ))
    };
    return (
        <>
            
            <div className='Body'>
                <div className="image">
                    <img src="/bg.png" alt="Background" />
                </div>
                <div className="flexx">
                    {fooddatarender(foodData)}
                </div>
            </div>
        </>
    );
}

export default Mid;

