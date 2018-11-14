import jpul from './linkList';

test('Link list tests', () => {
    console.log(jpul);
    let playObj = new jpul.LinkList('first');
    expect(playObj.play()).toBe('this is a string');

    let newNode = new jpul.Node(2,null);
    expect(newNode.nodeVal).toBe(2);

    expect(playObj.head.nodeVal).toBe('first');
    expect(playObj.show()).toBe('first');

    playObj.add('second');
    expect(playObj.show()).toBe('first second');

    playObj.add('third');
    expect(playObj.show()).toBe('first second third');

    playObj.add('fourth');
    expect(playObj.show()).toBe('first second third fourth');

    // --------------------------------------------------------//
    // playObj.addNext('second');
    //expect(playObj.show()).toBe('first second');

    // playObj.addNext('third');
    //expect(playObj.show()).toBe('first second third');

    // playObj.addNext('fourth');
    //expect(playObj.show()).toBe('first second third fourth');
    // --------------------------------------------------------//

    console.log(playObj.head.next.next);
    console.log(playObj.traverse(), playObj.show());
});