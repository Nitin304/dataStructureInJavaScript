function LinkedList(){
    this.head = null;
    this.tail = null;
}
function Node(value,next,prev){
    this.value = value;
    this.prev = prev;
    this.next = next;
}
LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value,this.head,null);
    if(!this.head){        
        this.tail = newNode;
    }
    else{
        this.head.prev = newNode;        
    }
    this.head = newNode;
}

LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value,null,this.tail);
    if(this.tail){
        this.tail.next = newNode;
    }
    else{
        this.head = newNode;
    }
    this.tail = newNode;
}

LinkedList.prototype.removehead = function(){
    if(this.head){
        var val = this.head.value;
        this.head = this.head.next;
        if(this.head){
            this.head.prev = null;
        }
        else{
            this.tail = null;
        }
        return val;
    }
    else{
        return null;
    }
}

LinkedList.prototype.removeTail = function(){
    if(this.tail){
        var val = this.tail.value;
        this.tail = this.tail.prev;
        if(this.tail){
            this.tail.next = null;         
        }
        else{
            this.head = null;
        }
        return val;
    }
    else{
        return null;
    }
}

LinkedList.prototype.search = function(searchValue){
    var currentNode = this.head;
    while(currentNode){
        if(searchValue == currentNode.value){
            return currentNode.value;
        }
        currentNode = currentNode.next;
    }
    return null;
}

LinkedList.prototype.indexOf = function(value){
    var returnArr = [];
    var counter = 0;
    var currentNode = this.head;
    while(currentNode){
        if(value == currentNode.value){
            returnArr.push(counter);
        }
        counter++;
        currentNode = currentNode.next;
    }
    return returnArr;
}

var ll =  new LinkedList();
ll.addToHead(1000);
ll.addToHead(909);

ll.addToTail(123);
ll.addToHead(99);
console.log(ll.indexOf(99));
