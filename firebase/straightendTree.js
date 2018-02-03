function Branch (obj) {
    this.name = obj.name;
    this.attributes = {size: obj.size};
    this.children = [];
}
  
class NewTree {
    constructor() {
        this.parent = null;
        this.current = null;
    }
  
    add(obj) {
        const branch = new Branch(obj);
        let leaves = branch.name.split(" > ");
        branch.name = leaves[0];
        if(!this.parent) {
            this.parent = branch;
        } else if(!this.parent.children.length){
            branch.name = leaves[1];
            this.current = this.parent.children;
            return this.parent.children.push(branch);
        } else {
            return this.traverse(leaves, branch,obj)
        }
    }
    
    traverse(leaves, branch,obj) {
        this.current.forEach(child => {
            if(child.name === leaves[1]){
                leaves.shift();
                obj.name = leaves.join(" > ");
                return this.add(obj);
            } else {
                this.current = this.current[0].children;
                branch.name = leaves[1];
                return this.current.push(branch);
            }
        })
    } 
}

const newTree = new NewTree();

module.exports = {
    newTree
}
