import React from 'react';

interface Props {
  name: string;
  count: number;
  price: number;
  deleteBtn: () => void;
}

const ItemOrder: React.FC<Props> = ({name, count, price, deleteBtn}) => {
  return (
    <div className={'userOrder ' + name}>
      <span className="nameItem">{name}</span>
      <div className="price-count">
        <span className="itemCount">x{count}</span>
        <span className="itemPrice">{price}KGS</span>
      </div>
      <button className='delete-item' onClick={deleteBtn}/>
    </div>
  );
};

export default ItemOrder;