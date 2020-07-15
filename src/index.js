import Navbar from './components/navbar/index';
import Home from './components/home/index';

const root = document.getElementById('root');
root.style.height = `${window.innerHeight}px`;

const home = Home();

console.log('Adding navbar');
root.appendChild(Navbar('Home', 'Menu', 'About'));
console.log('Adding home');
root.appendChild(home);

/*root.removeChild(root.childNodes[root.childNodes.length - 1]);
console.log('Removed home');
console.log('Adding menu');
root.appendChild(menu);
console.log('Menu added');*/