/**
 * @file Common functions.
 * @author Alexey Ptitsyn <numidium.ru@gmail.com>
 */

interface IRandomResult {
  rnd: number;
  result: any;
}

/**
 * Get random item from array.
 */
function getRandomFromArray(arr: any[], prevRnd?: number): IRandomResult {
  const len = arr.length;

  let rnd: number;
  do {
    rnd = Math.floor(Math.random() * len);
    if(arr.length == 1) break;
  } while(prevRnd == rnd);

  return {
    rnd: rnd,
    result: arr[rnd]
  };
}


export {
  IRandomResult,
  getRandomFromArray
}
