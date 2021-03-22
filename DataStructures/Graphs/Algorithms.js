import { Queue } from "../Queue/Queue.js";

function printEdges(G) {
  const V = G.getVertexs();
  for (const v of V) {
    for (const u of G.neighborList(v)) {
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
    for (const v of G.neighborList(u)) {
      indegree[v]--;
      if (indegree[v] == 0) Q.enqueue(v);
    }
  }

  for (const v of V) {
    if (indegree[v] != 0) {
      throw new Error(
        "A cycle was found. For a graph to be topologcially sorted it must be acyclic"
      );
    }
  }

  return sequence;
}

export { printEdges, topologicalSort };
