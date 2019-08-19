import { Button } from 'antd-mobile';
import React from 'react';
import router from 'umi/router';
import Keyboard from '../../components/CarPlateKeyBoard';

const styles = require('./index.less');


export default class extends React.Component<{}, {}, any> {
  constructor(props) {
    super(props);
  }

  state = {
    keyboardVisible: false,
  };


  public render = () => {
    return (<div className={styles.home}>

      <div
        className={styles.index}
      >
        <div className={styles.title}>云南城建物业智慧商业</div>
        <div className={styles.subtitle}>停车收费系统</div>
        <div className={styles['fee-container']}>
          <p>请输入您的车牌号</p>
          <div className={styles['inpt-box']}>
            <div>云</div>
            <div>A</div>
            <div>*</div>
            <div>A</div>
            <div>8</div>
            <div>0</div>
            <div>6</div>
            <div>5</div>
            <div>新</div>
          </div>
          <Button
            type='primary'
          >
            查询停车费
          </Button>
        </div>
        <Button
          type='primary'
          className={styles['btn-enter']}
          onClick={() => {
            // this.setState({ step: 1 });
            router.push('/entrance');
          }}
        >进入
        </Button>
      </div>
      <Keyboard></Keyboard>
    </div>);
  };
}
