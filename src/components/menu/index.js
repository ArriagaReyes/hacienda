import Element from '../element';
import './index.scss';

const catagories = [
    'Entrees', 
    'Specialties', 
    'Breakfast', 
    'Sandwhiches', 
    'Seafood', 
    'kids', 
    'Burgers'
];

export default function Menu() {
    const menu = Element({type: 'section', className: 'grid-rows'});
    const title = Element({type: 'h1'});
    const list = Element({type: 'ul'});
    title.textContent = 'Our Menu';
    menu.appendChild(title);

    catagories.map(
        value => {
            const index = Element({type: 'li'});
            index.textContent = value;
            list.appendChild(index);
        }
    );

    menu.appendChild(list);

    return menu;
}