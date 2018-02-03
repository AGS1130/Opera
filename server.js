const fireData = require("./firebase/firebase.js");

/*1. First, we'll need data*/
const familyTree = require("./parseXML/familyTree.json");
/*2. Second, we'll need to store it somewhere*/
// fireData.writeData(familyTree);
/*3. Making sense of it*/
fireData.fetchData();
/*4. Now it's time to show the data again*/
