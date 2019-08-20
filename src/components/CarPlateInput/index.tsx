import React from 'react';

const styles = require('./index.less');

const defaultPlate = ['云', '', '', '', '', '', '', ''];

export default function CarPlateInput(props) {
  const { onClick, current, carPlate = defaultPlate } = props;
  const index = parseInt(current, 10);

  const getStyle = idx => {
    if (idx === index) {
      return { border: '2px solid #fa8231' };
    }
    return { border: null };
  };
  console.log('~~~~~CarPlateInput~~~~', current, `[${carPlate[7]}]`);
  return (
    <div className={styles['inpt-box']}>
      {carPlate.map((val, idx) => (
        <div 
          key={`${idx}_${Date.now()}`} 
          data-index={idx} 
          onClick={onClick} 
          style={getStyle(idx)} 
          className={(idx === 7 && carPlate[7] === '') ? styles['new-item'] : styles['new-item-actived']}
        >
          {val || '　'}
        </div>
      ))}
    </div>
  );
}
