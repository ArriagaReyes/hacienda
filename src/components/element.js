/**
 * 
 * @param {object} param 
 * Param holds three variables
 * type, id and className.
 * 
 * @returns HTMLElement
 */
export default function Element(param) {
    const element = document.createElement(param.type);

    if(param.id) { element.id = param.id; }

    if(param.className) { element.className = param.className; }

    return element;
}