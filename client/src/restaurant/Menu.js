import Item from "./Item";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useState } from "react";


const Menu = ({data}) => {
  let [itemsData,setItemsData] = useState(data)
  const [filter,setFilter] = useState(false)

  const toggleFitler = () => {
    console.log(filter)
    
    if(filter){
      //if filter is true -> sortAsc
      itemsData.sort((i1, i2) => i1.price.amount - i2.price.amount)
      setItemsData([...itemsData])
    }else{
      //if filter is false -> sortDesc
      itemsData.sort((i1, i2) => i2.price.amount - i1.price.amount)
      setItemsData([...itemsData])
    
    }
    setFilter(!filter)
      
  }
  

  
  return (
    <div>
      <button onClick={toggleFitler} className="w-10 h-10 m-4" >
        {filter ? <BsToggleOn/> : <BsToggleOff/> } 
      </button>
     {/*
      HW1: add ascending sort
    Hw2: optimize using 1 button */}

      <ul className="p-4">
          {itemsData && itemsData.map(itemData => (
            <Item data={itemData} key={itemData.id} />
            
          ))}
      </ul>
    
    </div>
  )
  
}


export default Menu;
