import { combineReducers } from 'redux';
import seriesData from './series-info';
import characters from './character-data';
import comics from './comic-data';
import modal from './modal';

export default combineReducers({
  seriesData,
  comics,
  characters,
  modal
});
