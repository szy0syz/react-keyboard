import { Button, Toast } from 'antd-mobile';
import React from 'react';
import router from 'umi/router';

import CarPlateInput from '@/components/CarPlateInput';
import Keyboard from '@/components/CarPlateKeyBoard';

const styles = require('./index.less');

export default class extends React.Component<{}, {}, any> {
  state = {
    keyboardVisible: false,
    current:'',
    boardFace: false,
    carPlate: ['云', 'A', '', '', '', '', '', '']
  };

  handlePlateClick = e => {
    const inptIndex = parseFloat(e.target.dataset.index);
    const { keyboardVisible } = this.state;
    if (!keyboardVisible) { 
      if (inptIndex === 0) {
        this.handleBoardToggle(true);
      } else {
        this.handleBoardToggle();
      }
     } else {
       if (inptIndex === 0) {
         this.setState({ boardFace: true });
       } else {
        this.setState({ boardFace: false });
       }
     }
    this.setState({ current: inptIndex });
    
  };

  handleKeyClick = e => {
    const text = e.target.innerText;
    const carPlate = this.state.carPlate.slice();
    const current = parseFloat(this.state.current);
    
    if (text === 'ABC' || text === '返回') {
      return this.setState({ boardFace: !this.state.boardFace })
    } else if (current > 0 && this.state.boardFace === true) {
      Toast.fail('车牌号格式错误', 1.2);
      return;
    } else if (text === 'backspace') {
      if (current === 1) {
        this.setState({ boardFace: true })
      }
      if (current < 1) {
        carPlate.splice(current, 1, '');
        this.setState({ carPlate });
      } else {
        carPlate.splice(current, 1, '');
        this.setState({ carPlate, current: current - 1 });
      }
    } else {
      carPlate.splice(current, 1, text);
      if (current >= 7) {
        this.setState({ carPlate, keyboardVisible: false });
      } else {
        if (current + 1 === 1) {
          this.setState({ boardFace: false })
        }
        if (current + 1 === 7) {
          this.setState({keyboardVisible: false}); 
        }
        this.setState({ carPlate, current: current + 1 });
      }
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
