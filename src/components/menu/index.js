import Element from '../element';
import Catagory from '../catagory/index';
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
            const content = Element({type: 'a'});
            const catagory = Catagory(value, [{name: 'name', text: 'text'}, {name: 'name', text: 'text'}]);
            content.textContent = value;
            content.addEventListener(
                'click',
                e => {
                    catagory.style.display = 'block';
                }
            );
            index.appendChild(content);
            index.appendChild(catagory);
            list.appendChild(index);
        }
    );

    menu.appendChild(list);

    return menu;
}