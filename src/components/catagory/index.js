import Element from '../element';
import './index.scss';

export default function List(arr) {
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