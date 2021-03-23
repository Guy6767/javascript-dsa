import { Queue } from "../Queue/Queue.js";

function printEdges(G) {
  const V = G.getVertexs();
  for (const v of V) {
    for (const u of G.neighbors(v)) {
      console.log(`(${u}, ${v})`);
    }
  }
}

function topologicalSort(G) {
  if (!G.directed) {
    throw new Error("G must be directed to be topologcially sorted");
  }

  const sequence = [];
  const Q = new Queue();
  const indegree = {};

  const V = G.getVertexs();
  const E = G.getEdges();

  for (const v of V) {
    indegree[v] = 0;
  }

  for (const [u, v] of E) {
    indegree[v]++;
  }

  for (const v of V) {
    if (indegree[v] == 0) {
      Q.enqueue(v);
    }
  }

  while (!Q.isEmpty()) {
    const u = Q.dequeue();
    sequence.push(u);
    for (const v of G.neighbors(u)) {
      indegree[v]--;
      if (indegree[v] == 0) Q.enqueue(v);
    }
  }

  for (const v of V) {
    if (indegree[v] != 0) {
      throw new Error(
        "A circuit was found. For a graph to be topologcially sorted it must be acyclic"
      );
    }
  }

  return sequence;
}

// FIXME: should validates the connectivity of the graph
function hasEulerianCircuit(G) {
  // undirected graph - check if every node degree is even
  if (!G.directed) {
    return G.getVertexs().every(v => G.neighbors(v).length % 2 == 0);
  }
  // directed graph - compare d_in(v) == d_out(v) for every v in V
  const degreesIn = {};
  G.getEdges().forEach(([u, v]) => {
    degreesIn[v] = degreesIn[v] ? degreesIn[v] + 1 : 1;
  });
  return G.getVertexs().every(v => G.neighbors(v).length == degreesIn[v]);
}

function findCiruit(G, v0) {
  const L = [v0];

  let v = v0;
  while (G.vertexs[v].pos) {
    const u = G.vertexs[v].pos.data.name;
    G.vertexs[v].pos = G.vertexs[v].pos.next;
    L.push(u);
    v = u;
  }
  return L;
}

function findEulerianCircuit(G) {
  if (!hasEulerianCircuit(G)) {
    throw new Error(
      "A eulerian circuit can not be found in a non eulerian graph"
    );
  }
  // set up a pos for every vertex
  for (const v of G.getVertexs()) {
    G.vertexs[v].pos = G.neighborList(v).head;
  }
  // start the first circle from a random vertex
  let v = G.getVertexs()[0];
  let L = findCiruit(G, v);
  let current = 0;

  while (current < L.length) {
    v = L[current];
    // get to the next vertex with unused edges
    if (!G.vertexs[v].pos) {
      current++;
    } else {
      // paste the circle found from v into L
      L.splice(current, 1, ...findCiruit(G, v));
    }
  }

  return L;
}

export {
  printEdges,
  topologicalSort,
  hasEulerianCircuit,
  findCiruit,
  findEulerianCircuit,
};
