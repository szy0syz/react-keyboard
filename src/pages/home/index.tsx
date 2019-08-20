import { Button, Toast } from 'antd-mobile';
import React from 'react';
import router from 'umi/router';

import CarPlateInput from '@/components/CarPlateInput';
import Keyboard from '@/components/CarPlateKeyBoard';

const styles = require('./index.less');

export default class extends React.Component<{}, {}, any> {
  state = {
    // keyboardVisible: false,
    current: 0,
  };

  handleOnClick = e => {
    console.log('~~click:', e.target.innerText);
    this.setState({ current: e.target.dataset.index });
  };

  render = () => {
    const { current } = this.state;
    return (
      <div className={styles.home}>
        <div className={styles.index}>
          <div className={styles.title}>云南城建物业智慧商业</div>
          <div className={styles.subtitle}>停车收费系统</div>
          <div className={styles['fee-container']}>
            <p>请输入您的车牌号</p>
            <CarPlateInput current={current} onClick={this.handleOnClick} />
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
        <Keyboard />
      </div>
    );
  };
}
