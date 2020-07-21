import Element from '../element';
import Menu from '../menu/index';
import './index.scss';

export default function Home() {
    const home = Element({type: 'section'});
    const title = Element({type: 'h1'});
    const content = Element({type: 'h2'});
    const menuLink = Element({type: 'a'});
    title.innerHTML = `
        <div>Hacienda</div>
        <div>"La</div>
        <div>Margarita"</div>
    `;
    content.innerHTML = `
        <div>5239 Main St South Fallsburg, NY</div>
        <div>845-434-0416</div>
    `;

    menuLink.textContent = 'Our Menu';
    /*menuLink.addEventListener(
        'click',
        e => {
            const root = document.getElementById('root');
            root.childNodes[root.childNodes.length - 1].replaceWith(Menu());
            document.getElementById('page').textContent = 'Menu';
        }
    );*/

    home.appendChild(title);
    home.appendChild(content);
    //home.appendChild(menuLink);

    return home;
}