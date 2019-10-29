function createItem(){
  var item = document.createElement('div');
  item.innerHTML = 'item512';
  item.setAttribute('id','item');

  document.body.append(item);
}

export default createItem


