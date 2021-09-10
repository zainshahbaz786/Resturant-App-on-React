import React from 'react'
// import MenuCard from './MenuCard'
import Menu from './MenuApi'
// import Restutant from './Restutant'
import MenuCard from './MenuCard';

const Navbar = ({props}) => {
    return (
        <>
           <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item"
                 onClick={()=>props.filterItem("breakfast")}
                 >Breakfast</button>
                <button className="btn-group__item" onClick={()=>props.filterItem("lunch")}>Lunch</button>
                <button className="btn-group__item" onClick={()=>props.filterItem("dinner")}>Dinner</button>
                <button className="btn-group__item" onClick={()=>props.setMenuData(Menu)}>All </button>
            </div>
        </nav>


      <MenuCard menuData={props.menuData}/>
         
        </>
    )
  
};    

    


export default Navbar
