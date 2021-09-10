import React, {useState} from 'react'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import  './style.css'
const Restutant = () => {

    // eslint-disable-next-line no-undef
    const [menuData, setMenuData] = useState(Menu)
   //We should never return the hooks like returing data after or in btween return statemnt
//    It should always be up on the return statement
const filterItem=(categ)=>{
const updateList=Menu.filter((curElem)=>{
    return curElem.category===categ;
    // This second last line tell that it get that specific category detail
});
setMenuData(updateList);
};    


    return (
        <>
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item"
                 onClick={()=>filterItem("breakfast")}
                 >Breakfast</button>
                <button className="btn-group__item" onClick={()=>filterItem("lunch")}>Lunch</button>
                <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button>
                <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All </button>
            </div>
        </nav>


      <MenuCard menuData={menuData}/>
      
        </>

    )
}

export default Restutant
