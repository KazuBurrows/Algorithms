const { Node } = require('./C_Node.js');

// linkedlist class
class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
 

    /**
     * Add new node to the end of the list.
     * @param {int} element "New node element."
     */
    add(element) {
        let node = new Node(element);
        // Current node used for traversing.
        let current;

        if (this.head == null) {
            this.head = node;

        } else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;

            }
            // add node
            current.next = node;
            
        }
        this.size++;
    }



    insertAt(element, index) {
        if (index < 0 || index > this.size) {           // Base case.
            return console.log("Please enter a valid index.");
        
        } else {                                        // If 1 or more nodes are in linked list.
            let node = new Node(element);
            let curr, prev;

            curr = this.head;

            if (index == 0) {
                node.next = curr;
                node = this.head;
                
            } else {
                let i=0;

                while (i < index) {
                    prev = curr;
                    curr = curr.next;

                    i++;
                }

                prev.next = node;
                node.next = curr;
            }
            
            this.size++;
        }
        
    }




    removeFrom(index) {
        let curr, prev;

        curr = this.head;
        prev = curr;        // For when 'this.size' == 1.


        if (index < 0 || index > this.size) {           // Base case.
            return console.log("Please enter a valid index.");

        } else {                                        // If 1 or more nodes are in linked list.
            if (index === 0) {
                this.head = curr.next;
            } else {
                let i=0;

                while (i < index) {
                    prev = curr;
                    curr = curr.next;

                    i++;
                }
                
                prev.next = curr.next;
            }
            this.size--;

            return console.log("Removed " + curr.element + ".");
        }
    }




    removeElement(element) {
        if (this.size == 0) {
            return console.log("Linked list is empty.");

        } else {
            let curr = this.head;
            let prev = curr;

            while (curr != null ) {
                if (curr.element == element) {
                    if (this.size == 1) {           // Can't set 'null'.next to null.
                        this.head = null;
                    } else {
                        prev.next = curr.next;
                    }
                    
                    return console.log("Removed " + curr.element + ".");
                }

                prev = curr;
                curr = curr.next;
            }

            return console.log("Did not find element in linked list.");
        }

    }




 
    // finds the index of element
    indexOf(element) {
        var count = 0;
        var current = this.head;
 
        // iterate over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }
 
        // not found
        return -1;
    }
 
    // checks the list for empty
    isEmpty() {
        return this.size == 0;
    }
 
    // gives the size of the list
    size_of_list() {
        console.log(this.size);
    }
 
 
    // prints the list items
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}


// let lList = new LinkedList();
// lList.add(0);
// lList.add(1);
// lList.add(4);
// lList.add(5);

// lList.insertAt(7, 1);
// lList.removeElement(1);

// curr = lList.head;
// lList.printList();

// console.log(lList)


exports.LinkedList = LinkedList;