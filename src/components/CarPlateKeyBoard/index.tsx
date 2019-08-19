
import React from 'react';

const styles = require('./index.less');

function renderKeyItem (key, type = 0, onHandleClick = null) {
  switch (type) {
    case 0:
      return (<span onClick={onHandleClick} className={styles.key} key={key}>{key}</span>)
    case 1: // ABC、返回
      return (<span onClick={onHandleClick} className={`${styles.key} ${styles['key-label']}`} key={key}>{key}</span>)
    case 2: // backspace
      return (<span onClick={onHandleClick} className={`${styles.key} ${styles['key-backspace']}`} key={key}>{key}</span>)
    case 3: // ABC、返回
      return (<span onClick={onHandleClick} className={`${styles.key} ${styles['key-label']} ${styles['key-fixed']}`} key={key}>{key}</span>)
    case 4: // backspace
      return (<span onClick={onHandleClick} className={`${styles.key} ${styles['key-backspace']} ${styles['key-fixed']}`} key={key}>{key}</span>)
    default: // default
      return (<span onClick={onHandleClick} className={styles.key} key={key}>{key}</span>)
  }
  
}

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    dataIndex: 0
  }

  dataList = [
    [ '京','沪', '粤','津', '冀', '晋','蒙','辽','吉','黑','苏','浙','皖', '闽','赣','鲁','豫', '鄂','湘','桂', '琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁', 'ABC','新', '使', '警', '学', '港', '澳', ''],
    [ '1','2','3','4','5','6','7','8','9','0','Q','W','E','R','T','Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '返回','Z', 'X', 'C', 'V', 'B', 'N', 'M' , ''],
  ]

  handleToggleFace = () => {
    const { dataIndex } = this.state;
    this.setState({ dataIndex: dataIndex === 0 ? 1: 0 });
  }

  handleKeyClick = (e) => {
    const text = e.target.innerText;
    console.log(text);
    if (text === 'ABC' || text === '返回') {
      this.handleToggleFace()
    }
  }

  public render() {
    const { dataIndex } = this.state;
    
    return (
    <div className={styles.container}>
      <div className={styles.header} onClick={this.handleToggleFace}>[关闭]</div>
      <div className={styles['key-box']}>
        {this.dataList[dataIndex].map((key, idx) => {
          if (dataIndex === 0) {
            switch (idx) {
              case 30:
                return renderKeyItem(key, 1, this.handleKeyClick);
              case 37:
                return renderKeyItem(key, 2, this.handleKeyClick);
              default:
                return renderKeyItem(key, null, this.handleKeyClick);
            }
          } else {
            switch (idx) {
              case 29:
                return renderKeyItem(key, 3, this.handleKeyClick);
              case 37:
                return renderKeyItem(key, 4, this.handleKeyClick);
              default:
                return renderKeyItem(key, null, this.handleKeyClick);
            }
          }
        })}
      </div>
    </div>);
  }
}
