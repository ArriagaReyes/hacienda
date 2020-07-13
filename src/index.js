import Navbar from './components/navbar/index.js';
import DynamicSection from './components/dynamic/index';

const root = document.getElementById('root');

root.appendChild(Navbar('Home', 'Menu', 'About'));
root.appendChild(DynamicSection());
