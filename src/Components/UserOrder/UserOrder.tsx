import React from 'react';
import ItemOrder from './ItemOrder';

interface OrderItem {
  name: string;
  price: number;
  count: number;
}

interface Props {
  items: OrderItem[];
}

const UserOrder: React.FC<Props> = ({items,}) => {

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.count, 0);
  };

  const emptyTextOrder = (
    <span>
      Тут пусто!<br/> Добавь что-нибудь покушать
    </span>
  );

  const orderList = (items.map((item, index) => (
    <ItemOrder key={index} name={item.name} count={item.count} price={item.price}/>
  )));

  return (
    <div className="userOrder">
      {orderList}
    </div>
  );

};

export default UserOrder;
