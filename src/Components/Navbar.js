import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({ onSearch, foodData, filtertype }) => {
    const [searchText, setsearchText] = useState('')
    const [isSelected, setIsSelected] = useState(false);
    const foodsearch = (e) => {
        const search = e.target.value;
        setsearchText(search);
        onSearch(search);
    };
    const handleClick = (type, name) => {
        setIsSelected(name);
        filtertype(type);
    };
    const filterbtns =[
        {
            name:"All",
            type:"all"
        },
        {
            name:"BreakFast",
            type:"breakfast"
        },
        {
            name:"Lunch",
            type:"lunch"
        },
        {
            name:"Dinner",
            type:"dinner"
        }
    ]
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <img src="/logo.svg" alt="Logo" />
                </div>
                <div className="input">
                    <input onChange={foodsearch} value={searchText} type="text" placeholder='Search Food.....' />
                </div>
            </div>
            <div className="mid">
            {filterbtns.map((value) => (
                <button key={value.name} onClick={() => handleClick(value.type, value.name)} className={`btn ${ isSelected === value.name ? 'selected' : ''}`}>{value.name}</button>
            ))}
            </div>
        </>
    );
};

export default Navbar;
