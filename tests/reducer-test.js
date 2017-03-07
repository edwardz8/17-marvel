import reducer from '../app/reducer/reducer';

// module('reducer', () => {
//  test('default state', (assert) => {
//    assert.ok(reducer(null, {}), { characters: [] }, { comics: [] }, 'default state');
//  });

test('it is working', (assert) => {
  assert.ok(true);
});


test('load series', (assert) => {
  const oldState = { seriesData: null, characters: [], comics: [], modal: null };
  const action = { type: 'SERIES_INFO@FIND_COMPLETE', data: { name: 'Spiderman' } };
  const newState = { seriesData: { name: 'Spiderman' }, characters: [], comics: [], modal: null };

  assert.deepEqual(reducer(oldState, action), newState);
});

test('find characters', (assert) => {
  const oldState = { seriesData: null, characters: [], comics: [], modal: null };
  const action = { type: 'SERIES_INFO@LOAD_COMPLETE', data: { name: 'Spiderman' } };
  const newState = { seriesData: { name: 'Spiderman' }, characters: [], comics: [], modal: null };

  assert.deepEqual(reducer(oldState, action), newState);
});
