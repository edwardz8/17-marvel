import { combineReducers } from 'redux';
import seriesData from './reducer/series-info.js';
import characters from './reducer/character-data.js';
import comics from './reducer/comic-data.js';
import modal from './reducer/modal.js';

export default combineReducers({
  seriesData,
  comics,
  characters,
  modal
});
