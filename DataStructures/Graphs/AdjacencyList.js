import { DoublyLinkedList as List } from "../LinkedLists/DoublyLinkedList.js";
import { toArray } from "../LinkedLists/Algorithms.js";

class AdjacencyList {
  constructor(directed = true) {
    this.vertexs = {};
    this.directed = directed;
  }

  neighborList(v) {
    return this.vertexs[v].neighborsList;
  }

  neighbors(v) {
    return toArray(this.vertexs[v].neighborsList).map(v => v.name);
  }

  areNeightbors(u, v) {
    return !!this.vertexs[u].neighborsList.find(v, v => v.name);
  }

  addEdge(u, v) {
    // initialize new vertexs
    if (!this.vertexs[u]) this.vertexs[u] = this.createNewVertex();
    if (!this.vertexs[v]) this.vertexs[v] = this.createNewVertex();
    // create the edge (u,v) and (v,u)
    const uv = this.createNewNeighborNode(v);
    const vu = this.createNewNeighborNode(u);
    // add the edges to the neighbors list
    this.vertexs[u].neighborsList.append(uv);
    if (!this.directed) this.vertexs[v].neighborsList.append(vu);
  }

  deleteEdge(u, v) {
    this.vertexs[u].neighborsList.remove(v, v => v.name);
    if (!this.directed) {
      this.vertexs[v].neighborsList.remove(u, u => u.name);
    }
  }

  getVertexs() {
    return Object.keys(this.vertexs);
  }

  getEdges() {
    const edges = [];
    const V = this.getVertexs();

    for (const v of V) {
      for (const u of this.neighbors(v)) {
        edges.push([v, u]);
      }
    }

    return edges;
  }

  createNewVertex() {
    return {
      neighborsList: new List(),
      pos: null,
    };
  }

  createNewNeighborNode(v, identicalEdge = null) {
    return {
      name: v,
      used: false,
    };
  }
}

export { AdjacencyList };
