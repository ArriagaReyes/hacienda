import Element from '../element';
import './index.scss';

export default function Navbar() {
    const nav = Element({type: 'nav'});
    const list = List();

    nav.append(list);

    return nav;
}

function List() {
    const list = Element({type: 'ul'});
    const home = Link({id: 'Home', textContent: 'Home', className: 'current'});
    const menu = Link({id: 'Menu', textContent: 'Menu'});
    const about = Link({id: 'About', textContent: 'About'});

    list.append(home);
    list.append(menu);
    list.append(about);

    return list;
}

function Link(param) {
    const container = Element({type: 'li'});
    const link = Element({type: 'a', className: param.className, id: param.id});
    link.textContent = param.textContent;

    if(param.callback) {
        link.addEventListener(
            'click',
            e => {
                param.callback(e);
            }
        );
    }

    container.append(link);

    return container;
}