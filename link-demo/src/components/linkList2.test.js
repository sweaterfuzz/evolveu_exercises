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
});