import Navbar from './components/navbar/index.js';

const root = document.getElementById('root');
const section = document.createElement('div');
section.id = 'dynamic-section';

root.appendChild(Navbar('Home', 'Menu', 'About'));
root.appendChild(section);