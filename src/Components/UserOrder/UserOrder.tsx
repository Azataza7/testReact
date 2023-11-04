import React from 'react';
import ItemOrder from './ItemOrder';

interface OrderItem {
  name: string;
  price: number;
  count: number;
}

interface Props {
  items: OrderItem[];
  removeItem: (item: OrderItem) => void;
}

const UserOrder: React.FC<Props> = ({items, removeItem}) => {

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.count, 0);
  };

  const emptyTextOrder = (
    <span>
      Тут пусто!<br/> Добавь что-нибудь покушать
    </span>
  );

  const orderList = (items.map((item, index) => (
    <ItemOrder
      key={index}
      name={item.name}
      count={item.count}
      price={item.price}
      deleteBtn={() => removeItem(item)}/>
  )));

  return (
    <div className="userOrder">
      {items.map((item) => ( item.count > 0))}
      {orderList}
      <div className="totalCost">You have to pay: {calculateTotalPrice()} KGS</div>
    </div>
  );

};

export default UserOrder;
