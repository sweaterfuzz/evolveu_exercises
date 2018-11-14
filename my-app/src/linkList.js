class LinkList {
    constructor(head){
        this.head = new Node(head, null);
    }
    // play method
    play() {
        return 'this is a string';
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

    addNext(newNode) {
        let nextNode = this.head.next;
        while (nextNode) {
            nextNode = nextNode.next;
        }
        nextNode = new Node(newNode,null); 
        // nextNode pointer gets set to new Node object rather than 
        // this.head.next getting set to new Node object.
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