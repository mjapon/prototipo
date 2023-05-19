import { animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

interface Articulo {
  codbarra: String,
  nomecommerce: String,
  descripcion: String
}

@Injectable()
export class NodeService {

  constructor(private http: HttpClient) { }

  getFiles() {
    return this.http.get<any>('assets/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
  }

  getLazyFiles() {
    return this.http.get<any>('assets/files-lazy.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
  }

  getArticulos() {
    return this.http.get<any>('assets/articulos.json')
      .toPromise()
      .then(res => <Articulo[]>res.data);
  }

  getArticuloPorCodigobarra(articulos: Articulo[], codbarra: string) {
    let response = null;
    articulos.forEach(art => {
      if (art.codbarra === codbarra) {
        response = art;
      }
    });

    return response;
  }

  getCatalogos() {
    return this.http.get<any>('assets/catalogos.json')
      .toPromise()
      .then(res => <Articulo[]>res.data);
  }

  getCatalogosGen() {
    return this.http.get<any>('assets/catalogosgen.json')
      .toPromise()
      .then(res => <Articulo[]>res.data);
  }

  getCtgs() {
    return this.http.get<any>('assets/ctgs.json')
      .toPromise()
      .then(res => <Articulo[]>res.data);
  }

  getFeatures() {
    return this.http.get<any>('assets/features.json')
      .toPromise()
      .then(res => <Articulo[]>res.data);
  }

  getCodigosDelivery(deliverymap: any, codigo: string) {
    let codigos = [];
    for (const key in deliverymap) {
      if (key === codigo) {
        codigos = deliverymap[key];
      }
    }

    return codigos;
  }

  removeItemFromArray(array: Array<any>, item: any) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === item) {
        array.splice(i, 1);
        i--;
      }
    }
  }

  addItemToArray(arreglo: Array<any>, item: any) {
    if (arreglo.indexOf(item) === -1) {
      arreglo.push(item);
    }
  }


  getChildrenMarked(childrens: TreeNode[], codigos: any): TreeNode[] {
    let childrensmarked: TreeNode[] = [];
    childrens.forEach((item: TreeNode) => {
      codigos.forEach((codigo: any) => {
        if (codigo === item.key) {
          let newItemMarked = structuredClone(item);
          newItemMarked.children = undefined;
          if (item.children) {
            let subchildrensmarkd = this.getChildrenMarked(item.children, codigos);
            if (subchildrensmarkd.length > 0) {
              newItemMarked.children = subchildrensmarkd;
            }
          }
          childrensmarked.push(newItemMarked);
        }
      });
    });
    return childrensmarked;
  }

  buildDeliveryTree(arbol: TreeNode[], codigos: any, buildTree: TreeNode[]) {
    arbol.forEach((item: TreeNode) => {
      codigos.forEach((codigo: any) => {
        if (item.key === codigo) {
          let newNode: TreeNode = structuredClone(item);
          if (item.children) {
            newNode.children = undefined;
            let childrenmarked = this.getChildrenMarked(item.children, codigos);
            if (childrenmarked.length > 0) {
              newNode.children = childrenmarked;
            }
          }
          buildTree.push(newNode);
        }
      });
    });
  }

  getNodeWithKey(key: string | undefined, nodes: TreeNode[]): TreeNode | undefined {
    for (let node of nodes) {
      if (node.key === key) {
        return node;
      }

      if (node.children) {
        let matchedNode = this.getNodeWithKey(key, node.children);
        if (matchedNode) {
          return matchedNode;
        }
      }
    }
    return undefined;
  }

  marcarArbol(arbol: TreeNode[], key: string, selectedNodes: TreeNode[]) {
    arbol.forEach((item: TreeNode) => {
      if (item.key === key) {
        selectedNodes.push(item);
      }
      if (item.children) {
        this.marcarArbol(item.children, key, selectedNodes)
      }
    });
  }

}
