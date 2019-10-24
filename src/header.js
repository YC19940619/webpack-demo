const Header = function () {
  var root = document.getElementById('root');
  var header = document.createElement('div');
  header.innerText = 'header'
  header.classList.add('iconfont','iconiconfontchongzhi')
  root.append(header);
}

export default Header
