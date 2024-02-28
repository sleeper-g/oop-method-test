import Character from './../classes/Character';

test('valid arguments', () => {
  const result = new Character('username', 'Bowerman');
  expect(result).toEqual({
    name: 'username',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: null,
    defence: null,
  });
});

test('short name', () => {
  expect(() => new Character('A', 'Bowerman')).toThrowError('wrong name');
});

test('long name', () => {
  expect(() => new Character('QWERTYUIOPL', 'Swordsman')).toThrowError('wrong name');
});

test('invalid type', () => {
  expect(() => new Character('username', '')).toThrowError('wrong type');
});

test('wrong levelup', () => {
  const oleg = new Character('username', 'Bowerman');
  oleg.health = 0;
  expect(() => oleg.levelUp().toThrowError('character dead'))
})
test('wrong damage', () => {
  const oleg = new Character('username', 'Bowerman');
  oleg.health = 0;
  expect(() => oleg.damage(1).toThrowError('character dead'))
})
