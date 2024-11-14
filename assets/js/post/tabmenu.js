class tabMenuBase{
  constructor(e){
    this.element = e;
    this.items = e.getElementsByTagName('div');

    this.selector = document.createElement('ul');
    this.selector.classList.add('ptm_selector');

    this.cur = e.dataset.default ? e.dataset.default : this.items.item(0).title;
    for(const item of this.items){
      const name = item.title;
      const li = this.createSelectorItem(name);

      if(this.cur === name){
        item.setAttribute('show', '');
        li.setAttribute('select', '')
      }

      this.selector.appendChild(li);
    }

    this.selector.addEventListener('click', this.selectHandler.bind(this));

    e.prepend(this.selector);
  }

  createSelectorItem(item){
    const li = document.createElement('li');
    li.classList.add('ptm_item');
    li.dataset.title = item;
    li.innerText = item;
    return li;
  }

  selectHandler(ev){
    if(!ev.target.classList.contains('ptm_item'))
      return;
    
    this.selector.querySelector('li[data-title=\"' + this.cur + '\"]').removeAttribute('select');
    this.element.querySelector('div[title=\"' + this.cur + '\"]').removeAttribute('show');

    const title = ev.target.dataset.title;
    this.cur = title;
    ev.target.setAttribute('select', '');
    this.element.querySelector('div[title=\"' + title + '\"]').setAttribute('show', '');
  }
}

window.addEventListener('DOMContentLoaded', function(){
  for(const temp of document.getElementsByClassName('tab-menu')){
    new tabMenuBase(temp);
  }
});