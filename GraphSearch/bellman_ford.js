

class Edge {
    constructor(src, dest, weight) {
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }
}
   
class Graph {
    constructor(V, E) {
        this.V = V;
        this.E = E;
        this.edge = [];
    }
}


/**
 * 
 * @param {int} V "Number of verticies in graph."
 * @param {int} E "Number of edges in graph."
 * @returns "An array of 'E' number of edge objects."
 */
function createGraph(V, E) {
    let graph = new Graph(V, E);
    for (let i=0; i<E; i++) {
        graph.edge[i] = new Edge();

    }
    return graph;
}


/**
 * 
 * @param {Graph} graph 
 * @param {int} S "Starting node."
 */
function bellman_ford(graph, S) {
    let V = graph.V;
    let E = graph.E;

    let dist = [];
    for (let i=0; i<V; i++) {       // Initially set every cost to node(Vertice) to infinity.
        dist[i] = Infinity;
    }
    dist[S] = 0;                    // And set starting node cost to 0.


    for (let j=0; j<V-1; j++) {     // 'V-1' since starting node will always be cost 0.
        for (let k=0; k<E; k++) {
            let E = graph.edge[k]
            let e_from = E.src;
            let e_to = E.dest;
            let e_cost = E.weight;

            let curr_cost_to = dist[e_to];              // Current cost from source to dest.
            let new_cost_to = dist[e_from] + e_cost;    // New cost from source to dest.
            if (new_cost_to < curr_cost_to) {           // Update if new cost is less than current cost.
                dist[e_to] = new_cost_to;

            }
        }

    }



    // for (let i = 0; i < E; i++) {
    //     const u = graph.edge[i].src;
    //     const v = graph.edge[i].dest;
    //     const weight = graph.edge[i].weight;
    //     if (dist[u] + weight < dist[v]) {
    //       console.log("Graph contains negative weight cycle");
    //     //   return;
    //     }
    //   }





    

    console.log(dist);

}






const V = 5;
const E = 8;
const graph = createGraph(V, E);
 
graph.edge[0] = new Edge(0, 1, -1);
graph.edge[1] = new Edge(0, 2, 4);
graph.edge[2] = new Edge(1, 2, 3);
graph.edge[3] = new Edge(1, 3, 2);
graph.edge[4] = new Edge(1, 4, 2);
graph.edge[5] = new Edge(3, 2, 5);
graph.edge[6] = new Edge(3, 1, 1);
graph.edge[7] = new Edge(4, 3, -3);
 
bellman_ford(graph, 0);