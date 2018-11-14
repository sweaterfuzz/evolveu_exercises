class LinkList {
    constructor(head){
        this.head = new Node(head, null);
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

    traverse() {
        let ll = 1;
        let currNode = this.head;
        while (currNode.next) {
            ll++;
            currNode = currNode.next;
        }
        return ll;
    }

    add(newNode) {
        let currNode = this.head;
        while (currNode.next) {
            currNode = currNode.next;
        }
        currNode.next = new Node(newNode,null);
    }
}

class Node {
    constructor(nodeVal,next){
        this.nodeVal = nodeVal;
        this.next = next;
    }
}

export default {LinkList, Node};