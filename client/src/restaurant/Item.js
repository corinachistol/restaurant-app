
const Item = (props) => {
    let data = props.data
    return ( 
        <li className="p-2 border-solid border-b-2 border-zinc-500 ">
            <h2>{data.name}</h2>
            <img src={data.image} alt={data.name} className="w-72 h-72 object-cover"/>
            <p>{data.price}</p>
        </li>
     );
}
 
export default Item;