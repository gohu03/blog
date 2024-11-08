export const $side_menu = {
  e: document.getElementById('lsm_e1f08971'),
  btn: document.getElementById('lsm_faca0a10'),
  handler: function(ev){
    if(!this.e.contains(ev.target)){
      ev.preventDefault();
      this.hide();
      return;
    }

    if(ev.target.classList.contains('lsm_sub-toggle')){
      let btn = ev.target;
      let container = ev.target.closest('.lsm_item-container');
      let sub = container.getElementsByClassName('lsm_subcategories').item(0);
      if(btn.hasAttribute('show')){
        btn.removeAttribute('show');
        sub.style.height = '0px';
      }
      else{
        btn.setAttribute('show', '');
        sub.style.height = sub.scrollHeight + 'px';
      }

      let cur = container.parentElement;
      while(!cur.classList.contains('lsm_items')){
        if(cur.classList.contains('lsm_subcategories')){
          if(btn.hasAttribute('show')){
            cur.style.height = (cur.scrollHeight + sub.scrollHeight) + 'px'
          }
          else {
            cur.style.height = (cur.scrollHeight - sub.scrollHeight) + 'px'
          }
        }
        cur = cur.parentElement;
      }
    }
  },
  show: function(ev){
    ev.stopPropagation();
    this.e.removeAttribute('hidden');
    this.btn.removeEventListener('click', this.showBound);

    window.addEventListener('click', this.handlerBound);
  },
  hide: function(){
    this.e.setAttribute('hidden', '');
    this.btn.addEventListener('click', this.showBound);
    window.removeEventListener('click', this.handlerBound);
  },
  init(){
    this.showBound = this.show.bind(this);
    this.handlerBound = this.handler.bind(this);

    this.btn.addEventListener('click', this.showBound);
  }
};

$side_menu.init();
