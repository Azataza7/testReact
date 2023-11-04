import * as React from 'react';

interface Props {
  image: string;
  name: string;
  price: number;
  addToOrder: () => void;
}

const itemMenu: React.FC<Props> = ({image, name, price, addToOrder}) => {
  return (
    <div className="menu-item" onClick={addToOrder}>
      <img src={image} alt={'imageOf' + name}/>
      <span>{name}</span>
      <span>Price: {price} KGS</span>
    </div>
  );
};

export default itemMenu;