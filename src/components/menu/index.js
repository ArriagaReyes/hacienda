import Element from '../element';
import List from '../catagory/index';
import { breakfast } from '../catagories/breakfast';
import { burgers } from '../catagories/burgers';
import { entrees } from '../catagories/entrees';
import { kids } from '../catagories/kids';
import { sandwhiches } from '../catagories/sandwhiches';
import { seafood } from '../catagories/seafood';
import { specialties } from '../catagories/specialties';
import './index.scss';

const catagories = [
    ['Entrees', entrees],
    ['Specialties', specialties],
    ['Breakfast', breakfast],
    ['Sandwhiches', sandwhiches],
    ['Seafood', seafood],
    ['Kids', kids],
    ['Burgers', burgers]
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
            const catagory = List(value[1]);
            content.textContent = value[0];
            content.addEventListener(
                'click',
                e => {
                    if(catagory.className === 'items') {
                        catagory.className = 'items items-show';
                    } else {
                        catagory.className = 'items';
                    }
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