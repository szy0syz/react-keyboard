import React from 'react';

const styles = require('./index.less');

function renderKeyItem(key, type = 0, onHandleClick = null) {
  switch (type) {
    case 0:
      return (
        <span onClick={onHandleClick} className={styles.key} key={key}>
          {key}
        </span>
      );
    case 1: // ABC、返回
      return (
        <span onClick={onHandleClick} className={`${styles.key} ${styles['key-label']}`} key={key}>
          {key}
        </span>
      );
    case 2: // backspace
      return (
        <span onClick={onHandleClick} className={`${styles.key} ${styles['key-backspace']}`} key={key}>
          {key}
        </span>
      );
    case 3: // ABC、返回
      return (
        <span onClick={onHandleClick} className={`${styles.key} ${styles['key-label']} ${styles['key-fixed']}`} key={key}>
          {key}
        </span>
      );
    case 4: // backspace
      return (
        <span onClick={onHandleClick} className={`${styles.key} ${styles['key-backspace']} ${styles['key-fixed']}`} key={key}>
          {key}
        </span>
      );
    default:
      // default
      return (
        <span onClick={onHandleClick} className={styles.key} key={key}>
          {key}
        </span>
      );
  }
}

export default class extends React.PureComponent {
  // prettier-ignore
  dataList = [
    ['京', '沪', '粤', '津', '冀', '晋', '蒙', '辽', '吉', '黑', '苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '桂', '琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁', 'ABC', '新', '使', '警', '学', '港', '澳', 'backspace', ], 
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '返回', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'backspace', ]
  ];

  render() {
    const { handleKeyClick, isFront = false, isShow = false, handleOnCancel } = this.props;

    return (
      <div style={{ height: isShow ? '270px' : '0' }} className={styles.container}>
        <div className={styles.header} onClick={handleOnCancel}> [关闭] </div>
        <div className={styles['key-box']}>
          {this.dataList[isFront ? 0 : 1].map((key, idx) => {
            if (isFront) {
              switch (idx) {
                case 30:
                  return renderKeyItem(key, 1, handleKeyClick);
                case 37:
                  return renderKeyItem(key, 2, handleKeyClick);
                default:
                  return renderKeyItem(key, null, handleKeyClick);
              }
            } else {
              switch (idx) {
                case 29:
                  return renderKeyItem(key, 3, handleKeyClick);
                case 37:
                  return renderKeyItem(key, 4, handleKeyClick);
                default:
                  return renderKeyItem(key, null, handleKeyClick);
              }
            }
          })}
        </div>
      </div>
    );
  }
}
