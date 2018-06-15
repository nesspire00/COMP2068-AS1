/**
 * File: projectsList.js
 * Author: Mykyta Naumenko
 * Website: www.mykytanaumenko.me
 * Description: A Js file containing the list of projects to be dynamically displayed with Vue.js
 * Note: For some reason vue hates me. I left the file incase i want to come back to it later.
 */

const projectsApp = new Vue({
  el: '#projectCards',
  data: {
    projects: [
      {
        class: 'card1-proj',
        name: 'Mary Ventrella Counselling',
        url: 'http://maryventrellacounselling.ca',
        description:
          'A website co-developed with my friend for a professor at Georgian',
      },

      {
        class: 'card2-proj',
        name: 'My Portfolio Project',
        url: 'http://www.mykytanaumenko.me',
        description: 'Yes, it is the very website you are on right now! Whoop!',
      },

      {
        class: 'card3-proj',
        name: 'My GitHub Page',
        url: 'http://github.com/nesspire00',
        description:
          'All my ongoing projects (mostly schoolwork at this point) lives on my GitHub page',
      },
    ],
  },
});
