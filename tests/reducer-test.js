// import reducer from '../app/reducer/reducer';

module('reducer', () => {
  test('default state', (assert) => {
    assert.deepEqual(reducer(null, {}), { characters: [] }, { comics: [] }, 'default state');
  });

  test('load series', (assert) => {
    const oldState = { seriesData: null, characters: [], comics: [], modal: null };
    const action = { type: 'SERIES_INFO@FIND_COMPLETE', data: { name: 'Spiderman' } };
    const newState = { seriesData: { name: 'Spiderman' }, characters: [], comics: [], modal: null };

    assert.deepEqual(reducer(oldState, action), newState);
  });
});
