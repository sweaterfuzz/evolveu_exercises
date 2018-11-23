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
        return currNode.nodeVal;
    }

    traverseToNode(goal) {
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
        while (currNode.next) {
            currNode = currNode.next;
        }
        currNode.next = new Node(newNode,null);
    }

    remove = (aNode) => {
        let delNode = this.traverseToNode(aNode);
        let prevNode = null;
        if (aNode === 1) {
            // delete the head node
            this.head = delNode.next;
        } else if (aNode === this.lengthLL()) {
            prevNode = this.traverseToNode(aNode-1);
            prevNode.next = null;
        } else if (aNode < this.lengthLL() && aNode > 1) {
            prevNode = this.traverseToNode(aNode-1);
            prevNode.next = delNode.next;
        } else {
            return 'Please enter a valid node number';
        }
        return this.show();
    }

    insert = (aNode, newVal) => {
        if (aNode === this.lengthLL()) {
            this.add(newVal);
        } else if (aNode > 0 && aNode < this.lengthLL()){
            let currNode = this.traverseToNode(aNode);
            let newNode = new Node(newVal);
            newNode.next = currNode.next;
            currNode.next = newNode;
        } else if (aNode === 0) {
            let newNode = new Node(newVal);
            newNode.next = this.head;
            this.head = newNode;
        } else {
            return 'Please enter a valid node number';
        }
        return this.show();
    }
}

class Node {
    constructor(nodeVal,next){
        this.nodeVal = nodeVal;
        this.next = next;
    }
}

export default {LinkList, Node};