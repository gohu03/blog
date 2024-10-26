export function throttle(callback, delay){
  let timer;
  return (ev) => {
    if(timer) return;
    timer = setTimeout(() => {
      callback(ev);
      timer = null;
    }, delay);
  }
}