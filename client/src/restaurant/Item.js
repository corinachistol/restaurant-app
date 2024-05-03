
const Item = ({data}) => {
    // let data = props.data
    console.log(data)
    return ( 
        <li className="p-2 border-solid border-b-2 border-zinc-500 ">
            <h2>{data.name}</h2>
            <img src={data.image} alt={data.name} className="w-72 h-72 object-cover"/>
            <Money price={data.price} key={data.price.id} />
        </li>
     );
}
 
export default Item;


export const Money = ({price}) => {
    // console.log(price)
  return (
    <p>{price.amount} {price.currency}</p>
  )
}
