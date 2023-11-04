import React from 'react';
import ItemOrder from './ItemOrder';
import TotalPrice from '../TotalPrice/TotalPrice';

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
      Тут пусто!<br/> Добавьте что-нибудь покушац
    </span>
  );

  const filteredItems = items.filter((item) => item.count > 0);

  const orderList = (filteredItems.map((item, index) => (
    <ItemOrder
      key={index}
      name={item.name}
      count={item.count}
      price={item.price}
      deleteBtn={() => removeItem(item)}/>
  )));

  return (
    <div className="userOrder">
      {filteredItems.length > 0 && (<h1 className="order-title">Ваш Заказ:</h1>)}
      {filteredItems.length === 0 ? (
        emptyTextOrder
      ) : (
        orderList
      )}
      {filteredItems.length > 0 && (<TotalPrice sum={calculateTotalPrice()}/>)}
    </div>
  );
};

export default UserOrder;
