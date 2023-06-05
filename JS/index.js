import nav from './modules/navigation.js';
import doDate from './modules/displaydate.js';
import BookCollection from './modules/bookcollection.js';

const bookCollection = new BookCollection();
bookCollection.render();


//display content as per navigation selection
nav();
//display time 
setInterval(doDate, 1000);