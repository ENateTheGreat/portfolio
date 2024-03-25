export const menuItemsData = [
    {
        title: 'Home',
        url: '/',
        className: 'home',
        linkClass: 'home-L' 
    },
    {
        title: 'About',
        url: '/about',
        className: 'about',
        linkClass: 'about-L'

    },
    {
        title: 'Portfolio',
        url: '/portfolio',
        className: 'portfolio',
        linkClass: 'portfolio-L',
        ref: 'dropRef',
        submenu: [
            {
                title: 'Dragon Repeller',
                url: '/portfolio/dragonRepeller',
                className: 'dragonRepeller'
            },
            {
                title: 'Weather App',
                url: '/portfolio/weatherApp',
                className: 'weatherApp'
            },
            {
                title: 'Planet Weight',
                url: '/portfolio/planetWeight',
                className: 'planetWeight'
            },
            {
                title: 'Keyboard Code',
                url: '/portfolio/keyboardCode',
                className: 'keyboardCode'
            },
            {
                title: 'Palindrome Checker',
                url: '/portfolio/palindromeChecker',
                className: 'palindromeChecker'
            },
            {
                title: 'Number Generator',
                url: '/portfolio/numberGenerator',
                className: 'numberGenerator'
            }
        ]
    }
]