import React from 'react'
import styled from './style.module.css';
import { message, Dialog, DatePicker } from 'tdesign-react';
import { getMayStaticShadowNode } from 'hel-utils';
import { LIB_NAME } from 'configs/subApp';

const attach = () => getMayStaticShadowNode(LIB_NAME, {});

export default React.forwardRef(function MyComp(props: any, ref) {
  console.log('render RemoteComp!!');
  // console.log('props.getEnsuredBodyRoot()', props.helContext.getEnsuredBodyRoot());
  // console.log('getShadowAppRoot', props.helContext.getShadowAppRoot());
  // console.log('getShadowBodyRoot', props.helContext.getShadowBodyRoot());
  // console.log('getStaticShadowBodyRoot', props.helContext.getStaticShadowBodyRoot());
  const [visible, setVisible] = React.useState(false);
  React.useImperativeHandle(ref, () => ({
    hello() { alert('hellow ref'); },
  }))
  React.useEffect(() => {
    console.log('didMount');
    return () => console.log('willUnmount');
  }, []);

  const onCLick = () => {
    message.info({
      content: '来自tdesign-react的提示',
      attach,
    });
  };
  return <div>
    <Dialog visible={visible} attach={attach} onCancel={() => setVisible(false)}>
      test
    </Dialog>
    <DatePicker popupProps={{ attach }} />

    <button onClick={() => setVisible(true)}>show dialog</button>
    <h1 className={styled.card} onClick={onCLick}>hi comp, click me</h1>
    <div>
      see children: {props.children}
      <br />
      see data: {props.data}
    </div>
  </div>

});
