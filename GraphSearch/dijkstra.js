const { Queue } = require("./Queue.js");
const { AdjacencyMatrix } = require("./AdjacentMatrix.js");
const { LinkedList } = require("./LinkedList.js");



// https://www.freecodecamp.org/news/dijkstras-algorithm-explained-with-a-pseudocode-example/
// https://www.programiz.com/dsa/dijkstra-algorithm






// Every nodes shortest path weight. All set to infinity by default. 
let dist = [];
// Best path in graph, ----------------------------------. 
// let path = new AdjacencyMatrix(GRAPH.length, false);
let path = [];
// When all paths from the node has been considered,
//  the node will be updated to 'true'. 
let completed = [];
// A queue to nodes that still needs its shortest path measured
let Q;



/**
 * 
 * @param {AdjacencyMatrix} GRAPH "Matrix array."
 * @param {int} S "Starting node."
 */
function Dijkstra(GRAPH, S) {
    // Setup size of arrays.
    for (let i=0; i<GRAPH.length; i++) {
        dist.push(Infinity);
        path.push(null);
        completed.push(false);
    }
    dist[S] = 0;
    path[S] = S;
    
    
    Q = new Queue(GRAPH.length);
    Q.enqueue(S);

    // Node to explore min edge of.
    let v;

    // Traverse through every node. 'GRAPH.length-1' to exclude 'S'. 
    while (!Q.isEmpty()) {
        v = Q.peek();
        // traverse 'v' and find all adjacent nodes of 'v' not 'completed'
        // add adjacent nodes of 'v' to 'Q'
        // update edges of adjacent nodes of 'v' if better
        findMinPath(GRAPH, v);
        // mark 'v' as 'completed'
        completed[v] = true;
        // and remove from 'Q'
        Q.dequeue();
        

    }

}



/**
 * Traverse 'V' and find all adjacent nodes of 'V' not considered 'Completed'.
 * Add the adjacent nodes to 'Q'.
 * Update all edges of ajacent nodes of 'V' if better.
 * @param {AdjacencyMatrix} GRAPH 
 * @param {int} v "The node that we will traverse to find all its neighbours."
 */
function findMinPath(GRAPH, v) {
    // Weight of path from 'v' to 'u'.
    let v_u_weight;
    // loop through every adjacent neighbour.
    for (let u=0; u<GRAPH.length; u++) {
        v_u_weight = GRAPH[u][v];
        // If 'v_u_weight' is 0, then u is not an adjacent neighbour, 'continue'.
        if (v_u_weight <= 0) {
            continue;
        }

        // Current dist[v] is worse than 'u's shortest path + 'v' to 'u' edge weight.
        if (dist[v] > dist[u] + v_u_weight) {
            dist[v] = dist[u] + v_u_weight;
            path[v] = u;
        }
        // ------------------------------------
        if (dist[u] > dist[v] + v_u_weight) {
            dist[u] = dist[v] + v_u_weight;
            path[u] = v;
        }


        // If 'u's shortest path has not been measured and completed. && 'u' is not already in 'Q'.
        if (completed[u] == false && Q.hasElement(u) == false){
            Q.enqueue(u);
            // console.log(u)
        } 

    }

}



/**
 * If new min path is found change 'AdjacencyMatrix' in 'path'.
 * @param {Array} path
 * @param {int} v
 * @param {int} u
 */
function changePath(path, v, u) {


}








a = new AdjacencyMatrix(7, true);
a.addWeightedEdge(0,1,2);
a.addWeightedEdge(0,2,1);

a.addWeightedEdge(1,3,2);
a.addWeightedEdge(1,4,6);
a.addWeightedEdge(1,6,2);

a.addWeightedEdge(2,3,8);
a.addWeightedEdge(2,5,5);

a.addWeightedEdge(3,6,3);
a.addWeightedEdge(3,5,4);

a.addWeightedEdge(4,6,3);

a.addWeightedEdge(5,6,3);



// console.log(a.GRAPH.length)
a.printGraph();



Dijkstra(a.GRAPH, 0);



console.log(path)
console.log(dist)
