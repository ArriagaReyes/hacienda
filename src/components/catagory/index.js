import Element from '../element';
import './index.scss';

export default function Catagory(name, list, callBack) {
    const NAVBAR = document.getElementById('nav');
    const CATAGORY = Element({type: 'section'});
    const TITLE = Element({type: 'h1'});
    CATAGORY.style.height = `calc(100% - ${NAVBAR.clientHeight}px)`;
    TITLE.textContent = name;
    
    CATAGORY.appendChild(TITLE);
    CATAGORY.appendChild(List(list));
    CATAGORY.appendChild(Close(callBack));

    return CATAGORY;
}

function List(arr) {
    const LIST = Element({type: 'ul', className: 'items'});

    for (const item of arr) {
        const ITEM = Element({type: 'li'});
        const NAME = Element({type: 'div'});
        const TEXT = Element({type: 'div'});

        NAME.textContent = item.name;
        TEXT.textContent = item.text;

        ITEM.appendChild(NAME);
        ITEM.appendChild(TEXT);

        LIST.appendChild(ITEM);
    }

    return LIST;
}

function Close(callback) {
    const BUTTON = Element({type: 'button'});
    BUTTON.textContent = 'button';
    BUTTON.addEventListener(
        'click',
        e => {
            callback();
        }
    );

    return BUTTON;
}