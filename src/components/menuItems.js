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
                urlA: '/portfolio/dragonRepeller/about',
                className: 'dragonRepeller',
                classNameA: 'dragonRepeller-about', // look into using items.submenu.urlA ?: (ternary operator)
                index: 1,
            },
            {
                title: 'Weather App',
                url: '/portfolio/weatherApp',
                urlA: '/portfolio/weatherApp/about',
                className: 'weatherApp',
                classNameA: 'weatherApp-about',
                index: 2,
            },
            {
                title: 'Planet Weight',
                url: '/portfolio/planetWeight',
                urlA: '/portfolio/planetWeight/about',
                className: 'planetWeight',
                classNameA: 'planetWeight-about',
                index: 3,
            },
            {
                title: 'Keyboard Code',
                url: '/portfolio/keyboardCode',
                urlA: '/portfolio/keyboardCode/about',
                className: 'keyboardCode',
                classNameA: 'keyboardCode-about',
                index: 4,
            },
            {
                title: 'Palindrome Checker',
                url: '/portfolio/palindromeChecker',
                urlA: '/portfolio/palindromeChecker/about',
                className: 'palindromeChecker',
                classNameA: 'palindromeChecker-about',
                index: 5,
            },
            {
                title: 'Number Generator',
                url: '/portfolio/numberGenerator',
                urlA: '/portfolio/numberGenerator/about',
                className: 'numberGenerator',
                classNameA: 'numberGenerator-about',
                index: 6,
            }
        ]
    }
]