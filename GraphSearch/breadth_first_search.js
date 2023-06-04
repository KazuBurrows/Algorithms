// BFS(v){
//     {add v to queue and mark it}
//     Add(Q, v)
//     Mark v as visited
//     while (not IsEmpty(Q)) do
//     begin
//         w = QueueFront(Q)
//         Remove(Q)
//         {loop invariant : there is a path from vertex w to every vertex in the queue Q}
//         for each unvisited vertex u adjacent to w do
//         begin
//             Mark u as visited
//             Add(Q , u)
//         end { for }
//     end{ while
// }

const { Queue } = require("./Queue.js");
const { AdjacencyList } = require("./AdjacentList.js");

let g = new AdjacencyList(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log(g.GRAPH)



/**
 * 
 * @param {int} v "starting node."
 * @param {int} searchNode "node to find."
 */
function BFS(v, searchNode) {
    let graphSize = g.GRAPH.length;

    let QUEUE = new Queue(graphSize);
    let visited = new Array(graphSize);
    for(let i=0; i<graphSize; i++)
        visited[i] = false;


    QUEUE.enqueue(v);
    visited[v] = true;

    while (!QUEUE.isEmpty()) {
        let u = QUEUE.peek();
        if (u === searchNode) {
            return console.log("Found", u);
        }

        g.GRAPH[u].forEach(element => {
            if (!visited[element]) {
                QUEUE.enqueue(element);
                visited[element] = true;
            }
            
        });


        QUEUE.dequeue();
    }


    return console.log("Cound not find", -1);

}


BFS(1, 3);
