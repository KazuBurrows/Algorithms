const { TNode } = require('./Tree_Node.js');


class LinkedTreeList {
    /**
     * Linked list where parent can have more than one child. 
     * @param {int} S "Head of list"
     */
    constructor(S)
    {
        this.head = S;
        this.size = 0;
    }



    /**
     * 
     * @param {int} prev "parent node"
     * @param {int} element "node"
     */
    add(prev, element) {
        // find index of 'prev'



        let node = new TNode(element);

        let curr = this.head;

        // iterate to the end of the
        // list
        while (curr.next != []) {
            curr = curr.next;

        }
        // add node
        current.next = node;


    }


    
    /**
     * Find and return the index of 'element'. 
     * @param {int} element 
     * @returns {int, int} "x,y indexs."
     */
    indexOf(element) {
        var x = 0;
        var current = this.head;
 
        // iterate over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return x;
            x++;
            current = current.next;
        }
 
        // not found
        return -1;

    }


}





let lList = new LinkedTreeList(0);

