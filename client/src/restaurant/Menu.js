import Item from "./Item";
import { FaSortAmountDown , FaSortAmountDownAlt  } from "react-icons/fa";
import { useState } from "react";


const Menu = ({data}) => {
  let [itemsData,setItemsData] = useState(data)
  let [sortOrder,setSortOrder] = useState("desc")

  const sortItems = () => {
   
    itemsData.sort(
      (i1, i2) => sortOrder === "desc" ? i2.price.amount - i1.price.amount : i1.price.amount - i2.price.amount )
    setItemsData([...itemsData])
    setSortOrder(sortOrder === "desc" ? "asc" : "desc")
      
  }
  

  
  return (
    <div className="container">
      <button onClick={sortItems} className="p-4" >
        {sortOrder === "desc" ? <FaSortAmountDownAlt className="w-10 h-10 m-4"/> 
                            : <FaSortAmountDown className="w-10 h-10 m-4"/> } 
      </button>
     {/*
      HW1: add ascending sort
      Hw2: optimize using 1 button */}

      <ul className="p-4 flex flex-col lg:flex-row">
          {itemsData && itemsData.map(itemData => (
            <Item data={itemData} key={itemData.id} />
            
          ))}
      </ul>
    
    </div>
  )
  
}


export default Menu;
