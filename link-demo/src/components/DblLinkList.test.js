import jpul from './DblLinkedList';

test('Link list tests', () => {
    
    // test linked list constructor    
    let playObj = new jpul.DblLinkList('first');
    expect(playObj.head.next).toBeNull;
    expect(playObj.head.prev).toBeNull;

    // test node constructor
    let newNode = new jpul.Node(2,null,null);
    expect(newNode.nodeVal).toBe(2);

    // test value of head node, show() and lengthLL()
    expect(playObj.head.nodeVal).toBe('first');
    expect(playObj.show()).toBe('first');
    expect(playObj.lengthLL()).toBe(1);

    // add a second node
    playObj.add('second');
    expect(playObj.show()).toBe('first second');
    let node2 = playObj.head.next;
    expect(node2.nodeVal).toBe('second');
    expect(node2.next).toBeNull;
    expect(node2.previous.nodeVal).toBe('first');

    // add a third node
    playObj.add('third');
    expect(playObj.show()).toBe('first second third');
    let node3 = playObj.head.next.next;
    expect(node3.nodeVal).toBe('third');
    expect(node3.next).toBeNull;
    expect(node3.previous.nodeVal).toBe('second');

    playObj.add('fourth');
    expect(playObj.show()).toBe('first second third fourth');
    let node4 = playObj.head.next.next.next;
    expect(node4.nodeVal).toBe('fourth');
    expect(node4.next).toBeNull;
    expect(node4.previous.nodeVal).toBe('third');

    let grabNode = playObj.traverseTo(3).nodeVal;
    expect(grabNode).toBe('third');
    grabNode = playObj.traverseTo(1).nodeVal;
    expect(grabNode).toBe('first');

    // test previous and next nodes
    expect(playObj.getNextVal(2).nodeVal).toBe('third');
    expect(playObj.getNextVal(3).nodeVal).toBe('fourth');
    expect(playObj.getNextVal(4)).toBeNull;

    expect(playObj.getPrevVal(2).nodeVal).toBe('first');
    expect(playObj.getPrevVal(3).nodeVal).toBe('second');
    expect(playObj.getPrevVal(1)).toBeNull;


    expect(playObj.lengthLL()).toBe(4);
});