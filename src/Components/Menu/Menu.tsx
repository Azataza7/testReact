import burgerImage from '../../assets/hamburger.svg';
import bearImage from '../../assets/bear.svg';
import cheeseburgerImage from '../../assets/cheeseburger.svg';
import coffeeImage from '../../assets/coffee.svg';
import friesImage from '../../assets/fries.svg';
import teaImage from '../../assets/tea.svg';

import ItemMenu from './ItemMenu';
import UserOrder from '../UserOrder/UserOrder';
import './Menu.css';
import {useState} from 'react';

interface Props {
  name: string;
  price: number;
  image: string;
}

const Menu = () => {

  const MENUITEMS: Props[] = [
    {name: 'Hamburger', price: 400, image: burgerImage},
    {name: 'Cheeseburger', price: 450, image: cheeseburgerImage},
    {name: 'French fries', price: 150, image: friesImage},
    {name: 'Coffee', price: 250, image: coffeeImage},
    {name: 'Tea', price: 220, image: teaImage},
    {name: 'Bear', price: 100, image: bearImage},
  ];

  const [items, setItems] = useState(
    MENUITEMS.map((item) => ({ ...item, count: 0 }))
  );

  const addItemOrder = (item) => {
    const existingItem = items.find((orderItem) => orderItem.name === item.name);
    if (existingItem) {
      const updatedItems = items.map((orderItem) =>
        orderItem.name === item.name
          ? { ...orderItem, count: orderItem.count + 1 }
          : orderItem
      );
      setItems(updatedItems);
    } else {
      setItems([...items, { ...item, count: 1 }]);
    }
  };

  const removeItemFromOrder = (item) => {
    const updatedItems = items.filter((orderItem) => orderItem.name !== item.name);
    setItems(updatedItems);
  };

  const menuList = (MENUITEMS.map((item, index) => (
      <ItemMenu
        key={index}
        image={item.image}
        name={item.name}
        price={item.price}
        addToOrder={() => addItemOrder(item)}/>
    ))
  );

  return (
    <div className="Menu">
      <div className="order-details">
        <UserOrder items={items} removeItem={removeItemFromOrder}/>
      </div>
      <div className="menu-container">
        {menuList}
      </div>
    </div>
  );
};

export default Menu;