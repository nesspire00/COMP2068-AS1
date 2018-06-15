/**
 * File: servicesList.js
 * Author: Mykyta Naumenko
 * Website: www.mykytanaumenko.me
 * Description: A Js file containing the list of services to be dynamically displayed with Vue.js
 * Note: For some reason vue hates me. I left the file incase i want to come back to it later.
 */

const servicesApp = new Vue({
  el: '#serviceList',
  data: {
    services: [
      {
        title: 'Web',
      },
      {
        title: 'Web2',
      },
    ],
  },
});
