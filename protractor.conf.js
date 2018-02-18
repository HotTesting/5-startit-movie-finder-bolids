require("ts-node").register();

module.exports.config = {
  specs: ['lesson5task.ts' /*'search.ts' ,'spec.ts',  'navigation.ts' , "movieCArd.ts" */],
  directConnect: true,
  baseUrl: "https://movies-finder.firebaseapp.com/",
  SELENIUM_PROMISE_MANAGER: false
};
