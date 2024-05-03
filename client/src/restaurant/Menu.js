import Item from "./Item";


const Menu = (props) => {
    let data = props.data
    // console.log(data);
  return (
    <ul className="p-4">
        {data && data.map(item => (
          <Item data={item} key={item.id} />

        ))}
    </ul>
  )
}

export default Menu;
