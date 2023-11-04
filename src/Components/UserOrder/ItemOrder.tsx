import React from 'react';

interface Props {
  name: string;
  count: number;
  price: number;
  deleteBtn: () => void;
}

const ItemOrder: React.FC<Props> = ({name, count, price, deleteBtn}) => {
  return (
    <div className={'userOrder' + name}>
      <span>{name}</span>
      <span>{count}</span>
      <span>{price}KGS</span>
      <button className='delete-item' onClick={deleteBtn}/>
    </div>
  );
};

export default ItemOrder;