import burgerImage from '../assets/hamburger.svg';
import bearImage from '../assets/bear.svg';
import cheeseburgerImage from '../assets/cheeseburger.svg';
import coffeeImage from '../assets/coffee.svg';
import friesImage from '../assets/fries.svg';
import teaImage from '../assets/tea.svg';

import ItemMenu from './ItemMenu';
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
    MENUITEMS.map((item) => ({...item, count: 0}))
  );

  const addItemOrder = () => {

  };

  const menuList = (MENUITEMS.map((item, index) => (
      <ItemMenu key={index} image={item.image} name={item.name} price={item.price} addToOrder={addItemOrder}/>
    ))
  );

  const emptyOrderText = <span>Тут слишком пусто! <br/> Добавь что-нибудь покушац</span>;

  return (
    <div className="Menu">
      <div className="order-details">
        {emptyOrderText}

      </div>
      <div className="menu-container">
        {menuList}
      </div>
    </div>
  );
};

export default Menu;