import './index.css'
import createItem from './cRT'
setInterval(function(){
  createItem()
},2000)

if (module.hot) {
  module.hot.accept('./cRT.js', function() {
    console.log('Accepting the updated printMe module!');
  })
}
