const fs = require("fs");
const lines = fs.readFileSync('./parseXML/rawXML', 'utf-8').match(/<(.*?)>/gm); 
const generations = require('./generations.js');

let familyTree = []; // stores branch

const xmlParser = (line) => {
    const openXML = /<[a-zA-Z]+(.*?)>/gm;
    const closingXML = /<\/[a-zA-Z]+(.*?)>/gm; 

    for(let i = 0; i < line.length; i++){
        if(line[i].match(closingXML)){
            let set = generations.removeGeneration();
            if(set) search(set[0], set[1]);
        } else if(line[i].match(openXML)) {
            let add = generations.addGeneration(line[i]);
            let branch =  new Object(); // {name, size}
            branch["name"] = add[0];
            branch["size"] = add[1];
            if(add[0] !== "") familyTree.push(branch);
        }
    }
    return familyTree;
};

const search = (name, value) => {
    for (let i = 0; i < familyTree.length; i++) {
        if (familyTree[i].size === name) {
            familyTree[i].size = value
            return;
        }
    }
}

fs.writeFileSync("./parseXML/familyTree.json", JSON.stringify(xmlParser(lines)), (err) => {
    if(err) return console.log(err);
    console.log("Sorted tree in JS")
})
