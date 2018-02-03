const wordValue = /words="(.*?)"/g;
let bloodLines = []; /*"name"*/
let family = {}; /*"size"*/

const removeGeneration = () => {
    let lastGeneration = bloodLines.pop();
    let parent = bloodLines[bloodLines.length - 1]

    family[lastGeneration] === 0 ? family[parent] += 1 : family[parent] += family[lastGeneration];  
    let temp = family[lastGeneration];
    delete family[lastGeneration];
    if(lastGeneration) return [lastGeneration, temp]
}

const addGeneration = (line) => {
    let str = line.match(wordValue);
    if(str) {
        var child = str[0].substring(7, str[0].length - 1);
        bloodLines.push(child);
        family[child] = 0;
    }
    return [bloodLines.join(" > "), child]
}

module.exports = {
    removeGeneration,
    addGeneration
}