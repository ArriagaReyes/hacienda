import Navbar from './components/navbar/index';
import Home from './components/home/index';
import Element from './components/element';

const root = document.getElementById('root');
root.style.height = `${window.innerHeight}px`;

window.addEventListener(
    'resize', 
    e => {
        root.style.height = `${window.innerHeight}px`;
        console.log('Resized');
    }
);

const home = Element({type: 'div'});
home.textContent = 'Home';

const menu = Element({type: 'div'});
menu.textContent = 'Menu';

root.append(Navbar({Home: home, Menu: menu}));
root.append(Home());


/*root.removeChild(root.childNodes[root.childNodes.length - 1]);
console.log('Removed home');
console.log('Adding menu');
root.appendChild(menu);
console.log('Menu added');*/