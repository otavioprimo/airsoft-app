import Reactotron, {overlay} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import {NativeModules} from 'react-native';

declare global {
  interface Console {
    tron: any;
  }
}

const reactotron = Reactotron.configure({
  name: 'Covil',
  host: NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0],
})
  .useReactNative()
  .use(reactotronRedux())
  .use(overlay())
  .use(sagaPlugin({}))
  .connect();

reactotron.clear();

console.tron = reactotron;

export default reactotron;
