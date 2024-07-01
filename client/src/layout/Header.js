import Nav from "./Nav";
import { useState } from "react";

import Menu from '../restaurant/Menu';
import Content from "./Content";



const Header = ({orderData, menuData}) => {

    const [order, setOrder] = useState(orderData);

    return (
        <div>
            <header>
                <Nav order={order} />
            </header>

            <Content>
                <Menu data={menuData} order={order} setOrder={setOrder}  />
            </Content>

        </div>
      );
}
 
export default Header;