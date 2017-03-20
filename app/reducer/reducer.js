import { combineReducers } from 'redux';
import seriesInfo from './series-info';
import characters from './character-data';
import comics from './comic-data';
import modal from './modal';

export default combineReducers({
  seriesInfo,
  characters,
  comics,
  modal
});
