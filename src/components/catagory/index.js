import Element from '../element';

export default function Catagory(name, list) {
    const catagory = Element({type: 'section'});
    const title = Element({type: 'div'});

    title.textContent = name;
    
    catagory.appendChild(title);

    return catagory;
}