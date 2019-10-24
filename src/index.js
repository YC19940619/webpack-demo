import Header from './header.js'
import meizi from './images/meizi1.jpg'
import './index.less';
var root = document.getElementById('root');
var img = new Image();
img.src = meizi;
img.classList.add('logo');
root.append(img);
new Header();
