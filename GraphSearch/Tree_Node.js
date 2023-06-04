// User defined class node
class TNode {
    // constructor
    constructor(element)
    {
        this.prev = null;           // Parent 'TNode'.
        this.element = element;
        this.next = [];             // May have more than one child.
    }
}


exports.TNode = TNode;