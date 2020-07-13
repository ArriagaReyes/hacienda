export default function Navbar(homeSection, menuSection, aboutSection) {
    const navbar = document.createElement('div');
    const pageName = document.createElement('div');
    const links = document.createElement('div');
    const linksArr = [
        Link(true,() => {togglePageName('Home')}, 'Home'), 
        Link(true,() => {togglePageName('About')}, 'About'), 
        Link(true,() => {togglePageName('Menu')}, 'Menu')
    ];

    const toggleNav = () => {
        const links = document.getElementById('links');
        if(links.className === 'links') {
            links.className = 'links show';
        } else if(links.className === 'links show') {
            links.className = 'links';
        }
    }

    const togglePage = (name) => {
        const section = document.getElementById('dynamic-section');
        //section.removeChild(document.getElementById('Home'));
    }

    const togglePageName = (name) => {
        togglePage(name);
        pageName.textContent = name;
    }

    navbar.className = 'nav';
    pageName.textContent = 'Home';
    pageName.className = 'content';
    links.className = 'links';
    links.id = 'links';
    links.addEventListener('click', toggleNav);

    linksArr.forEach(
        element => {
            links.appendChild(element);
        }
    );

    navbar.appendChild(Button(true, toggleNav));
    navbar.appendChild(pageName);
    navbar.appendChild(links);

    return navbar;
}

function Button(addEvent, eventFunction) {
    const button = document.createElement('div');
    button.textContent = 'Button';
    button.className = 'content';

    if(addEvent) {
        button.addEventListener(
            'click',
            e => {
                eventFunction(e);
            }
        );
    }

    return button;
}

function Link(addEvent, eventFunction, content) {
    const container = document.createElement('div');
    const link = document.createElement('a');
    container.className = 'link';
    container.textContent = content;
    
    if(addEvent) {
        container.addEventListener(
            'click', 
            e => {
                if(eventFunction) {
                    eventFunction(e);
                } else {
                    console.log('No callback function passed.');
                    return null;
                }
            }, 
            false
        );
    }

    container.appendChild(link);
    
    return container;
}