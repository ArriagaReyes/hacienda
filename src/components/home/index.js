import Element from '../element';
import Menu from '../menu/index';

export default function Home() {
    const home = Element('div', 'Home', 'section');
    const title = Element('div', null, 'title');
    const content = Element('div', null, 'sub-title');
    const menuLink = Element('div', null, 'menu-link');
    title.textContent = 'Hacienda "La Margarita"';
    content.textContent = '5239 Main St South Fallsburg, NY';
    menuLink.textContent = 'Our Menu';
    menuLink.addEventListener(
        'click',
        e => {
            const root = document.getElementById('root');
            root.childNodes[root.childNodes.length - 1].replaceWith(Menu());
            document.getElementById('page').textContent = 'Menu';
        }
    );

    home.appendChild(title);
    home.appendChild(content);
    home.appendChild(menuLink);

    return home;
}