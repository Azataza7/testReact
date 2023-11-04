import React from 'react';

const TotalPrice = ({sum}) => {
  const getColor = () => {
    if (sum > 5000) return 'red';
    if (sum > 3000) return 'orange';
    return 'green';
  };

  const colorStyle: React.CSSProperties = {color: getColor()};
  return (
    <div style={colorStyle} className="totalCost">Итого: {sum} KGS</div>
  );
};

export default TotalPrice;