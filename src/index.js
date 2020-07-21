import Navbar from './components/navbar/index';
import Home from './components/home/index';

const root = document.getElementById('root');
root.style.height = `${window.innerHeight}px`;

window.addEventListener(
    'resize', 
    e => {
        root.style.height = `${window.innerHeight}px`;
        console.log('Resized');
    }
);

const home = Home();

console.log('Adding navbar');
root.append(Navbar());
root.append(Home());


/*root.removeChild(root.childNodes[root.childNodes.length - 1]);
console.log('Removed home');
console.log('Adding menu');
root.appendChild(menu);
console.log('Menu added');*/