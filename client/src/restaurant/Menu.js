import Item from "./Item";
import { FaSortAmountDown , FaSortAmountDownAlt  } from "react-icons/fa";
import { useState } from "react";


const Menu = ({data}) => {

  let [itemsData,setItemsData] = useState(data)
  let [sortOrder,setSortOrder] = useState("desc")
  let [search,setSearch] = useState("")

  

  const sortItems = () => {
   
    itemsData.sort(
      (i1, i2) => sortOrder === "desc" ? i2.price.amount - i1.price.amount : i1.price.amount - i2.price.amount )
    setItemsData([...itemsData])
    setSortOrder(sortOrder === "desc" ? "asc" : "desc")
      
  }

  const filterItems = (e) => {

    // let name = e.target.value

    if(search.length >= 3 ) {
      setItemsData(data.filter(
        item => item.name.toLowerCase().includes(search)
      ))
    } else{
      setItemsData(data)
    }



    // if(!search.toLowerCase()) return

    // itemsData.filter(item => item.name.toLowerCase().includes(search))
    //  setItemsData([...itemsData])
  }
  

  
  return (
    <div className="container">

      <div className="flex items-center p-4">
        <button onClick={sortItems} >
          {sortOrder === "desc" ? <FaSortAmountDownAlt className="w-10 h-10 m-4"/> 
                              : <FaSortAmountDown className="w-10 h-10 m-4"/> } 
        </button>
      

        <div className="p-4">
          <div > 
            <input 
              onChange={e=>setSearch(e.target.value.toLowerCase())}
              onKeyUp={filterItems}
              type="search" 
              name="search"
              value={search} 
              placeholder="search in menu..."
              className="p-3 rounded-full outline-none text-black"
            />
            <button className="p-2 font-bold">Search</button>
          </div>

          <div className="ml-3 pt-2">
            <label for="name">Results for {search}</label>

          </div>

        </div>
      </div>

      

      {/* 
      every  time the user hits a key inside this input
      filter the items so if the item name contains a case insensitive
      fragment of the client text it is shown,make it so it works after te 3rd symbol was entered
      */}

      <ul className="p-4 flex flex-col lg:flex-row">
          {itemsData && itemsData.map(itemData => (
            <Item data={itemData} key={itemData.id} />
            
          ))}
      </ul>
    
    </div>
  )
  
}


export default Menu;
