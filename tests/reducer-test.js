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
  const oldState = { characters: [], comics: [], modal: null, seriesData: null };
  const action = { type: 'CHARACTERS@FIND_ALL_COMPLETE', data: { name: 'Spiderman' } };
  const newState = { characters: [{ name: 'Spiderman' }], comics: [], modal: null, seriesData: null };

  assert.deepEqual(reducer(oldState, action), newState);
});

test('find comics', (assert) => {
  const oldState = { characters: [], comics: [], modal: null, seriesData: null };
  const action = { type: 'COMICS@FIND_ALL_COMPLETE', data: [{ name: 'Spiderman' }] };
  const newState = { comics: [{ name: 'Spiderman' }], characters: [], modal: null, seriesData: null };

  assert.deepEqual(reducer(oldState, action), newState);
});


test('modal', (assert) => {
  const oldState = { characters: [], comics: [], modal: null, seriesData: null };
  const action = { type: 'MODAL@SET', data: { message: 'Read More' } };
  const newState = { comics: [], characters: [], modal: { message: 'Read More' }, seriesData: null };

  assert.deepEqual(reducer(oldState, action), newState);
});

test('modal clear', (assert) => {
  const oldState = { characters: [], comics: [], modal: null, seriesData: null };
  const action = { type: 'MODAL@CLEAR' };
  const newState = { comics: [], characters: [], modal: null, seriesData: null };

  assert.deepEqual(reducer(oldState, action), newState);
});
