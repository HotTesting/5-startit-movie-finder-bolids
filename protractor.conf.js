require('ts-node').register();

module.exports.config = {
<<<<<<< HEAD
    specs: ['movieCard.ts' /*'ex.ts', 'search.ts'*/, /*'movieCard.ts'*/],
=======
    specs: ['spec.ts', 'ex.ts', 'search.ts'],
>>>>>>> c5c845178878272fd0e8d1157b085794053a9267
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    SELENIUM_PROMISE_MANAGER: false
}