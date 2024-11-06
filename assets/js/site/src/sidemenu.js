export const $side_menu = {
  e: document.getElementById('lsm_e1f08971'),
  btn: document.getElementById('lsm_faca0a10'),
  handler: {
    stopPropagation(e){
      e.stopPropagation();
    }
  },
  show: function(e){
    e.stopPropagation();
    this.e.setAttribute('disabled', 'disabled');
    this.e.classList.remove('hidden');
    this.btn.removeEventListener('click', this.showBound);

    this.e.addEventListener('click', this.handler.stopPropagation);
    window.addEventListener('click', this.hideBound);
  },
  hide: function(){
    this.e.classList.add('hidden');
    this.btn.addEventListener('click', this.showBound);
    this.e.removeEventListener('click', this.handler.stopPropagation);
    window.removeEventListener('click', this.hideBound);
  },
  init(){
    this.showBound = this.show.bind(this);
    this.hideBound = this.hide.bind(this);

    this.btn.addEventListener('click', this.showBound);
  }
};

$side_menu.init();
