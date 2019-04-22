function HashTable(size){
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function HashNode(key,value,next){
    this.key = key;
    this.value = value;
    this.next = next||null;
}


HashTable.prototype.hash = function(key){
    var total = 0;
    for(var i=0;i<key.length;i++){
        total+=key.charCodeAt(i);
    }
    return total%this.numBuckets;
}

HashTable.prototype.insert = function(key,value){
    var index = this.hash(key);
    if(!this.buckets[index]){
        this.buckets[index] = new HashNode(key,value);
    }
    else{
        var currentNode = this.buckets[index];
        while(currentNode.next){
            if(currentNode.next.key == key){
                currentNode.next.value = value;
                return;
            }
            currentNode=currentNode.next;
        }
        currentNode.next = new HashNode(key,value);
    }
}
var ht = new HashTable(30);

ht.insert('Nitin','nitin.arora.nit@gmail.com');
ht.insert('Ntini','nitin@gmail.com');
ht.insert('Dean','dean@gmail.com');

console.log(ht);