require('ts-node').register();

module.exports.config = {
    specs: ['spec.ts', 'ex.ts', 'search.ts'],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    SELENIUM_PROMISE_MANAGER: false
}