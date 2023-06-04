const { AdjacencyList } = require("./AdjacentList.js");

let g = new AdjacencyList(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log(g.GRAPH)

let visited = new Array(4);
        for(let i = 0; i < 4; i++)
            visited[i] = false;


/**
 * vertex
 * @param {int} v
 * @param {int} searchNode
 */
function DFS(v, searchNode) {
    console.log("v", v)
    if (visited[v] == true) {
        return;
    }

    if (v === searchNode) {
        return console.log("FOUND", v);
    }

    visited[v] = true;

    // adjacent verticies of v.
    let v_adj = g.GRAPH[v];
    let v_next;
    for (let i=0; i<v_adj.length; i++) {
        v_next = v_adj[i]

        // If vertex has not been visited.
        if (!visited[v_next]) {
            DFS(v_next, searchNode)
        }


    }

    return;
}




DFS(0, 4)