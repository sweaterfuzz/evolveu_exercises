class DblLinkList {
    constructor(head){
        this.head = new Node(head, null, null);
    }

    show() {
        let currNode = this.head;
        let ll = currNode.nodeVal;
        while (currNode.next) {
            currNode = currNode.next;
            ll += " " + currNode.nodeVal;
        }
        return ll;
    }

    lengthLL() {
        let ll = 1;
        let currNode = this.head;
        while (currNode.next) {
            ll++;
            currNode = currNode.next;
        }
        return ll;
    }

    traverseTo(goal) {
        let ll = 1;
        let currNode = this.head;
        while (currNode.next && ll<goal) {
            ll++;
            currNode = currNode.next;
        }
        return currNode;
    }

    add(newNode) {
        let currNode = this.head;
        let prevNode = this.head.previous;
        while (currNode.next) {
            currNode = currNode.next;
            prevNode = currNode.previous;
        }
        currNode.next = new Node(newNode,null,currNode);
    }

    getNextVal(nodeNum){
        let currNode = this.traverseTo(nodeNum);
        if (currNode.next) {
            return currNode.next;
        } else {
            return null;
        }
    }

    getPrevVal(nodeNum){
        let currNode = this.traverseTo(nodeNum);
        if (currNode.previous) {
            return currNode.previous;
        } else {
            return null;
        }
    }
}

class Node {
    constructor(nodeVal,next,prev){
        this.nodeVal = nodeVal;
        this.next = next;
        this.previous = prev;
    }

}

export default {DblLinkList, Node};