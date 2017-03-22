const Node = require('./node');

class LinkedList {
	
	 	
	LinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.list = {};
    }

    append(data) {
    	if(list.size() <=0){
    		this.head = data;
    		this.tail = data;
    		this.length=1;
    		list.add(data);
    	}
    	
    	this.tail = data;
    	this.length+=1;
    	this.list.add(data);
    }

    head() {
    	return this.head;
    }

    tail() {
    	return this.tail;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
    	return this.head==null;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
