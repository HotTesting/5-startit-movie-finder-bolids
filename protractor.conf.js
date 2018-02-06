require('ts-node').register();

module.exports.config = {
    specs: ['movieCard.ts' /*'ex.ts', 'search.ts'*/, /*'movieCard.ts'*/],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    SELENIUM_PROMISE_MANAGER: false
}