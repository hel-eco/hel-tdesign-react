## hel-tdesign-react
基于 hel-tpl-remote-react-comp-ts 改造的远程 tdesign-react 模块，此版本基于[0.42.1](https://0_42_1-tdesign-react.surge.sh/react/overview)构建

## 发布

```
npm run build
npm run publish
```

## 使用
访问[线上示例](https://codesandbox.io/s/hel-demo-use-tedesign-nw8bfb)

入口文件预加载
```ts
import { preFetchLib } from 'hel-micro';

async function main(){
  await preFetchLib('hel-tdesign-react');
  await import('./loadApp');
}

main().catch(console.error);
```

其他地方正常导入使用
```tsx
import { Button } from 'hel-tdesign-react';

<Button>remote button</Button>
```
