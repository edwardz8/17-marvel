// import reducer from '../app/reducer/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('', (assert) => {
    const state = {};
    const action = {};
    const newState = {};

    assert.deepEqual(reducer(state, action), newState);
  });
});
