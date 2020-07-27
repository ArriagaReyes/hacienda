import Navbar from './components/navbar/index';
import Home from './components/home/index';
import Menu from './components/menu/index';
//import Home from './components/home/index';
import Element from './components/element';

const root = document.getElementById('root');
root.style.height = `${window.innerHeight}px`;

root.appendChild(Navbar());

window.addEventListener(
    'resize', 
    e => {
        root.style.height = `${window.innerHeight}px`;
        console.log('Resized');
    }
);

// Page interaction logic

const homeLink = document.getElementById('Home');
const menuLink = document.getElementById('Menu');
const home = Home();
const menu = Menu();
let section = home;

root.appendChild(section);

function RemoveClass(name) {
    const currentElements = document.getElementsByClassName(name);
    for (let i = 0; i < currentElements.length; i++) {
        currentElements[i].className = '';
    }
}

homeLink.addEventListener(
    'click',
    e => {
        if(section === home) return;
        root.className = 'red';
        RemoveClass('current');
        homeLink.className = 'current';
        section.replaceWith(home);
        section = home;
    }
);

menuLink.addEventListener(
    'click',
    e => {
        if(section === menu) return;
        root.className = 'yellow';
        RemoveClass('current');
        menuLink.className = 'current';
        section.replaceWith(menu);
        section = menu;
    }
);