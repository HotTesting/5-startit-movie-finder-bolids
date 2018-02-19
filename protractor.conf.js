require("ts-node").register();

module.exports.config = {
  specs: ['lesson5task.ts' /*'search.ts' ,'spec.ts',  'navigation.ts' , "movieCArd.ts" */],
  baseUrl: "https://movies-finder.firebaseapp.com/",
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: { 
  browserName: 'chrome', 
  enableVNC: true,
  name: "YOUR NAME HERE" // Just to identify your session between others on selenoid ui
},
};
