import { mul } from './d';
import('./b.js').then(m => m.add(200, 100)); //require.ensure() 是 webpack 特有的，已经被 import() 取代。
export function sub(a, b) {
  return a - b + mul(100, 50);
}