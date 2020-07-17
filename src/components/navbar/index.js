import Home from '../home/index';
import Menu from '../menu/index';
import './index.scss';

export default function Navbar(homeSection, menuSection, aboutSection) {
    const home = Home();
    const menu = Menu();

    const navbar = document.createElement('div');
    const pageName = document.createElement('div');
    const links = document.createElement('div');
    const linksArr = [
        Link(true,() => {togglePageName('Home')}, 'Home'), 
        Link(true,() => {togglePageName('About')}, 'About'), 
        Link(true,() => {togglePageName('Menu')}, 'Menu')
    ];

    const toggleNav = () => {
        const links = document.getElementById('links');
        if(links.className === 'links') {
            links.className = 'links show';
        } else if(links.className === 'links show') {
            links.className = 'links';
        }
    }

    const togglePage = (name) => {
        const root = document.getElementById('root');
        if(name === pageName.textContent) {
            return;
        } else if(name === 'Home') {
            console.log(root.children.Home);
            root.replaceChild();
        } else if(name === 'Menu') {
            console.log(root.childNodes[root.childNodes.length - 1]);
//            root.childNodes[root.childNodes.length - 1].replaceWith(menu);
        }
    }

    const togglePageName = (name) => {
        togglePage(name);
        pageName.textContent = name;
    }

    navbar.className = 'nav';
    pageName.id = 'page';
    pageName.textContent = 'Home';
    pageName.className = 'content';
    links.className = 'links';
    links.id = 'links';
    links.addEventListener('click', toggleNav);

    linksArr.forEach(
        element => {
            links.appendChild(element);
        }
    );

    navbar.appendChild(Button(true, toggleNav));
    navbar.appendChild(pageName);
    navbar.appendChild(links);

    return navbar;
}

function Button(addEvent, eventFunction) {
    const button = document.createElement('div');
    const icon = document.createElement('i');
    icon.className = 'fa fa-bars';
    icon.style.fontSize = '1.5rem';
    button.className = 'content';

    button.appendChild(icon);

    if(addEvent) {
        button.addEventListener(
            'click',
            e => {
                eventFunction(e);
            }
        );
    }

    return button;
}

function Link(addEvent, eventFunction, content) {
    const container = document.createElement('div');
    container.className = 'link';
    container.textContent = content;
    
    if(addEvent) {
        container.addEventListener(
            'click', 
            e => {
                if(eventFunction) {
                    eventFunction(e);
                } else {
                    console.error('No callback function passed.');
                    return null;
                }
            }, 
            false
        );
    }
    
    return container;
}