import Home from '../home/index';

export default function DynamicSection() {
    const section = document.createElement('div');
    section.id = 'dynamic-section';
    section.className = 'dynamic';
    section.appendChild(Home());

    return section;
}