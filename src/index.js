import { helper } from './helper';
import * as Umd from 'umd-module'
helper.help();
console.log(Umd)
document.write(JSON.stringify(Umd));
const index = {
  name: 'index',
  asyncFn: async function () {
    console.log('index async fn')
  }
}
index.asyncFn();