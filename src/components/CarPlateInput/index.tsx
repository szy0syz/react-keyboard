import React from 'react';

const styles = require('./index.less');

const defaultPlate = ['云', '', '', '', '', '', '', ''];

export default function CarPlateInput(props) {
  const { onClick, current, carPlate = defaultPlate } = props;
  if (carPlate.length === 8) carPlate.splice(2, 0, '●');
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
        <div key={`${idx}_${Date.now()}`} data-index={idx > 1 ? (idx-1): idx} onClick={onClick} style={getStyle(idx)}>
          {val || '　'}
        </div>
      ))}
    </div>
  );
}
