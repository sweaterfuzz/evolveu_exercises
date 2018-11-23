import jpul from './linkedList2';

test('Link list tests', () => {
    console.log(jpul);
    let playObj = new jpul.LinkList('first');

    let newNode = new jpul.Node(2,null);
    expect(newNode.nodeVal).toBe(2);

    expect(playObj.head.nodeVal).toBe('first');
    expect(playObj.show()).toBe('first');
    expect(playObj.lengthLL()).toBe(1);

    playObj.add('second');
    expect(playObj.show()).toBe('first second');

    playObj.add('third');
    expect(playObj.show()).toBe('first second third');

    playObj.add('fourth');
    expect(playObj.show()).toBe('first second third fourth');

    expect(playObj.traverseTo(3)).toBe('third');
    expect(playObj.traverseTo(1)).toBe('first');

    expect(playObj.lengthLL()).toBe(4);

    expect(playObj.remove(3)).toBe('first second fourth');
    expect(playObj.remove(3)).toBe('first second');
    expect(playObj.remove(1)).toBe('second');
    expect(playObj.head.nodeVal).toBe('second');
    expect(playObj.head.next).toBeNull;
    expect(playObj.remove(3)).toBe('Please enter a valid node number');

    expect(playObj.insert(1,'three')).toBe('second three');
    expect(playObj.insert(1,'two-point-five')).toBe('second two-point-five three');
    expect(playObj.insert(0,'one')).toBe('one second two-point-five three');
    expect(playObj.insert(4,'four')).toBe('one second two-point-five three four');
    
});