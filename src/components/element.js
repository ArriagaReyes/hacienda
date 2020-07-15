/**
 * 
 * @param {string} type 
 * @param {string} id 
 * @param {string} className
 */
export default function Element(type, id, className) {
    const element = document.createElement(type);

    if(id) { element.id = id; }

    if(className) { element.className = className; }

    return element;
}