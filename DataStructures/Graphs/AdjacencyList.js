import { DoublyLinkedList as List } from "../LinkedLists/DoublyLinkedList.js";

class AdjacencyList {
  constructor(directed = true) {
    this.lists = {};
    // type can be either directed or undirected
    this.directed = directed;
  }

  neighborList(vertex) {
    return this.lists[vertex];
  }

  areNeightbors(vertexOne, vertexTwo) {
    return !!this.lists[vertexOne].find(vertexTwo, vertexTwo => vertexTwo);
  }

  addEdge(vertexOne, vertexTwo) {
    if (!this.lists[vertexOne]) {
      this.lists[vertexOne] = new List();
    }

    if (!this.lists[vertexTwo]) {
      this.lists[vertexTwo] = new List();
    }

    this.lists[vertexOne].append(vertexTwo);
    if (!this.directed) this.lists[vertexTwo].append(vertexOne);
  }

  deleteEdge(vertexOne, vertexTwo) {
    this.lists[vertexOne].remove(vertexTwo, vertexTwo => vertexTwo);
    if (!this.directed) {
      this.lists[vertexTwo].remove(vertexOne, vertexOne => vertexOne);
    }
  }

  getVertexs() {
    return Object.keys(this.lists);
  }

  getEdges() {
    const edges = [];

    const V = this.getVertexs();

    for (const v of V) {
      for (const u of this.neighborList(v)) {
        edges.push([v, u]);
      }
    }

    return edges;
  }
}

// constant size array of vertex
const getVertexIndex = char => char.charCodeAt(0) - "a".charCodeAt(0);
const getVertexName = index => String.fromCharCode(index + "a".charCodeAt(0));
class AdjacencyListConstantSize {
  constructor(numOfVertexs, directed = true) {
    // an array to hold the lists
    this.lists = Array(numOfVertexs).fill();
    this.lists = this.lists.map(() => new List());
    // set the number of vertexs in the graph
    this.numOfVertexs = numOfVertexs;
    // type can be either directed or undirected
    this.directed = directed;
  }

  neighborList(vertex) {
    const vertexIndex = getVertexIndex(vertex);
    return this.lists[vertexIndex];
  }

  areNeightbors(vertexOne, vertexTwo) {
    const vertexOneIndex = getVertexIndex(vertexOne);
    return !!this.lists[vertexOneIndex].find(vertexTwo, vertexTwo => vertexTwo);
  }

  addEdge(vertexOne, vertexTwo) {
    const vertexOneIndex = getVertexIndex(vertexOne);
    const vertexTwoIndex = getVertexIndex(vertexTwo);

    this.lists[vertexOneIndex].append(vertexTwo);

    if (!this.directed) {
      this.lists[vertexTwoIndex].append(vertexOne);
    }
  }

  deleteEdge(vertexOne, vertexTwo) {
    const vertexOneIndex = getVertexIndex(vertexOne);
    const vertexTwoIndex = getVertexIndex(vertexTwo);
    this.lists[vertexOneIndex].remove(vertexTwo, vertexTwo => vertexTwo);
    if (!this.directed) {
      this.lists[vertexTwoIndex].remove(vertexOne, vertexOne => vertexOne);
    }
  }

  getVertexs() {
    const vertexs = Array(this.lists.length).fill(0);
    return vertexs.map((v, i) => getVertexName(i));
  }

  getEdges() {
    const edges = [];

    const V = this.getVertexs();

    for (const v of V) {
      for (const u of this.neighborList(v)) {
        edges.push([v, u]);
      }
    }

    return edges;
  }
}

export { AdjacencyList };
