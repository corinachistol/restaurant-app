import Item from "./Item";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { useEffect, useState } from "react";


const Menu = ({data}) => {
  let [itemsData,setItemsData] = useState(data)


  const sortItemsDesc = () => {
    itemsData.sort((i1, i2) => i2.price.amount - i1.price.amount)
    setItemsData([...itemsData])
  }
  const sortItemsAsc = () => {
    itemsData.sort((i1, i2) => i1.price.amount - i2.price.amount)
    setItemsData([...itemsData])
  }
  


  return (
    <div>
      <button onClick={sortItemsDesc}><BsChevronCompactDown/> </button>
      <button onClick={sortItemsAsc}><BsChevronCompactUp/> </button>
      {/* 
      HW1: add ascending sort
      Hw2: optimize using 1 button */}

      <ul className="p-4">
          {data && data.map(itemData => (
            <Item data={itemData} key={itemData.id} />

          ))}
      </ul>
    
    </div>
  )
}

export default Menu;
