const test = require('node:test');
const assert = require('assert');
const App = require('./app');

test('Should return the expected result', (t) => {
  const list = [1,9,5,0,20,-4,12,16,7];
  const sum = 12;
  const expected = [[12,0],[16,-4],[7,5]];
  assert.deepEqual(App.solution(list, sum), expected);
});

test('Should return empty array since there is no solution', (t) => {
  const list = [1,9,5,0,20,-4,12,16,7];
  const sum = 0;
  const expected = [];
  assert.deepEqual(App.solution(list, sum), expected);
});