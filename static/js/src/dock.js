import { throttle } from './optimize/throttle.js';

class Dock{
  name = 'dock';
  hide = false;
  opend = false;

  constructor(){
    this.e = document.getElementsByClassName(this.name).item(0);

    if ( window.innerWidth < 1440 ){
      this.hide = true;
      this.e.classList.add('hidden');
    }
  }

  clicked = () => {
    if(this.e.classList.contains('hidden'))
      this.e.classList.remove('hidden');
    else
      this.e.classList.add('hidden');
  }
  
  scrolled = () => {
    this.e.classList.remove('hidden');
  }

  listener = () => {
    if( window.innerWidth < 1000 && !this.opend ) {
      window.addEventListener('click', this.clicked);
      window.addEventListener('scroll', this.scrolled);
      this.opend = true;
    }
    else if (window.innerWidth > 1000 && this.opend ){
      window.removeEventListener('click', this.clicked);
      window.removeEventListener('scroll', this.scrolled);
      this.opend = false;
    }
  }
}

const $dock = new Dock();
$dock.listener();
window.addEventListener('resize', throttle($dock.listener, 1000));

$dock.e.addEventListener('click', (e) => {
  e.stopPropagation();
})