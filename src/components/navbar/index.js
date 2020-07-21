import Element from '../element';
import './index.scss';

export default function Navbar() {
    const nav = Element({type: 'nav'});
    const list = List();

    nav.append(list);

    return nav;
}

function Toggle() {
    // Do something to change 'page'    
}

function List() {
    const list = Element({type: 'ul'});
    const home = Link({textContent: 'Home', className: 'current'});
    const menu = Link({textContent: 'Menu'});
    const about = Link({textContent: 'About'});

    list.append(home);
    list.append(menu);
    list.append(about);

    return list;
}

function Link(param) {
    const container = Element({type: 'li'});
    const link = Element({type: 'a', className: param.className});
    link.textContent = param.textContent;

    container.append(link);

    return container;
}