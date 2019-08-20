import { Button } from 'antd-mobile';
import React from 'react';
import router from 'umi/router';

import CarPlateInput from '@/components/CarPlateInput';
import Keyboard from '@/components/CarPlateKeyBoard';

const styles = require('./index.less');

export default class extends React.Component<{}, {}, any> {
  state = {
    keyboardVisible: false,
    current: 0,
    boardFace: false,
    carPlate: ['云', 'A', '', '', '', '', '', '']
  };

  handlePlateClick = e => {
    console.log('~~click:', e.target.innerText);
    console.log('~~index:', e.target.dataset.index);
    const inptIndex = e.target.dataset.index;
    const { keyboardVisible } = this.state;
    if (!keyboardVisible) { 
      if (inptIndex === '0') {
        this.handleBoardToggle(true);
      } else {
        this.handleBoardToggle();
      }
     } else {
       if (inptIndex === '0') {
         this.setState({ boardFace: true });
       } else {
        this.setState({ boardFace: false });
       }
     }
    this.setState({ current: e.target.dataset.index });
    
  };

  handleKeyClick = e => {
    const text = e.target.innerText;
    if (text === 'ABC' || text === '返回') {
      return this.setState({ boardFace: !this.state.boardFace })
    } else {
      const carPlate = this.state.carPlate.slice();
      carPlate.splice(this.state.current, 1, text);
      console.log('~~~~new carPlate', carPlate);
      this.setState({ carPlate })
    }
  }

  handleBoardToggle = (boardFace = false) => {
    this.setState({ keyboardVisible: !this.state.keyboardVisible, boardFace })
  }

  render = () => {
    const { current, carPlate, boardFace, keyboardVisible } = this.state;
    return (
      <div className={styles.home}>
        <div className={styles.index}>
          <div className={styles.title}>云南城建物业智慧商业</div>
          <div className={styles.subtitle}>停车收费系统</div>
          <div className={styles['fee-container']}>
            <p>请输入您的车牌号</p>
            <CarPlateInput current={current} onClick={this.handlePlateClick} carPlate={carPlate} />
            <Button type="primary">查询停车费</Button>
          </div>
          <Button
            type="primary"
            className={styles['btn-enter']}
            onClick={() => {
              router.push('/entrance');
            }}
          >
            进入
          </Button>
        </div>
        <Keyboard handleKeyClick={this.handleKeyClick} isFront={boardFace} isShow={keyboardVisible} handleOnCancel={this.handleBoardToggle} />
      </div>
    );
  };
}
