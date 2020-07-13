export default function Home() {
    const home = document.createElement('div');
    const title = document.createElement('div');
    const content = document.createElement('div');
    home.id = 'Home';
    home.className = 'home';
    title.textContent = 'Hacienda "La Margarita"';
    content.textContent = '5239 Main St South Fallsburg, NY';

    home.appendChild(title);
    home.appendChild(content);



    return home;
}