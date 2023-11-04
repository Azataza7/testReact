import burgerImage from '../assets/hamburger.svg'
import bearImage from '../assets/bear.svg'
import cheeseburgerImage from '../assets/cheeseburger.svg'
import coffeeImage from '../assets/coffee.svg'
import friesImage from '../assets/fries.svg'
import teaImage from '../assets/tea.svg'

const Menu = () => {

  const MENUITEMS = [
    {name: 'Hamburger', price: '400', image: burgerImage},
    {name: 'Cheeseburger', price: '450', image: cheeseburgerImage},
    {name: 'French fries', price: '150', image: friesImage},
    {name: 'Coffee', price: '250', image: coffeeImage},
    {name: 'Tea', price: '220', image: teaImage},
    {name: 'Bear', price: '100', image: bearImage},
  ];



  return (
    <div className="Menu">

    </div>
  );
};

export default Menu;