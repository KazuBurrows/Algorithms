const { LinkedList } = require("./LinkedList.js");



class AdjacencyList {
    /**
     * 
     * @param {int} V "Number of verticies in graph."       <-- Not needed anymore.
     */
    constructor(v)
    {
        this.GRAPH = new Array(v);
        for (let i=0; i<v; i++) {
            this.GRAPH[i] = [];
        }
    }

    addEdge(v, u)
    {
         
        // Add w to v's list.
        this.GRAPH[v].push(u);
    }
    
    // /**
    //  * Add an edge to the graph.
    //  * @param {Array(2)} edge "Consists of e.g [node1, node2] and edge from node1 to node2"
    //  */
    // addEdge(edge) {
    //     let u = edge[0];
    //     let v = edge[1];

    //     let vertexIndex = this.vertexExists(u);
    //     if (vertexIndex != -1) {        // if vertex already exists in 'GRAPH' array.
    //         let vertexLinked = this.GRAPH[vertexIndex];
    //         vertexLinked.add(v);        // add 'v' to linked list.


    //     } else {                        // Create a new linked list in 'GRAPH' array.
    //         let vertexLinks = new LinkedList();
    //         vertexLinks.add(u);
    //         vertexLinks.add(v);
            
    //         this.GRAPH.push(vertexLinks);
    //     }

        

    // }


    
    // /**
    //  * Searches if 'element' already exists in 'GRAPH' array.
    //  * @param {int} element 
    //  * @returns {int} "Index of vertex in 'GRAPH' array."
    //  */
    // vertexExists(element) {
    //     let head;
    //     let i=0;
    //     while (i<this.GRAPH.length) {
    //         head = this.GRAPH[i].head.element;
    //         if (head == element) {
    //             return i;
    //         }

    //         i++;
    //     }

    //     return -1;
    // }



    // /**
    //  * Prints graph traversal. 
    //  */
    // printGraph() {
    //     let adj_edges = "";

    //     let curr;
    //     let i=0;
    //     while (i<this.GRAPH.length) {
    //         curr = this.GRAPH[i].head;          // Reset curr to new linked list head for traversal. 

    //         adj_edges += curr.element;
    //         while (curr.next) {
    //             adj_edges += " -> " + curr.next.element;

    //             curr = curr.next;
    //         }
    //         console.log(adj_edges)
            
    //         adj_edges = "";                     // Reset text message. 
    //         i++;
    //     }

    // }

}


exports.AdjacencyList = AdjacencyList;


// let a = new AdjacencyList(3);
// a.addEdge(0,1)
// a.addEdge(2,1)
// a.addEdge(0,4)
// a.addEdge(0,2)
// a.addEdge(1,0)
// a.addEdge(2,3)


// console.log(a)
// a.printGraph();