function BST(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
BST.prototype.insert = function(value){
    //All our nodes will be created with BST constructor
    if(value<=this.value){
        if(!this.left){
            this.left = new BST(value);
        }
        else{
            this.left.insert(value);
        }
    }
    else if(value>this.value){
        if(!this.right){
            this.right = new BST(value);
        }
        else{
            this.right.insert(value);
        }
    }
}


BST.prototype.contains = function(searchValue){
    if(this.value ==searchValue){
        return true;
    }
    else if(searchValue<this.value && this.left){
        return this.left.contains(searchValue);
    }
    else if(searchValue>this.value && this.right){
        return this.right.contains(searchValue);
    }
    
    return false;
}


//In order from Left to right
// BST.prototype.depthFirstTraversal = function(interatorFunc){
//     if(this.left) this.left.depthFirstTraversal(interatorFunc);
//     interatorFunc(this.value);
//     if(this.right) this.right.depthFirstTraversal(interatorFunc);
// }

//Three ways- In-order, Pre-order, post-order

BST.prototype.depthFirstTraversal = function(interatorFunc,order){
    if(order === 'pre-order')interatorFunc(this.value);
    if(this.left) this.left.depthFirstTraversal(interatorFunc,order);
    if(order==='in-order')interatorFunc(this.value);
    if(this.right) this.right.depthFirstTraversal(interatorFunc,order);
    if(order==='post-order')interatorFunc(this.value);
}


BST.prototype.breadthFirstTraversal = function(interatorFunc){
    var q = [this];
    while(q.length){
        var treeNode = q.shift();
        interatorFunc(treeNode.value);
        if(treeNode.left)q.push(treeNode.left);
        if(treeNode.right)q.push(treeNode.right);
    }
}

BST.prototype.getMinVal = function(){
    if(this.left){
        return this.left.getMinVal();
    } 
    else{
        return this.value;
    } 
}
BST.prototype.getMaxVal = function(){
    if(this.right){
        return this.right.getMaxVal();
    } 
    else{
        return this.value;
    } 
}

var b = new BST(50);
b.insert(30);
b.insert(70);
b.insert(25);
b.insert(105);
b.insert(100);
b.insert(60);
b.insert(59);
b.insert(35);
b.insert(10);
b.insert(20);
b.insert(85);
b.insert(45);
function log(value){
    console.log(value)
}

console.log(b.getMinVal());
console.log(b.getMaxVal());