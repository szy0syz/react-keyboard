import React from 'react';

const styles = require('./index.less');

export default function CarPlateInput(props) {
  const { onClick, current, carPlate = ['云', 'A', 'A', '9', '3', '5', '6', '新'] } = props;
  carPlate.splice(2, 0, '●');
  const index = parseInt(current, 10);

  const getStyle = idx => {
    if (index === 2) {
      return { border: null };
    }
    if (idx === index) {
      return { border: '1px solid #fa8231' };
    }
    return { border: null };
  };

  return (
    <div className={styles['inpt-box']}>
      {carPlate.map((val, idx) => (
        <div key={`${val}_${Date.now()}`} data-index={idx} onClick={onClick} style={getStyle(idx)}>
          {val}
        </div>
      ))}
    </div>
  );
}
