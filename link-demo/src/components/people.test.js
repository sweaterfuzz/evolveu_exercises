import ppl from './people';

test('People tests', () => {
    // test linked list constructor    
    let pplObj = new ppl.People();
    expect(pplObj).toBeInstanceOf(ppl.People);

    let p = new ppl.People('Andie', 33, 'biking');
    p.birthday();   
    expect(p.age).toBe(34);
    expect(p.show()).toBe('Andie, 34, biking');

    let a = new ppl.People('Andie', 33, 'biking');
    let b = new ppl.People('Vina', 33, 'writing');
    let c = new ppl.People('Christie', 64, 'hiking');
    let friends = [a,b,c];
    let totalAge = 0;
    for (var f=0; f<friends.length ; f++) {
        totalAge += friends[f].age;
    }
    expect(totalAge).toBe(130);

    for (var f=0; f<friends.length ; f++) {
        friends[f].birthday();
    }
    totalAge = 0;
    for (var f=0; f<friends.length ; f++) {
        totalAge += friends[f].age;
    }
    expect(totalAge).toBe(133);

    let me = new ppl.People('Julia', 33, 'skiing');
    let mentor = new ppl.People('B', 67, 'climbing');
    me.myMentor = mentor;
    expect(me.show()).toBe('Julia, 33, skiing');
    expect(me.myMentor.show()).toBe('B, 67, climbing');
    expect(me.myMentor.age).toBe(67);

    me.myMentor.birthday();
    expect(me.myMentor.age).toBe(68);

    let myfriends = new ppl.Friends();
    expect(myfriends).toBeInstanceOf(ppl.Friends);
    myfriends.addFriend('an', 3, 'art');
    expect(myfriends.friends[0].age).toBe(3);
    expect(myfriends.addFriend('be',2,'kites')).toBe('an, 3, art<br>be, 2, kites<br>');

    expect(myfriends.birthdays()).toBe('an, 4, art<br>be, 3, kites<br>');
    expect(myfriends.totalAge()).toBe(7);
    expect(myfriends.friends.length).toBe(2);




});