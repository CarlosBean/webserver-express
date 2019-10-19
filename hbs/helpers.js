const hbs = require('hbs');

//helpers
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalize', (text) => {
    let words = text.split(' ');
    words.forEach((word, i) => {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return words.join(' ');
})