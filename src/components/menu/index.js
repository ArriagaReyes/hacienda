import Element from '../element';

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
    const menu = Element('div', 'Menu', 'section');
    const title = Element('div', null, 'title');
    title.textContent = 'Our Menu';
    menu.appendChild(title);

    catagories.map(
        value => {
            const index = Element('div', null, 'sub-title');
            index.textContent = value;
            menu.appendChild(index);
        }
    );

    return menu;
}