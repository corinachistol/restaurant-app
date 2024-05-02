import Item from "./Item";


const Menu = (props) => {
    let data = props.data
  return (
    <ul className="p-4">
        <Item data={data} />
    </ul>
  )
}

export default Menu;
