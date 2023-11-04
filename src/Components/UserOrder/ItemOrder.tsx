import React from 'react';

interface Props {
  name: string;
  count: number;
  price: number;
  deleteBtn: () => void;
}

const ItemOrder: React.FC<Props> = ({name, count, price, }) => {
  return (
    <div className={'userOrder' + name}>
      <span>{name}</span>
      <span>{count}</span>
      <span>{price}KGS</span>
    </div>
  );
};

export default ItemOrder;