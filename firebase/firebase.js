const fs = require("fs");
const firebase = require("firebase");
const straightendTree = require("./straightendTree.js");

const config = {
//Firebase API Key
};

firebase.initializeApp(config);

/*Write*/

const writeData = (familyTree) => {
    for(let i = 0; i < familyTree.length; i++){
        firebase.database().ref('familyTree').push({
            name: familyTree[i].name,
            size: familyTree[i].size
        })
    }
};

/*Fetch*/

const fetchData = () => {
    firebase.database().ref('familyTree')
    .once('value')
    .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
            straightendTree.newTree.add(childSnapshot.val());
        })
        fs.writeFileSync("./firebase/straightenTree.json", JSON.stringify(straightendTree.newTree.parent), (err) => {
            if(err) return console.log(err);
            console.log("Sorted tree in JS")
        })
    })
    .catch((e) => {
        console.log('Error in retiving data', e)
    })
}

module.exports = {
    writeData,
    fetchData
}
